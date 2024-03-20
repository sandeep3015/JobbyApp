import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = () => {
  const {history} = this.props
  const onSubmitLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="navbar-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="jobby-logo-image"
      />
      <ul className="home-jobs-container">
          <Link to="/" className="link-item link-list">
            <li>Home</li>
          </Link>

          <Link to="/jobs" className="link-item link-list">
            <li>Jobs</li>
          </Link>
      </ul>
      <button type="button" className="logout-button">
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
