'use client';

import { useState } from 'react';
import { Check, Copy, RotateCw, ThumbsDown, ThumbsUp } from 'lucide-react';
import {
  ChatBubble,
  ChatBubbleMessage,
} from '@/components/ui/chat/chat-bubble';
import { ChatRequestOptions } from 'ai';
import { Message } from 'ai/react';
import { motion } from 'framer-motion';
import ChatMessageContent from './chat-message-content';
import ToolRenderer from './tool-renderer';

interface SimplifiedChatViewProps {
  message: Message;
  isLoading: boolean;
  reload: (
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
  addToolResult?: (args: { toolCallId: string; result: string }) => void;
}

const MOTION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
} as const;

export function SimplifiedChatView({
  message,
  isLoading,
  reload,
  addToolResult,
}: SimplifiedChatViewProps) {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<'like' | 'dislike' | null>(null);

  if (message.role !== 'assistant') return null;

  // Extract tool invocations that are in "result" state
  const toolInvocations =
    message.parts
      ?.filter(
        (part) =>
          part.type === 'tool-invocation' &&
          part.toolInvocation?.state === 'result'
      )
      .map((part) =>
        part.type === 'tool-invocation' ? part.toolInvocation : null
      )
      .filter(Boolean) || [];

  // Only display the first tool (if any)
  const currentTool = toolInvocations.length > 0 ? [toolInvocations[0]] : [];

  const hasTextContent = message.content.trim().length > 0;
  const hasTools = currentTool.length > 0;

  const handleCopy = () => {
    if (message.content) {
      navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div {...MOTION_CONFIG} className="flex w-full flex-col space-y-4">
      {/* Tool invocation result - displayed at the top */}
      {hasTools && (
        <div className="w-full">
          <ToolRenderer
            toolInvocations={currentTool}
            messageId={message.id || 'current-msg'}
          />
        </div>
      )}

      {/* Text content with ChatGPT styling */}
      {hasTextContent && (
        <div className="w-full text-neutral-100">
          <ChatMessageContent
            message={message}
            isLast={true}
            isLoading={isLoading}
            reload={reload}
            addToolResult={addToolResult}
            skipToolRendering={true}
          />

          {/* ChatGPT-style Action Bar under assistant messages */}
          <div className="mt-3 flex items-center gap-1 text-neutral-400">
            <button
              onClick={handleCopy}
              className="flex h-8 items-center gap-1.5 rounded-lg px-2 text-xs hover:bg-neutral-800 hover:text-white transition-colors"
              title="Copy response"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-green-400" />
                  <span className="text-green-400 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                </>
              )}
            </button>

            <button
              onClick={() => setFeedback(feedback === 'like' ? null : 'like')}
              className={`flex h-8 w-8 items-center justify-center rounded-lg hover:bg-neutral-800 transition-colors ${
                feedback === 'like' ? 'text-green-400' : 'hover:text-white'
              }`}
              title="Good response"
            >
              <ThumbsUp className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={() => setFeedback(feedback === 'dislike' ? null : 'dislike')}
              className={`flex h-8 w-8 items-center justify-center rounded-lg hover:bg-neutral-800 transition-colors ${
                feedback === 'dislike' ? 'text-red-400' : 'hover:text-white'
              }`}
              title="Bad response"
            >
              <ThumbsDown className="h-3.5 w-3.5" />
            </button>

            {reload && (
              <button
                onClick={() => reload()}
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-neutral-800 hover:text-white transition-colors"
                title="Regenerate response"
              >
                <RotateCw className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
