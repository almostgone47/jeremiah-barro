import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {useEffect} from 'react';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    document.title = 'Jeremiah Barro | Software Engineer';
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <header className="p-4 shadow-md">
          <nav className="flex justify-between max-w-4xl mx-auto">
            <h1 className="text-xl font-bold">Jeremiah Barro</h1>
            <div className="space-x-4">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="p-4 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
