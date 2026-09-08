import { tool } from 'ai';
import { z } from 'zod';

export const getCrazy = tool({
  description:
    'Shows significant technical achievements and memorable engineering milestones by Cherlton.',
  parameters: z.object({}),
  execute: async () => {
    return 'One of the most exciting technical challenges was building Lumora (real-time tap-to-define OCR & AI service on mobile) and resolving 50+ critical incidents weekly under strict SLAs at Afrihost!';
  },
});