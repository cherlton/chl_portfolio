import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Nhlangano Cherlton Mhangwana. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Nhlangano Cherlton Mhangwana, a Software Engineer with 2 years of experience building scalable web and mobile applications and APIs across telecom, AI, HRtech, and marketplace domains. Proficient in Python (Flask/FastAPI), Java (Spring Boot), C# (.NET), React, TypeScript, and Kotlin for Android. Immediately available to start.",
    };
  },
});
