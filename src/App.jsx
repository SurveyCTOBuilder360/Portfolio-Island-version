import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import ThreeDScene from './components/ThreeDScene';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 pt-6 px-6">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            BIJOY KHIANG
          </div>

          <div className="flex space-x-4">
            <Link
              to="/home"
              className={`px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/home'
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/about'
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/projects'
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/contact'
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content with Routing */}
      <Routes>
        <Route path="/home" element={<ThreeDScene />} />

        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

        {/* Default route - redirect to home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;