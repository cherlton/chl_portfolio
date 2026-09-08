'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import WelcomeModal from '@/components/welcome-modal';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  Laugh,
  Layers,
  LoaderCircle,
  PartyPopper,
  UserRoundSearch,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? Tell me about your background and experience.',
  Projects: 'What are your key projects? What have you built?',
  Skills: 'What are your technical and soft skills? What is your full tech stack?',
  Experience: 'Tell me about your work experience at Sisol, Fluid Intellect, and Afrihost.',
  Contact: 'How can I contact or hire you?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#38bdf8', icon: Laugh },
  { key: 'Projects', color: '#4ade80', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#a78bfa', icon: Layers },
  { key: 'Experience', color: '#f472b6', icon: PartyPopper },
  { key: 'Contact', color: '#fbbf24', icon: UserRoundSearch },
] as const;

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const goToChat = (query: string) => {
    if (!query.trim() || isNavigating) return;
    setIsNavigating(true);
    router.push(`/chat?query=${encodeURIComponent(query.trim())}`);
  };

  /* hero animations */
  const topElementVariants: Variants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: 'easeOut', duration: 0.8 },
    },
  };
  const bottomElementVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: 'easeOut', duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-950 px-4 pb-10 text-neutral-100 md:pb-20">
      {/* big blurred footer word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-800/20 to-transparent bg-clip-text text-[9rem] leading-none font-black text-transparent select-none sm:block lg:text-[14rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Cherlton
        </div>
      </div>

      {/* header */}
      <motion.div
        className="z-1 mt-20 mb-6 flex flex-col items-center text-center md:mt-4 md:mb-8"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="z-100">
          <WelcomeModal />
        </div>

        <h2 className="text-neutral-300 mt-2 text-xl font-semibold md:text-2xl">
          Hey, I'm Cherlton 👋
        </h2>
        <h1 className="bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Software Engineer
        </h1>
        <p className="text-neutral-400 mt-2 text-base font-medium md:text-lg">
          Full-Stack & Mobile Developer • Johannesburg, SA
        </p>
      </motion.div>

      {/* centre avatar */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mb-4 h-48 w-48 overflow-hidden rounded-full border-2 border-neutral-700/80 shadow-2xl shadow-green-500/20 ring-4 ring-neutral-800/60 sm:h-60 sm:w-60"
      >
        <Image
          src="/cherlton-avatar.jpg"
          alt="Nhlangano Cherlton Mhangwana Avatar"
          width={600}
          height={600}
          priority
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* input + quick buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-3 flex w-full flex-col items-center justify-center md:px-0"
      >
        {/* free-form question */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input.trim());
          }}
          className="relative w-full max-w-lg"
        >
          <div className="mx-auto flex items-center rounded-full border border-neutral-800 bg-neutral-900/80 py-2.5 pr-2 pl-6 shadow-xl backdrop-blur-xl transition-all hover:border-neutral-700">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about my experience, stack, or projects…"
              className="w-full border-none bg-transparent text-base text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-blue-600 p-2.5 text-white transition-colors hover:bg-blue-500 disabled:opacity-50"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* quick-question grid */}
        <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <Button
              key={key}
              onClick={() => goToChat(questions[key])}
              disabled={isNavigating}
              variant="outline"
              className="border-neutral-800/80 bg-neutral-900/60 hover:bg-neutral-800/80 hover:border-neutral-700 aspect-square w-full cursor-pointer rounded-2xl border py-8 shadow-md backdrop-blur-xl active:scale-95 md:p-8"
            >
              <div className="flex h-full flex-col items-center justify-center gap-1.5 text-neutral-200">
                <Icon size={22} strokeWidth={2} color={color} />
                <span className="text-xs font-medium sm:text-sm">{key}</span>
              </div>
            </Button>
          ))}
        </div>
      </motion.div>

      {isNavigating && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center bg-neutral-950/85 backdrop-blur-sm"
          role="status"
          aria-live="polite"
          aria-label="Opening chat"
        >
          <LoaderCircle className="h-10 w-10 animate-spin text-sky-400" />
        </div>
      )}
      <FluidCursor />
    </div>
  );
}
