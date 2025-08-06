import {useEffect, useRef} from 'react';
import Typed from 'typed.js';

import avatar from '../assets/images/headshot.jpeg';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hello, I’m <strong>Jeremiah Barro</strong><br/>and I'm a <strong>software engineer.</strong><br/> I develop cool <strong>web applications</strong><br/>and <strong>mobile apps.</strong><br/> Welcome to my <strong>portfolio page!</strong>",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2500,
      // loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <section className="hero-section text-center py-20">
        <div className="headshot-img-container">
          <img
            src={avatar}
            alt="headshot"
            className="mx-auto w-48 h-48 object-cover grayscale clip-blob headshot-img"
          />
        </div>
        <span
          ref={el}
          className="typed-text block text-5xl font-bold text-white-800 min-h-[100px]"
        ></span>
      </section>
      <Projects />
      <Contact />
    </>
  );
}
