import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="logo"
        />
      </Link>
      <ul className="header-list">
        <Link className="link header-item" to="/">
          <li>Home</li>
        </Link>
        <Link className="link header-item" to="/jobs">
          <li>Jobs</li>
        </Link>
      </ul>
      <button type="button" className="logout-button" onClick={onClickLogOut}>
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
