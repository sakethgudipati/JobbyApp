import {Component} from 'react'
import Header from '../Header/index'
import Profile from '../Profile/index'

class JobsRoute extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="jobs-container">
          <div className="profile-container">
            <Profile />
          </div>
        </div>
      </>
    )
  }
}

export default JobsRoute
