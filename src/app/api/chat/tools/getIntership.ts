import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of my availability, the engineering roles I'm looking for, and my contact info. Use this tool when the user asks about hiring me, job availability, or engineering opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s my current availability and profile summary 👇

- ⚡ **Availability**: **Immediately available to start**
- 🌍 **Location**: **Johannesburg, South Africa** (Open to Remote, Hybrid, or Relocation)
- 🎯 **Roles**: **Software Engineer**, **Full-Stack Developer**, **Mobile Developer**
- 🛠️ **Core Stack**: Python (FastAPI/Flask), Java (Spring Boot), React, TypeScript, React Native, C# (.NET), PostgreSQL
- 🚀 **Experience**: 2 years of production experience across telecom, AI, HRtech, and marketplace domains (Sisol Labour Project, Fluid Intellect, Afrihost)

📬 **Contact me directly**:
- 📧 Email: cherltonmhangwana@gmail.com
- 📞 Phone: +27 65 242 1927
- 💼 LinkedIn: [linkedin.com/in/nhlangano-mhangwana-4418612a4](https://linkedin.com/in/nhlangano-mhangwana-4418612a4)
- 🐙 GitHub: [github.com/cherlton](https://github.com/cherlton)
`;
  },
});
