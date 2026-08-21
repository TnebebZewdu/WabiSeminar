import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css'

function LoginPage() {
  const navigate = useNavigate()

  const passwordRef = useRef(null)
  const submitRef = useRef(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleEmailKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()

      passwordRef.current?.focus()
    }
  }

  const handlePasswordKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()

      submitRef.current?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const enteredEmail =
      email.trim().toLowerCase()

    const enteredPassword = password

    if (!enteredEmail || !enteredPassword) {
      setError(
        'Please enter your email and password.'
      )
      return
    }

    const savedUsers =
      JSON.parse(
        localStorage.getItem('wabiUsers')
      ) || []

    const user = savedUsers.find(
      (savedUser) =>
        savedUser.email.toLowerCase() ===
          enteredEmail &&
        savedUser.password ===
          enteredPassword
    )

    if (!user) {
      setError(
        'Invalid email or password.'
      )
      return
    }

    localStorage.setItem(
      'wabiCurrentUser',
      JSON.stringify(user)
    )

    navigate('/dashboard')
  }

  return (
    <div className="login-page">

      <div className="login-card">

        {/* Logo */}
        <Link
          to="/"
          className="login-logo"
        >
          <span className="login-logo-mark">
            W
          </span>

          <span>
            WabiSeminar
          </span>
        </Link>


        {/* Heading */}
        <div className="login-heading">

          <h1>
            Welcome back 👋
          </h1>

          <p>
            Sign in to continue to WabiSeminar.
          </p>

        </div>


        {/* Form */}
        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          {/* Email */}
          <div className="login-field">

            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError('')
              }}
              onKeyDown={handleEmailKeyDown}
            />

          </div>


          {/* Password */}
          <div className="login-field password-field">

            <label htmlFor="password">
              Password
            </label>

            <div className="password-content">

              <input
                ref={passwordRef}
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError('')
                }}
                onKeyDown={handlePasswordKeyDown}
              />

              <a
                href="#forgot"
                className="forgot-password"
                onClick={(e) =>
                  e.preventDefault()
                }
              >
                Forgot password?
              </a>

            </div>

          </div>


          {/* Error */}
          {error && (
            <p
              style={{
                margin: '-4px 0 0',
                color: '#dc2626',
                fontSize: '12px',
                textAlign: 'center',
              }}
            >
              {error}
            </p>
          )}


          {/* Sign In */}
          <button
            ref={submitRef}
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