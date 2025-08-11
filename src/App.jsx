import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {useEffect} from 'react';
import AnimatedCursor from 'react-animated-cursor';

import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  useEffect(() => {
    document.title = 'Jeremiah Barro | Software Engineer';
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="75, 255, 165"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />

      <Router>
        <div className="relative min-h-screen grainy-bg text-white font-sans">
          {/* Lines background */}
          <div className="lines pointer-events-none absolute inset-0 z-0">
            <div className="max-w-screen-xl mx-auto h-full flex">
              <div className="flex-1 border-l border-white/20"></div>
              <div className="flex-1 border-l border-white/20"></div>
              <div className="flex-1 border-l border-white/20"></div>
              <div className="flex-1 border-l border-white/20"></div>
              <div className="flex-1 border-l border-white/20"></div>
            </div>
          </div>

          {/* Foreground content */}
          <div className="relative z-10">
            <header className="p-4 shadow-md">
              <nav className="flex justify-between max-w-7xl mx-auto">
                <div className="text-2xl">
                  <span className="grey-text">Jeremiah</span> Barro
                </div>
                <div className="space-x-4 flex items-center">
                  <Link to="/my-portfolio/">Home</Link>
                  {/* <Link to="/projects">Projects</Link> */}
                  <Link to="/resume">Resume</Link>
                  {/* <Link to="/contact">Contact</Link> */}
                </div>
              </nav>
            </header>

            <main className="p-4 max-w-6xl mx-auto">
              <Routes>
                <Route path="/my-portfolio/" element={<Home />} />
                {/* <Route path="/projects" element={<Projects />} /> */}
                <Route path="/resume" element={<Resume />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
              </Routes>
            </main>
          </div>
        </div>
      </Router>
      <footer className="text-white py-1 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-left">
          <p className="text-sm">© 2025 Jeremiah Barro</p>
        </div>
      </footer>
    </>
  );
}

export default App;
