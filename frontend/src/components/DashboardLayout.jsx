import { NavLink } from 'react-router-dom'
import '../App.css'

function DashboardLayout({ children }) {
  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <h2>WabiSeminar</h2>
        </div>

        <nav>

          <NavLink
            to="/dashboard"
            className="nav-item"
          >
            <span className="nav-icon">⌂</span>
            Home
          </NavLink>

          <NavLink
            to="/meetings"
            className="nav-item"
          >
            <span className="nav-icon">📅</span>
            Meetings
          </NavLink>

          <a className="nav-item" href="#">
            <span className="nav-icon">♙</span>
            People
          </a>

          <a className="nav-item" href="#">
            <span className="nav-icon">▱</span>
            Chats
          </a>

          <a className="nav-item" href="#">
            <span className="nav-icon">□</span>
            Notes
          </a>

          <a className="nav-item" href="#">
            <span className="nav-icon">⚙</span>
            Settings
          </a>

        </nav>

        <div className="sidebar-bottom">

          <button className="new-meeting-sidebar">
            <span>＋</span>
            New Meeting
          </button>

        </div>

      </aside>

      {/* Page content */}
      <main className="main-content">
        {children}
      </main>

    </div>
  )
}

export default DashboardLayout