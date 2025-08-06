export default function Contact() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium">
            Let's build something cool together!
          </h2>
          <p>
            <span className="grey-text">Email:</span>{' '}
            <a
              href="mailto:jeremiah@hostelprofessional.com"
              className="underline text-white"
            >
              jeremiah@hostelprofessional.com
            </a>
          </p>
        </div>

        <div className="space-y-2 text-md text-right md:text-left">
          <p>
            <span className="grey-text">GitHub:</span>{' '}
            <a
              href="https://github.com/almostgone47"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white"
            >
              almostgone47
            </a>
          </p>
          <p>
            <span className="grey-text">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com/in/jeremiah-barro"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white"
            >
              jeremiah-barro
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
