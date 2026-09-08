'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Sparkles } from 'lucide-react';

const Crazy = () => {
  const achievements = [
    {
      title: 'Lumora – Real-Time OCR & AI Mobile App',
      desc: 'One of the most exciting technical challenges: building a React Native mobile app that lets users tap on scanned document text for instant AI-powered definitions. Integrated OCR, NLP, and OpenAI API all running in real-time on mobile.',
      tags: ['React Native', 'OCR', 'OpenAI API', 'NLP'],
    },
    {
      title: '50+ Critical Incidents Resolved Weekly',
      desc: 'Diagnosed and resolved high-priority technical incidents across network and ISP infrastructure at Afrihost, consistently exceeding SLA targets under intense pressure.',
      tags: ['Network Troubleshooting', 'SLA Management', 'Root-Cause Analysis'],
    },
    {
      title: 'WhatsApp Incident Reporting via Claude API',
      desc: 'Designed SafetyNet API using Spring Boot with Twilio webhook integration and Anthropic Claude API for natural language extraction from WhatsApp messages, persisting geotagged data to PostGIS.',
      tags: ['Spring Boot', 'Claude API', 'PostGIS', 'Twilio'],
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl flex items-center gap-3">
          <Trophy className="h-8 w-8 text-amber-400" />
          Technical Milestones
        </h2>
        <p className="mt-2 text-muted-foreground">
          The engineering challenges I'm most proud of solving.
        </p>
      </div>
      <div className="space-y-4">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl bg-accent p-6 border border-border/50"
          >
            <h3 className="text-foreground font-bold text-lg mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-400" />
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, tIdx) => (
                <Badge key={tIdx} variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Crazy;