import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext.jsx';
import ThreeDScene from './components/ThreeDScene';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ThemeSwitcher from './components/ThemeSwitcher.jsx';
import './index.css';

function App() {
  const location = useLocation();
  const { currentTheme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 pt-6 px-6 transition-all ${currentTheme.navBg}`}>
        <div className="flex items-center justify-between">
          <div className={`text-3xl font-bold bg-gradient-to-r ${currentTheme.accentGradient} bg-clip-text text-transparent`}>
            BIJOY KHIANG
          </div>

          <div className="flex items-center space-x-3">
            <Link
              to="/home"
              className={`px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/home'
                  ? `${currentTheme.buttonPrimary}`
                  : `${currentTheme.buttonSecondary}`
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/about'
                  ? `${currentTheme.buttonPrimary}`
                  : `${currentTheme.buttonSecondary}`
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/projects'
                  ? `${currentTheme.buttonPrimary}`
                  : `${currentTheme.buttonSecondary}`
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/contact'
                  ? `${currentTheme.buttonPrimary}`
                  : `${currentTheme.buttonSecondary}`
              }`}
            >
              Contact
            </Link>
            <ThemeSwitcher />
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