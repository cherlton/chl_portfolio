'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Rocket, Code2, Zap } from 'lucide-react';

const Sports = () => {
  const highlights = [
    {
      icon: <Rocket className="h-5 w-5 text-blue-400" />,
      title: 'Lumora Mobile App',
      desc: 'Built the React Native mobile interface with OCR and AI/NLP services for real-time tap-to-define functionality.',
    },
    {
      icon: <Code2 className="h-5 w-5 text-emerald-400" />,
      title: 'SafetyNet API',
      desc: 'WhatsApp incident reporting via Spring Boot with Anthropic Claude API for natural language extraction and PostGIS geotagging.',
    },
    {
      icon: <Zap className="h-5 w-5 text-amber-400" />,
      title: '25% API Speedup',
      desc: 'Optimized backend queries and implemented caching at Fluid Intellect, improving API response times by 25%.',
    },
    {
      icon: <Briefcase className="h-5 w-5 text-purple-400" />,
      title: '30% Admin Reduction',
      desc: 'Designed and automated HR documentation workflows at Sisol Labour Project, cutting manual administrative effort by 30%.',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Career Highlights
        </h2>
        <p className="mt-4 text-muted-foreground">
          Key milestones and achievements from my 2 years of building scalable 
          web and mobile applications across telecom, AI, HRtech, and marketplace domains.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl bg-accent p-5 border border-border/50"
          >
            <div className="flex items-center gap-3 mb-2">
              {item.icon}
              <h3 className="text-foreground font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sports;