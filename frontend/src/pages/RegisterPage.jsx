import './RegisterPage.css'
import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <div className="register-page">

      <div className="register-card">

        {/* Logo */}
        <Link to="/" className="register-logo">
          <span className="register-logo-mark">W</span>
          <span>WabiSeminar</span>
        </Link>


        {/* Heading */}
        <div className="register-heading">
          <h1>Create your account</h1>
          <p>Join WabiSeminar and start collaborating.</p>
        </div>


        {/* Register Form */}
        <form className="register-form">

          <div className="form-group">
            <label htmlFor="name">
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>


          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>


          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
            />
          </div>


          <div className="form-group">
            <label htmlFor="confirm-password">
              Confirm Password
            </label>

            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
            />
          </div>


          <button
            type="submit"
            className="register-submit"
          >
            Create Account
          </button>

        </form>


        {/* Login */}
        <p className="login-text">
          Already have an account?{' '}

          <Link to="/login">
            Sign in
          </Link>
        </p>


        {/* Back */}
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

export default RegisterPage