import Image from 'next/image';
import { ChevronRight, Link as LinkIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Enhanced project content array with Cherlton Mhangwana's actual projects
const PROJECT_CONTENT = [
  {
    title: 'Lumora',
    subtitle: 'Document Scanner & Interactive Definitions App',
    description:
      'Lumora is a mobile document scanner that lets users tap on scanned document text to instantly view definitions, explanations, and descriptions. Contributed to the mobile frontend using React Native, integrating optical character recognition (OCR) and backend NLP services powered by OpenAI API. Built as part of the Fluid Intellect team.',
    techStack: [
      'React Native',
      'Python',
      'JavaScript',
      'OCR',
      'OpenAI API',
      'NLP',
      'REST APIs',
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub Profile',
        url: 'https://github.com/cherlton',
      },
      {
        name: 'Fluid Intellect Reference',
        url: 'https://linkedin.com/in/nhlangano-mhangwana-4418612a4',
      },
    ],
    images: [
      {
        src: '/datai1.png',
        alt: 'Lumora App Interface',
      },
      {
        src: '/datai2.png',
        alt: 'Lumora OCR & Tap-to-define workflow',
      },
    ],
  },
  {
    title: 'SafetyNet API',
    subtitle: 'Community Safety Incident Reporting Platform',
    description:
      'A community safety backend platform enabling citizens to report incidents directly via WhatsApp using a 3-tier layered architecture with Twilio webhook integration. Utilized the Anthropic Claude API to extract structured incident data from natural language chat messages, persisting geotagged incident records to PostgreSQL/PostGIS, secured with Spring Security.',
    techStack: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'PostGIS',
      'Twilio WhatsApp API',
      'Anthropic Claude API',
      'Spring Security',
      'REST APIs',
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/cherlton',
      },
      {
        name: 'LinkedIn Overview',
        url: 'https://linkedin.com/in/nhlangano-mhangwana-4418612a4',
      },
    ],
    images: [
      {
        src: '/defai1.png',
        alt: 'SafetyNet Architecture Overview',
      },
      {
        src: '/defai2.png',
        alt: 'SafetyNet WhatsApp Webhook Workflow',
      },
    ],
  },
  {
    title: 'Insight Sphere',
    subtitle: 'AI Creator Intelligence Platform',
    description:
      'Backend services and intelligent pipeline for AI-driven creator trend analysis, niche discovery, and automated content generation. Implemented high-performance APIs for hooks, scripts, hashtags, collaboration matching, and creator ROI analytics using vector search.',
    techStack: [
      'Python',
      'Flask',
      'FastAPI',
      'React',
      'Vector Search',
      'OpenAI API',
      'REST APIs',
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub Profile',
        url: 'https://github.com/cherlton',
      },
      {
        name: 'LinkedIn Project Update',
        url: 'https://linkedin.com/in/nhlangano-mhangwana-4418612a4',
      },
    ],
    images: [
      {
        src: '/fitgear1.png',
        alt: 'Insight Sphere Analytics Platform',
      },
      {
        src: '/fitgear2.png',
        alt: 'Insight Sphere Creator Intelligence',
      },
    ],
  },
  {
    title: 'Labour X',
    subtitle: 'Workforce & HR Operations Platform',
    description:
      'Workforce management platform built for employee onboarding, staff records, and HR document automation. Automated approval workflows and implemented compliance modules specifically adhering to POPIA and B-BBEE regulatory standards, cutting manual administrative effort by 30%.',
    techStack: [
      'React',
      'TypeScript',
      'C# (.NET) APIs',
      'Tailwind CSS',
      'POPIA Compliance',
      'B-BBEE',
    ],
    date: '2025 - 2026',
    links: [
      {
        name: 'GitHub Profile',
        url: 'https://github.com/cherlton',
      },
      {
        name: 'LinkedIn Profile',
        url: 'https://linkedin.com/in/nhlangano-mhangwana-4418612a4',
      },
    ],
    images: [
      {
        src: '/synto1.png',
        alt: 'Labour X HR Dashboard',
      },
      {
        src: '/synto2.png',
        alt: 'Labour X Documentation Flow',
      },
    ],
  },
  {
    title: 'SisolConnex',
    subtitle: 'Recruiter-Facing Talent Platform',
    description:
      'Recruiter-facing talent discovery and recruitment platform. Refined the frontend architecture, elevating UI consistency, user navigation, and cross-device usability. Implemented responsive layouts with Tailwind CSS across desktop, tablet, and mobile devices.',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Responsive UI',
      'REST APIs',
    ],
    date: '2025 - 2026',
    links: [
      {
        name: 'GitHub Profile',
        url: 'https://github.com/cherlton',
      },
      {
        name: 'LinkedIn Profile',
        url: 'https://linkedin.com/in/nhlangano-mhangwana-4418612a4',
      },
    ],
    images: [
      {
        src: '/rrate1.png',
        alt: 'SisolConnex Talent Discovery',
      },
      {
        src: '/rrate2.png',
        alt: 'SisolConnex Candidate Profiles',
      },
    ],
  },
  {
    title: 'Mood DJ Backend',
    subtitle: 'Sentiment-Based Music Recommendation Service',
    description:
      'A backend service built with Python and Flask that analyzes mood and emotional intent to dynamically generate tailored music playlists and recommendations. Features fast caching and RESTful endpoints.',
    techStack: ['Python', 'Flask', 'REST APIs', 'Query Caching', 'JSON'],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/cherlton',
      },
    ],
    images: [
      {
        src: '/youbot1.jpg',
        alt: 'Mood DJ Backend API',
      },
    ],
  },
  {
    title: 'Email Builder',
    subtitle: 'Interactive Drag-and-Drop Template Generator',
    description:
      'Component-driven visual email template builder developed in React and TypeScript. Enables marketers and developers to assemble responsive, cross-client HTML email newsletters effortlessly.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'HTML Email Standards'],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/cherlton',
      },
    ],
    images: [
      {
        src: '/datai3.png',
        alt: 'Email Builder Interface',
      },
    ],
  },
  {
    title: 'Textbook Trader',
    subtitle: 'Peer-to-Peer Academic Marketplace',
    description:
      'Student marketplace web application facilitating peer-to-peer textbook exchanges, listings, price comparisons, and seller communications for university students.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Auth'],
    date: '2024',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/cherlton',
      },
    ],
    images: [
      {
        src: '/trans1.png',
        alt: 'Textbook Trader Marketplace',
      },
    ],
  },
  {
    title: 'Network Testing App',
    subtitle: 'Network Diagnostics & SLA Monitoring Tool',
    description:
      'Network diagnostics tool built to test latency, packet stability, and ISP connection bottlenecks. Inspired by technical support engineering experience at Afrihost.',
    techStack: ['Python', 'Networking', 'Sockets', 'ISP Diagnostics'],
    date: '2024',
    links: [
      {
        name: 'GitHub Profile',
        url: 'https://github.com/cherlton',
      },
    ],
    images: [
      {
        src: '/minishell1.png',
        alt: 'Network Testing Utility',
      },
    ],
  },
  {
    title: 'Sneaker Trader Platform',
    subtitle: 'E-Commerce & Collectibles Trade Hub',
    description:
      'Online marketplace platform designed for sneaker enthusiasts to browse authenticated listings, submit trade proposals, and manage personal collections.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'State Management'],
    date: '2023 - 2024',
    links: [
      {
        name: 'GitHub Profile',
        url: 'https://github.com/cherlton',
      },
    ],
    images: [
      {
        src: '/oldport1.png',
        alt: 'Sneaker Trader Hub',
      },
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10 font-sans">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400 font-semibold">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-10">
          <div className="px-2 mb-4 flex items-center gap-2">
            <h3 className="text-sm font-semibold tracking-wide text-neutral-500 dark:text-neutral-400">
              Project Links
            </h3>
            <LinkIcon className="text-muted-foreground w-4 h-4" />
          </div>
          <Separator className="my-3" />
          <div className="space-y-2.5">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-medium">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl border border-border/40"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with Cherlton's projects
export const data = [
  {
    category: 'Mobile & AI App',
    title: 'Lumora',
    src: '/dataipreview.png',
    content: <ProjectContent project={{ title: 'Lumora' }} />,
  },
  {
    category: 'Backend & Security API',
    title: 'SafetyNet API',
    src: '/defaipreview.png',
    content: <ProjectContent project={{ title: 'SafetyNet API' }} />,
  },
  {
    category: 'AI & Analytics Platform',
    title: 'Insight Sphere',
    src: '/fitgearpreview.png',
    content: <ProjectContent project={{ title: 'Insight Sphere' }} />,
  },
  {
    category: 'Enterprise HRTech',
    title: 'Labour X',
    src: '/syntopreview.png',
    content: <ProjectContent project={{ title: 'Labour X' }} />,
  },
  {
    category: 'Web Platform',
    title: 'SisolConnex',
    src: '/ratepreview.png',
    content: <ProjectContent project={{ title: 'SisolConnex' }} />,
  },
  {
    category: 'Backend API',
    title: 'Mood DJ Backend',
    src: '/youbotpreview.png',
    content: <ProjectContent project={{ title: 'Mood DJ Backend' }} />,
  },
  {
    category: 'Frontend Tool',
    title: 'Email Builder',
    src: '/dataipreview.png',
    content: <ProjectContent project={{ title: 'Email Builder' }} />,
  },
  {
    category: 'Marketplace Platform',
    title: 'Textbook Trader',
    src: '/transcendancepreview.png',
    content: <ProjectContent project={{ title: 'Textbook Trader' }} />,
  },
  {
    category: 'Diagnostics Utility',
    title: 'Network Testing App',
    src: '/minishellpreview.png',
    content: <ProjectContent project={{ title: 'Network Testing App' }} />,
  },
  {
    category: 'E-Commerce Platform',
    title: 'Sneaker Trader Platform',
    src: '/oldportfoliopreview.png',
    content: <ProjectContent project={{ title: 'Sneaker Trader Platform' }} />,
  },
];
