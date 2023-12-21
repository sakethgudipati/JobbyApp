import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
  }

  onSubmitFailure = errMsg => {
    this.setState({errorMsg: errMsg})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.err_msg)
    }
  }

  render() {
    const {errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="bg-container">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="login-logo"
            alt="website logo"
          />
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <label htmlFor="username" className="label-element">
              USERNAME
            </label>
            <input
              id="username"
              className="input-element"
              placeholder="username"
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password" className="label-element">
              PASSWORD
            </label>
            <input
              id="password"
              className="input-element"
              placeholder="password"
              onChange={this.onChangePassword}
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="error-msg">{errorMsg}</p>
        </div>
      </div>
    )
  }
}

export default LoginForm
