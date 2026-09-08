'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownToLine, Download, Eye, File } from 'lucide-react';
import Image from 'next/image';

export function Resume() {
  // Resume details
  const resumeDetails = {
    title: 'Nhlangano Cherlton Mhangwana — CV',
    description: 'Software Engineer | Full-Stack & Mobile Developer',
    fileType: 'PDF Document',
    lastUpdated: 'August 2025 / 2026',
    fileSize: 'CV (2 Pages)',
    location: 'Johannesburg, South Africa',
    downloadUrl: '/resume_cherlton_mhangwana.pdf',
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = 'Nhlangano_Cherlton_Mhangwana_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto w-full py-4 font-sans">
      <motion.div
        onClick={handleDownload}
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-accent p-0 transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        whileHover={{ scale: 1.01 }}
      >
        {/* Top summary highlight */}
        <div className="p-6 border-b border-border/40">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                <File className="h-3.5 w-3.5" />
                Curriculum Vitae
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {resumeDetails.title}
              </h3>
              <p className="text-sm font-medium text-muted-foreground mt-0.5">
                {resumeDetails.description}
              </p>
              <div className="mt-2 flex flex-wrap text-xs text-muted-foreground">
                <span>{resumeDetails.location}</span>
                <span className="mx-2">•</span>
                <span>{resumeDetails.fileType}</span>
                <span className="mx-2">•</span>
                <span>Updated {resumeDetails.lastUpdated}</span>
              </div>
            </div>

            {/* Download indicator button */}
            <motion.div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-110"
              initial={{ scale: 1 }}
            >
              <Download className="h-5 w-5" />
            </motion.div>
          </div>
        </div>

        {/* Quick Highlights Snapshot */}
        <div className="bg-background/40 p-6 text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider text-neutral-500 mb-1">
              Education & Certifications
            </h4>
            <p className="text-foreground font-medium text-xs">
              • Diploma in Computer Science — Tshwane University of Technology (2021 – 2025)
            </p>
            <p className="text-muted-foreground text-xs">
              • Responsive Web Design (freeCodeCamp) & cPanel Certified (CPP)
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider text-neutral-500 mb-1">
              Work Experience (2 Years)
            </h4>
            <p className="text-foreground font-medium text-xs">
              • Frontend Developer — Sisol Labour Project (React, TypeScript, C# .NET)
            </p>
            <p className="text-muted-foreground text-xs">
              • Software Engineer Intern — Fluid Intellect (Flask, React, Lumora Mobile)
            </p>
            <p className="text-muted-foreground text-xs">
              • IT Support Agent — Afrihost (Network & ISP Technical Triage)
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;