'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:cherltonmhangwana@gmail.com', '_blank');
  };
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 overflow-hidden rounded-full shadow-md border border-neutral-700">
            <img
              src="/cherlton-avatar.jpg"
              alt="Nhlangano Cherlton Mhangwana"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Nhlangano Cherlton Mhangwana
            </h2>
            <p className="text-muted-foreground text-sm">
              Software Engineer | Full-Stack & Mobile Developer
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Immediately Available to Start
          </span>
        </div>
      </div>

      {/* Opportunity Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Availability & Role</p>
            <p className="text-muted-foreground text-sm">
              Immediately Available • Full-Time, Contract & Engineering Roles
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">
              Johannesburg, South Africa • Open to Remote & Relocation
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Core Tech Stack</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2 mt-1">
              <ul className="list-disc pl-4 space-y-0.5">
                <li>Python (FastAPI, Flask), Java (Spring Boot)</li>
                <li>React.js, React Native, TypeScript, Tailwind CSS</li>
                <li>C# (.NET) APIs, REST APIs, JWT Authentication</li>
                <li>Kotlin for Android, Cross-platform mobile</li>
              </ul>
              <ul className="list-disc pl-4 space-y-0.5">
                <li>PostgreSQL, MySQL, PostGIS, ERD Modeling</li>
                <li>OpenAI API, Anthropic Claude API, Vector Search</li>
                <li>Docker, Git, CI/CD Fundamentals, Azure</li>
                <li>POPIA & B-BBEE Compliance, Agile/Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">
          What I bring
        </p>
        <p className="text-foreground text-sm leading-relaxed">
          • <strong>2 years of production experience</strong> building and shipping scalable web and mobile applications across telecom, AI, HRtech, and marketplace domains.<br />
          • <strong>Sisol Labour Project:</strong> Frontend lead architecting responsive React + TypeScript interfaces integrated with C# (.NET) APIs, automating HR documentation workflows and cutting administrative effort by 30%.<br />
          • <strong>Fluid Intellect:</strong> Built full-stack features with Flask and React for 1,000+ active users, optimized backend queries by 25%, and developed the React Native mobile app for Lumora with OCR and AI.<br />
          • <strong>Afrihost:</strong> Diagnosed and resolved 50+ critical incidents weekly, exceeding SLA targets with rapid root-cause analysis.
        </p>
      </div>

      {/* Goal */}
      <div className="mt-6">
        <p className="text-foreground mb-2 text-lg font-semibold">Engineering Goal</p>
        <p className="text-foreground text-sm leading-relaxed">
          Deliver high-performing, resilient full-stack and mobile solutions that solve real business problems. I thrive in agile environments, learn fast, communicate clearly, and take full ownership of deliverables.
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:opacity-90"
        >
          Hire or Contact Cherlton
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;
