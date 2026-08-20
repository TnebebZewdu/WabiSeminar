import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function Dashboard() {
  const [meetings, setMeetings] = useState([])

  useEffect(() => {
    const loadMeetings = () => {
      const savedMeetings =
        JSON.parse(localStorage.getItem('wabiMeetings')) || []

      setMeetings(savedMeetings)
    }

    loadMeetings()

    window.addEventListener('storage', loadMeetings)

    return () => {
      window.removeEventListener('storage', loadMeetings)
    }
  }, [])

  const now = new Date()

  /*
   * ========================================
   * UPCOMING
   *
   * Only meetings that have NOT been completed.
   * Show maximum 3 on dashboard.
   * ========================================
   */

  const upcomingMeetings = meetings
    .filter((meeting) => {

      if (meeting.completed === true) {
        return false
      }

      if (!meeting.date) {
        return true
      }

      return new Date(meeting.date) >= now
    })
    .sort((a, b) => {

      if (!a.date) return 1
      if (!b.date) return -1

      return (
        new Date(a.date) -
        new Date(b.date)
      )
    })
    .slice(0, 3)


  /*
   * ========================================
   * RECENT
   *
   * Only completed meetings.
   * Show maximum 3.
   * ========================================
   */

  const recentMeetings = meetings
    .filter(
      (meeting) =>
        meeting.completed === true
    )
    .sort((a, b) => {

      const dateA =
        new Date(
          `${a.date || '1970-01-01'}T${
            a.time || '00:00'
          }`
        )

      const dateB =
        new Date(
          `${b.date || '1970-01-01'}T${
            b.time || '00:00'
          }`
        )

      return dateB - dateA
    })
    .slice(0, 3)


  /*
   * ========================================
   * DATE FORMAT
   * ========================================
   */

  const formatMeetingDate = (date) => {

    if (!date) {
      return {
        day: '--',
        month: '---',
        full: 'Date not set',
      }
    }

    const meetingDate =
      new Date(date)

    return {

      day:
        meetingDate.getDate(),

      month:
        meetingDate
          .toLocaleString(
            'en-US',
            {
              month: 'short',
            }
          )
          .toUpperCase(),

      full:
        meetingDate.toLocaleDateString(
          'en-US',
          {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }
        ),
    }
  }


  return (
    <div className="app">

      {/* ========================================
          SIDEBAR
      ======================================== */}

      <aside className="sidebar">

        <div className="logo">
          <h2>WabiSeminar</h2>
        </div>

        <nav>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-item ${
                isActive ? 'active' : ''
              }`
            }
          >
            <span className="nav-icon">
              ⌂
            </span>

            Home
          </NavLink>

          <NavLink
            to="/meetings"
            className={({ isActive }) =>
              `nav-item ${
                isActive ? 'active' : ''
              }`
            }
          >
            <span className="nav-icon">
              📅
            </span>

            Meetings
          </NavLink>

          <a
            className="nav-item"
            href="#"
            onClick={(e) =>
              e.preventDefault()
            }
          >
            <span className="nav-icon">
              ▱
            </span>

            Chats
          </a>

          <a
            className="nav-item"
            href="#"
            onClick={(e) =>
              e.preventDefault()
            }
          >
            <span className="nav-icon">
              □
            </span>

            Notes
          </a>

          <a
            className="nav-item"
            href="#"
            onClick={(e) =>
              e.preventDefault()
            }
          >
            <span className="nav-icon">
              ⚙
            </span>

            Settings
          </a>

        </nav>

        <div className="sidebar-bottom">

          <NavLink
            to="/new-meeting"
            className="new-meeting-sidebar"
          >
            <span>
              ＋
            </span>

            New Meeting
          </NavLink>

        </div>

      </aside>


      {/* ========================================
          MAIN
      ======================================== */}

      <main className="main-content">

        <header className="topbar">

          <div>

            <h1>
              Good morning, Tnebeb 👋
            </h1>

            <p>
              Ready for your next meeting?
            </p>

          </div>


          <div className="user-profile">

            <div className="avatar">
              T
            </div>

            <div className="user-info">

              <strong>
                Tnebeb
              </strong>

              <span>
                Admin
              </span>

            </div>

          </div>

        </header>


        {/* ========================================
            QUICK ACTIONS
        ======================================== */}

        <section className="quick-actions">

          <NavLink
            to="/new-meeting"
            className="action-card primary-action"
          >

            <div className="action-icon">
              ＋
            </div>

            <div>
              <strong>
                New Meeting
              </strong>

              <span>
                Create a new meeting
              </span>
            </div>

          </NavLink>


          <NavLink
            to="/join-meeting"
            className="action-card"
          >

            <div className="action-icon">
              ↗
            </div>

            <div>
              <strong>
                Join Meeting
              </strong>

              <span>
                Enter a meeting code
              </span>
            </div>

          </NavLink>


          <NavLink
            to="/new-meeting"
            className="action-card"
          >

            <div className="action-icon">
              ▣
            </div>

            <div>
              <strong>
                Schedule
              </strong>

              <span>
                Plan a future meeting
              </span>
            </div>

          </NavLink>

        </section>


        {/* ========================================
            UPCOMING
        ======================================== */}

        <section className="dashboard-section">

          <div className="section-header">

            <div>

              <h2>
                Upcoming Meetings
              </h2>

              <p>
                Your next scheduled meetings
              </p>

            </div>

            <NavLink
              to="/meetings"
              className="view-all"
            >
              View all
            </NavLink>

          </div>


          {upcomingMeetings.length === 0 ? (

            <div className="empty-state">

              <div className="empty-icon">
                📅
              </div>

              <h3>
                No upcoming meetings
              </h3>

              <p>
                You don't have any meetings
                scheduled yet.
              </p>

              <NavLink
                to="/new-meeting"
                className="empty-action"
              >
                Schedule Meeting
              </NavLink>

            </div>

          ) : (

            <div>

              {upcomingMeetings.map(
                (meeting) => {

                  const date =
                    formatMeetingDate(
                      meeting.date
                    )

                  return (

                    <div
                      className="upcoming-meeting"
                      key={meeting.id}
                    >

                      <div className="meeting-date">

                        <strong>
                          {date.day}
                        </strong>

                        <span>
                          {date.month}
                        </span>

                      </div>


                      <div className="meeting-info">

                        <h3>
                          {meeting.title ||
                            'Untitled Meeting'}
                        </h3>

                        <p>
                          {date.full}
                          {' · '}
                          {meeting.time ||
                            'Time not set'}
                          {' · '}
                          {meeting.duration ||
                            0}
                          {' minutes'}
                        </p>

                        {meeting.description && (

                          <p>
                            {meeting.description}
                          </p>

                        )}

                      </div>


                      <span className="meeting-status">
                        Upcoming
                      </span>


                      <NavLink
                        to={`/meeting-room/${meeting.id}`}
                        className="join-button"
                      >
                        Join
                      </NavLink>

                    </div>

                  )
                }
              )}

            </div>

          )}

        </section>


        {/* ========================================
            RECENT
        ======================================== */}

        <section className="dashboard-section recent-section">

          <div className="section-header">

            <div>

              <h2>
                Recent Meetings
              </h2>

              <p>
                Your recently completed meetings
              </p>

            </div>

            <NavLink
              to="/meetings"
              className="view-all"
            >
              View history
            </NavLink>

          </div>


          {recentMeetings.length === 0 ? (

            <div className="empty-state">

              <div className="empty-icon">
                🕘
              </div>

              <h3>
                No recent meetings
              </h3>

              <p>
                Your completed meetings
                will appear here.
              </p>

            </div>

          ) : (

            <div>

              {recentMeetings.map(
                (meeting) => {

                  const date =
                    formatMeetingDate(
                      meeting.date
                    )

                  return (

                    <div
                      className="upcoming-meeting"
                      key={meeting.id}
                    >

                      <div className="meeting-date">

                        <strong>
                          {date.day}
                        </strong>

                        <span>
                          {date.month}
                        </span>

                      </div>


                      <div className="meeting-info">

                        <h3>
                          {meeting.title ||
                            'Untitled Meeting'}
                        </h3>

                        <p>
                          {date.full}
                          {' · '}
                          {meeting.time ||
                            'Time not set'}
                          {' · '}
                          {meeting.duration ||
                            0}
                          {' minutes'}
                        </p>

                        {meeting.description && (

                          <p>
                            {meeting.description}
                          </p>

                        )}

                      </div>


                      <span
                        className="meeting-status"
                        style={{
                          background:
                            '#f1f5f9',
                          color:
                            '#64748b',
                        }}
                      >
                        Completed
                      </span>


                      <NavLink
                        to={`/meeting-room/${meeting.id}`}
                        className="join-button"
                        style={{
                          background:
                            '#f1f5f9',
                          color:
                            '#64748b',
                        }}
                      >
                        View
                      </NavLink>

                    </div>

                  )
                }
              )}

            </div>

          )}

        </section>

      </main>

    </div>
  )
}

export default Dashboard