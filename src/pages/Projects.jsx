import Carousel from '../components/Carousel';

import orion1 from '../assets/images/orion1.png';
import orion2 from '../assets/images/orion2.png';
import orion3 from '../assets/images/orion3.png';
import orion4 from '../assets/images/orion4.png';
import orion5 from '../assets/images/orion5.png';
import orion6 from '../assets/images/orion6.png';
import orion7 from '../assets/images/orion7.png';
import orion8 from '../assets/images/orion8.png';
import orion9 from '../assets/images/orion9.png';

import ajlucas1 from '../assets/images/ajlucas1.png';
import ajlucas2 from '../assets/images/ajlucas2.png';
import ajlucas3 from '../assets/images/ajlucas3.png';
import ajlucas4 from '../assets/images/ajlucas4.png';
import ajlucas5 from '../assets/images/ajlucas5.png';

import yieldly1 from '../assets/images/yieldly1.png';
import yieldly2 from '../assets/images/yieldly2.png';
import yieldly3 from '../assets/images/yieldly3.png';

import transcorp1 from '../assets/images/transcorp1.png';
import transcorp2 from '../assets/images/transcorp2.png';
import transcorp3 from '../assets/images/transcorp3.png';
import transcorp4 from '../assets/images/transcorp4.png';

import hostelpro1 from '../assets/images/hostelpro1.png';
import hostelpro2 from '../assets/images/hostelpro2.png';
import hostelpro3 from '../assets/images/hostelpro3.png';
import hostelpro4 from '../assets/images/hostelpro4.png';

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
            orion1,
            orion2,
            orion3,
            orion4,
            orion5,
            orion9,
            orion6,
            orion7,
            orion8,
          ]}
        />
      </div>

      {/* Yieldly */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">Yieldly</h3>
        <p className="text-sm text-gray-400 mb-1">
          Frontend Engineer • Jan 2021 – Feb 2022
        </p>
        <p className="mb-2">
          Built performant, responsive interfaces for decentralized staking
          pools and wallets using React and TypeScript. Integrated the
          AlgoSigner wallet and coordinated closely with smart contract
          developers. Delivered clean UI from InVision mockups and contributed
          to reusable design systems.
        </p>
        <p className="text-sm text-gray-300 mb-3">
          Tech: React, Next.js, TypeScript, Tailwind, Algorand, AlgoSigner
        </p>
        <Carousel images={[yieldly1, yieldly2, yieldly3]} />
      </div>

      {/* AJ Lucas */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">AJ Lucas</h3>
        <p className="text-sm text-gray-400 mb-1">
          Software Engineer • May 2022 – Jan 2023
        </p>
        <p className="mb-2">
          Built internal HR and equipment portal to centralize resource tracking
          and reduce admin overhead. Designed reusable components and secure
          file upload workflows to AWS S3. Helped spec out features directly
          with HR and ops staff.
        </p>
        <p className="text-sm text-gray-300 mb-3">
          Tech: React, Node.js, MongoDB, AWS S3, Material UI
        </p>
        <Carousel images={[ajlucas1, ajlucas2, ajlucas3, ajlucas4, ajlucas5]} />
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
        <Carousel images={[transcorp1, transcorp2, transcorp3, transcorp4]} />
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
        <Carousel images={[hostelpro1, hostelpro2, hostelpro3, hostelpro4]} />
      </div>
    </section>
  );
}
