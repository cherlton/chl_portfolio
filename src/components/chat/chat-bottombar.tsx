// src/components/chat/chat-bottombar.tsx
'use client';

import { ChatRequestOptions } from 'ai';
import { motion } from 'framer-motion';
import { ArrowUp, Mic, Plus, Sparkles, Square } from 'lucide-react';
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

  const hasContent = input.trim().length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <form onSubmit={handleSubmit} className="w-full">
        {/* ChatGPT Style Input Container */}
        <div className="flex w-full items-center gap-2 rounded-[28px] border border-neutral-800 bg-[#212121] py-2 pl-3 pr-3 shadow-2xl transition-all focus-within:border-neutral-700 hover:border-neutral-700/80">
          {/* Left Plus Button */}
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
            title="Add prompt / Attach"
            onClick={() => {
              if (inputRef.current) inputRef.current.focus();
            }}
          >
            <Plus className="h-5 w-5" />
          </button>

          {/* Input text field */}
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
                : 'Ask anything...'
            }
            className={`w-full border-none bg-transparent text-[15px] placeholder:text-neutral-500 focus:outline-none ${
              disabled ? 'text-neutral-500' : 'text-neutral-100'
            }`}
            disabled={isToolInProgress || disabled}
          />

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Think Pill */}
            <div className="hidden sm:flex items-center gap-1 rounded-full border border-neutral-700/60 bg-neutral-800/80 px-2.5 py-1 text-xs font-medium text-neutral-400 select-none">
              <Sparkles className="h-3 w-3 text-sky-400" />
              <span>Think</span>
            </div>

            {/* Mic / Voice Icon */}
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
              title="Voice input"
              onClick={() => {
                if (inputRef.current) inputRef.current.focus();
              }}
            >
              <Mic className="h-4 w-4" />
            </button>

            {/* Send / Stop Button */}
            {isLoading ? (
              <button
                type="button"
                onClick={stop}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-all hover:bg-neutral-200 active:scale-95 shadow-sm"
                title="Stop generating"
              >
                <Square className="h-3.5 w-3.5 fill-black" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!hasContent || isToolInProgress || disabled}
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
                  hasContent
                    ? 'bg-white text-black hover:bg-neutral-200 shadow-sm cursor-pointer'
                    : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                }`}
                title="Send prompt"
              >
                <ArrowUp className="h-4 w-4 stroke-[2.5]" />
              </button>
            )}
          </div>
        </div>
      </form>
    </motion.div>
  );
}
