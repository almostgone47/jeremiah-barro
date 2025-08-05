import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {useEffect} from 'react';
import AnimatedCursor from 'react-animated-cursor';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    document.title = 'Jeremiah Barro | Software Engineer';
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />

      <Router>
        <div className="min-h-screen bg-black text-white font-sans">
          <header className="p-4 shadow-md">
            <nav className="flex justify-between max-w-4xl mx-auto">
              <h1 className="text-xl font-bold">Jeremiah Barro</h1>
              <div className="space-x-4 flex items-center">
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
    </>
  );
}

export default App;
