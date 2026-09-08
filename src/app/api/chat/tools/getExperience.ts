import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description:
    'This tool shows detailed professional work experience, education, certifications, and references for Nhlangano Cherlton Mhangwana. Use it when visitors ask about work history, career, past jobs (Sisol, Fluid Intellect, Afrihost), education, or references.',
  parameters: z.object({}),
  execute: async () => {
    return 'Here is my complete professional experience, education, certifications, and references above!';
  },
});
