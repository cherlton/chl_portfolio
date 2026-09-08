import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description:
    'This tool will show a list of all key projects built by Nhlangano Cherlton Mhangwana, including Lumora, SafetyNet API, Insight Sphere, Labour X, and SisolConnex.',
  parameters: z.object({}),
  execute: async () => {
    return 'Here are the key projects built by Cherlton! Feel free to ask more details about any of them.';
  },
});