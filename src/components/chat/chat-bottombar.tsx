// src/components/chat/chat-bottombar.tsx
'use client';

import { ChatRequestOptions } from 'ai';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import React, { useEffect } from 'react';

interface ChatBottombarProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  isLoading: boolean;
  stop: () => void;
  input: string;
  isToolInProgress: boolean;
  disabled?: boolean;
}

export default function ChatBottombar({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
  isToolInProgress,
  disabled = false,
}: ChatBottombarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      !e.nativeEvent.isComposing &&
      !isToolInProgress &&
      input.trim()
    ) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full pb-1 md:pb-2"
    >
      <form onSubmit={handleSubmit} className="relative w-full md:px-4">
        <div className="mx-auto flex items-center rounded-full border border-neutral-800 bg-neutral-900/90 py-2.5 pr-2 pl-6 shadow-xl backdrop-blur-xl transition-colors hover:border-neutral-700">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder={
              disabled
                ? ''
                : isToolInProgress
                ? 'Processing response...'
                : 'Ask Cherlton anything…'
            }
            className={`w-full border-none bg-transparent text-base placeholder:text-neutral-500 focus:outline-none ${
              disabled ? 'text-neutral-500' : 'text-neutral-100'
            }`}
            disabled={isToolInProgress || isLoading || disabled}
          />

          <button
            type="submit"
            disabled={isLoading || !input.trim() || isToolInProgress || disabled}
            className="flex items-center justify-center rounded-full bg-blue-600 p-2 text-white transition-colors hover:bg-blue-500 disabled:opacity-50"
            onClick={(e) => {
              if (isLoading) {
                e.preventDefault();
                stop();
              }
            }}
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
