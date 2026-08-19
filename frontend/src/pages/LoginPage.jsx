import './LoginPage.css'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="login-page">

      <div className="login-card">

        {/* Logo */}
        <Link to="/" className="login-logo">
          <span className="login-logo-mark">W</span>
          <span>WabiSeminar</span>
        </Link>

        {/* Heading */}
        <div className="login-heading">
          <h1>Welcome back 👋</h1>
          <p>Sign in to continue to WabiSeminar.</p>
        </div>

        {/* Form */}
        <form className="login-form">

          {/* Email */}
          <div className="login-field">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="login-field password-field">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-content">

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
              />

              <a
                href="#forgot"
                className="forgot-password"
              >
                Forgot password?
              </a>

            </div>

          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="login-submit"
          >
            Sign In
          </button>

        </form>

        {/* Register */}
        <p className="register-text">
          Don't have an account?{' '}

          <Link to="/register">
            Create an account
          </Link>
        </p>

        {/* Back Home */}
        <Link
          to="/"
          className="back-home"
        >
          ← Back to home
        </Link>

      </div>

    </div>
  )
}

export default LoginPage