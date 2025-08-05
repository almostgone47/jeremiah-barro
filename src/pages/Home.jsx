import {useEffect, useRef} from 'react';
import Typed from 'typed.js';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Hello, I’m <strong>Jeremiah Barro</strong>',
        "and I'm a <strong>software engineer</strong>.",
        'I develop <strong>web applications</strong>',
        'and <strong>mobile apps</strong>.',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="text-center py-20">
      <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
      <span
        ref={el}
        className="block text-3xl font-bold text-gray-800 min-h-[100px]"
      ></span>
    </section>
  );
}
