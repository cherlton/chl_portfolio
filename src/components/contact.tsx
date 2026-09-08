'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function Contact() {
  // Contact information
  const contactInfo = {
    name: 'Nhlangano Cherlton Mhangwana',
    email: 'cherltonmhangwana@gmail.com',
    phone: '065 242 1927',
    location: 'Johannesburg, South Africa',
    handle: '@cherlton',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/nhlangano-mhangwana-4418612a4',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/cherlton',
      },
      {
        name: 'Portfolio',
        url: 'https://chlportfolio.vercel.app',
      },
      {
        name: 'Call (065 242 1927)',
        url: 'tel:+27652421927',
      },
    ],
  };

  // Function to handle opening links
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto mt-8 w-full">
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12">
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
              Contacts & Links
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              {contactInfo.location} • Available immediately
            </p>
          </div>
          <span className="mt-2 text-sm text-muted-foreground font-mono sm:mt-0">
            {contactInfo.handle}
          </span>
        </div>

        {/* Contact direct section */}
        <div className="mt-6 flex flex-col gap-3 md:mt-8">
          <div
            className="group cursor-pointer inline-flex items-center gap-1"
            onClick={() => openLink(`mailto:${contactInfo.email}`)}
          >
            <span className="text-base font-medium text-blue-500 hover:underline sm:text-lg">
              {contactInfo.email}
            </span>
            <ChevronRight className="h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
          </div>

          <div
            className="group cursor-pointer inline-flex items-center gap-1"
            onClick={() => openLink(`tel:+27652421927`)}
          >
            <span className="text-base font-medium text-blue-500 hover:underline sm:text-lg">
              +27 {contactInfo.phone}
            </span>
            <ChevronRight className="h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
          </div>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-8">
            {contactInfo.socials.map((social) => (
              <button
                key={social.name}
                className="text-muted-foreground hover:text-foreground cursor-pointer text-sm font-medium transition-colors"
                onClick={() => openLink(social.url)}
                title={social.name}
              >
                {social.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
