import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import EditImage from './pages/EditImage'
import Chat from './pages/Chat'
import Auth from './pages/Auth'
import Layout from './Layout'
import ErrorBoundary from './components/ErrorBoundary'
import { ChatProvider } from './components/ChatProvider'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes without layout */}
        <Route path="/auth" element={<Auth />} />

        {/* Protected routes with layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/edit-image" element={<EditImage />} />
          <Route path="/chat" element={<ErrorBoundary><ChatProvider><Chat /></ChatProvider></ErrorBoundary>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
