'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, Code, Mail, MessageSquare, Sparkles } from 'lucide-react';
import React from 'react';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
  hasReachedLimit?: boolean;
}

const ChatLanding: React.FC<ChatLandingProps> = ({ submitQuery }) => {
  const suggestedQuestions = [
    {
      icon: <MessageSquare className="h-4 w-4 text-sky-400" />,
      text: 'Who are you? Tell me about your background.',
    },
    {
      icon: <Code className="h-4 w-4 text-emerald-400" />,
      text: 'What are your key projects? (Lumora, SafetyNet, Insight Sphere)',
    },
    {
      icon: <Award className="h-4 w-4 text-purple-400" />,
      text: 'What are your technical and soft skills?',
    },
    {
      icon: <Briefcase className="h-4 w-4 text-amber-400" />,
      text: 'Tell me about your work experience (Sisol, Fluid Intellect, Afrihost)',
    },
    {
      icon: <Mail className="h-4 w-4 text-rose-400" />,
      text: 'How can I contact or hire you?',
    },
  ];

  return (
    <motion.div
      className="flex w-full flex-col items-center justify-center px-4 py-8 text-center"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6 flex flex-col items-center">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">
          <Sparkles className="h-3.5 w-3.5" />
          Interactive AI Portfolio
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-100">
          Ask Cherlton Anything
        </h2>
        <p className="mt-1.5 max-w-md text-sm text-neutral-400">
          Explore my software engineering experience, mobile apps, full-stack architecture, and tech stack.
        </p>
      </div>

      <div className="grid w-full max-w-md grid-cols-1 gap-2.5">
        {suggestedQuestions.map((q, idx) => (
          <motion.button
            key={idx}
            onClick={() => submitQuery(q.text)}
            className="flex items-center gap-3 rounded-xl border border-neutral-800/80 bg-neutral-900/70 px-4 py-3 text-left text-sm text-neutral-200 shadow-sm backdrop-blur-md transition-all hover:bg-neutral-800 hover:border-neutral-700 hover:text-white"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {q.icon}
            <span className="flex-1 font-medium">{q.text}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ChatLanding;
