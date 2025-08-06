import Carousel from '../components/Carousel'; // Create this component with image props

export default function Projects() {
  return (
    <section className="space-y-16 py-10 max-w-4xl mx-auto">
      {/* Orion Van Gear */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">Orion Van Gear</h3>
        <p className="text-sm text-gray-400 mb-1">
          Frontend Developer (Contract) • May–July 2025
        </p>
        <p className="mb-2">
          Developed a customized Shopify Hydrogen storefront for a van
          outfitting company. Implemented a guided product builder, interactive
          filters, and dynamic cart logic for a seamless user experience.
          Contributed to mobile-first design improvements and deployment.
        </p>
        <p className="text-sm text-gray-300 mb-3">
          Tech: React, Vite, Shopify Hydrogen, Tailwind, GraphQL
        </p>
        <Carousel
          images={[
            '/images/orion1.png',
            '/images/orion2.png',
            '/images/orion3.png',
          ]}
        />
      </div>

      {/* HostelProfessional */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">HostelProfessional</h3>
        <p className="text-sm text-gray-400 mb-1">
          Founder & Full-Stack Developer • Jul 2016 – Dec 2019
        </p>
        <p className="mb-2">
          Created a SaaS platform from scratch for hostel and hotel operations
          including bookings, payments, inventory, and staff tasks. Designed
          intuitive dashboards and built core features used by international
          hostels.
        </p>
        <p className="text-sm text-gray-300 mb-3">
          Tech: PHP, Laravel, MySQL, Bootstrap
        </p>
        <Carousel
          images={[
            '/images/hostel1.png',
            '/images/hostel2.png',
            '/images/hostel3.png',
          ]}
        />
      </div>

      {/* Transcorp */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">
          Transcorp Logistics Portal
        </h3>
        <p className="text-sm text-gray-400 mb-1">
          Software Engineer • Dec 2019 – Jan 2021
        </p>
        <p className="mb-2">
          Built and maintained customer-facing logistics apps for Dubai and
          Saudi Arabia. Integrated with NetSuite and Shopify for real-time order
          syncing, label generation, and automated CSV validation with inline
          correction.
        </p>
        <p className="text-sm text-gray-300 mb-3">
          Tech: React, Node.js, NetSuite API, Shopify API
        </p>
        <Carousel
          images={['/images/transcorp1.png', '/images/transcorp2.png']}
        />
      </div>
    </section>
  );
}
