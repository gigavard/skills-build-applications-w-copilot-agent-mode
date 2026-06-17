import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'

const tabs = [
  { path: '/', label: 'Overview' },
  { path: '/users', label: 'Users' },
  { path: '/teams', label: 'Teams' },
  { path: '/activities', label: 'Activities' },
  { path: '/leaderboard', label: 'Leaderboard' },
  { path: '/workouts', label: 'Workouts' },
]

function Panel({ title, description, children }) {
  return (
    <section className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h2 className="h4 mb-2">{title}</h2>
        <p className="text-secondary mb-0">{description}</p>
        {children}
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="container py-4 py-md-5">
      <header className="mb-4">
        <p className="text-uppercase fw-semibold text-secondary mb-1">Octofit Tracker</p>
        <h1 className="display-6 mb-2">Presentation Tier</h1>
        <p className="text-secondary mb-0">
          Router and layout are ready. Next step: wire each page to its API endpoint.
        </p>
        <p className="text-secondary mt-2 mb-0 small">
          Set VITE_CODESPACE_NAME (for example in .env.local) to enable Codespaces API URLs.
        </p>
      </header>

      <nav className="nav nav-pills gap-2 mb-4 flex-wrap" aria-label="Octofit navigation">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end={tab.path === '/'}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : 'text-dark bg-light border'}`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Panel
              title="Welcome"
              description="Use the tabs above to move across tracker views and connect data from the backend."
            />
          }
        />
        <Route
          path="/users"
          element={
            <Panel title="Users" description="Users list will be loaded from /api/users/.">
              <div className="mt-3">
                <Users />
              </div>
            </Panel>
          }
        />
        <Route
          path="/teams"
          element={
            <Panel title="Teams" description="Teams list will be loaded from /api/teams/.">
              <div className="mt-3">
                <Teams />
              </div>
            </Panel>
          }
        />
        <Route
          path="/activities"
          element={
            <Panel title="Activities" description="Activities feed will be loaded from /api/activities/.">
              <div className="mt-3">
                <Activities />
              </div>
            </Panel>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <Panel
              title="Leaderboard"
              description="Leaderboard entries will be loaded from /api/leaderboard/."
            >
              <div className="mt-3">
                <Leaderboard />
              </div>
            </Panel>
          }
        />
        <Route
          path="/workouts"
          element={
            <Panel title="Workouts" description="Workout catalog will be loaded from /api/workouts/.">
              <div className="mt-3">
                <Workouts />
              </div>
            </Panel>
          }
        />
      </Routes>
    </main>
  )
}

export default App
