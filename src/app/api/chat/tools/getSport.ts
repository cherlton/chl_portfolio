import { tool } from 'ai';
import { z } from 'zod';

export const getSports = tool({
  description:
    'Shows activities, work experience, and milestones for Cherlton.',
  parameters: z.object({}),
  execute: async () => {
    return 'Here is a breakdown of my career milestones, projects, and work experience!';
  },
});