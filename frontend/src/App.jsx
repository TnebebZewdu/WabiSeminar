import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import MeetingsPage from './pages/MeetingsPage'
import NewMeetingPage from './pages/NewMeetingPage'
import JoinMeetingPage from './pages/JoinMeetingPage'
import MeetingRoomPage from './pages/MeetingRoomPage'
import ChatsPage from './pages/ChatsPage'
import NotesPage from './pages/NotesPage'
import SettingsPage from './pages/SettingsPage'
function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Landing */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Meetings */}
        <Route
          path="/meetings"
          element={<MeetingsPage />}
        />

        {/* Create Meeting */}
        <Route
          path="/new-meeting"
          element={<NewMeetingPage />}
        />

        {/* Join Meeting */}
        <Route
          path="/join-meeting"
          element={<JoinMeetingPage />}
        />

        {/* Actual Meeting Room */}
        <Route
          path="/meeting-room/:meetingId"
          element={<MeetingRoomPage />}
        />

        <Route
          path="/chats"
          element={<ChatsPage />}
        />

        <Route
          path="/notes"
          element={<NotesPage />}
        />
         <Route
           path="/settings"
           element={<SettingsPage />}
        />


      </Routes>

    </BrowserRouter>
  )
}

export default App
