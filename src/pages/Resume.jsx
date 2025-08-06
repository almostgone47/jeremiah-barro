export default function Resume() {
  return (
    <section className="px-4 py-12 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold green-text">Summary</h3>
        <p className="mt-2">
          Full-stack software engineer with 3+ years of experience building
          React/Node.js applications. Strong in front-end architecture, UI/UX,
          and cloud deployment. Recently completed a Master's and Bachelor's in
          Computer Science with a minor in AI. Seeking to return to industry
          with updated technical expertise.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold green-text">Experience</h3>
        <ul className="space-y-4 mt-2">
          <li>
            <strong>Software Engineer</strong>, AJ Lucas (May 2022 – Jan 2023)
            <ul className="ml-4 list-disc">
              <li>Built internal HR/equipment portal (MERN stack + AWS)</li>
              <li>Designed UIs with Material UI 5</li>
              <li>Used AWS S3 for secure document/image storage</li>
            </ul>
          </li>
          <li>
            <strong>Frontend Engineer</strong>, Yieldly (Jan 2021 – Feb 2022)
            <ul className="ml-4 list-disc">
              <li>Built React/TypeScript apps for DeFi staking pools</li>
              <li>Integrated AlgoSigner wallet and smart contracts</li>
              <li>Worked closely with smart contract developers</li>
            </ul>
          </li>
          <li>
            <strong>Software Engineer</strong>, Transcorp Intl. (Dec 2019 – Jan
            2021)
            <ul className="ml-4 list-disc">
              <li>Maintained logistics apps using React and Node.js</li>
              <li>Integrated with NetSuite and Shopify APIs</li>
              <li>Built UI features like drag-and-drop, persistent filters</li>
            </ul>
          </li>
          <li>
            <strong>Founder & Developer</strong>, HostelProfessional (Jul 2016 –
            Dec 2019)
            <ul className="ml-4 list-disc">
              <li>Built SaaS hostel management system</li>
              <li>Led design/dev using Bootstrap and Figma</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold green-text">Education</h3>
        <ul className="mt-2">
          <li>
            <strong>Oregon State University</strong>
            <br />
            Master of Engineer in Computer Science (AI minor) • 2024–2025
          </li>
          <li>
            <strong>Oregon State University</strong>
            <br />
            Bachelor of Science in Computer Science • 2023–2024
          </li>
          <li className="mt-2">
            <strong>Hack Reactor</strong>
            <br />
            Advanced Software Engineering Immersive • 2017
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold green-text">Skills</h3>
        <p className="mt-2">
          <strong>Languages/Frameworks:</strong> JavaScript, TypeScript, React,
          Node.js, Express, PHP, Laravel, Ruby, HTML, CSS
          <br />
          <strong>Tools:</strong> AWS, MongoDB, PostgreSQL, Redis, SQLite, D3,
          AJAX, SASS
          <br />
          <strong>Testing:</strong> Jest, Mocha, Chai, RSpec, Enzyme
          <br />
          <strong>Concepts:</strong> OOP, MVC, REST APIs, Responsive Design,
          Functional Programming
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold green-text">Additional</h3>
        <p className="mt-2">
          U.S. Army Veteran — formerly held Secret Security Clearance
          <br />
          Dual citizen (USA, Australia)
        </p>
      </div>
    </section>
  );
}
