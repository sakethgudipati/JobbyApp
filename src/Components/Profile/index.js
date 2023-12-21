import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Profile extends Component {
  state = {
    profileInfo: [],
  }

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const profileDetails = [...data.profile_details]
      console.log(profileDetails)
    }
  }

  render() {
    const {profileInfo} = this.state
    console.log(profileInfo)
    return (
      <div className="profile">
        <h1 className="profile-name">Rahul </h1>
        <p className="profile-role">Lead Software Developer</p>
      </div>
    )
  }
}

export default Profile
