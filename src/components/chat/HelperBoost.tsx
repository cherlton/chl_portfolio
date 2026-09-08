import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  BriefcaseIcon,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleEllipsis,
  CodeIcon,
  GraduationCapIcon,
  Laugh,
  Layers,
  MailIcon,
  PartyPopper,
  Sparkles,
  UserRoundSearch,
  UserSearch,
} from 'lucide-react';
import { useState } from 'react';
import { Drawer } from 'vaul';

interface HelperBoostProps {
  submitQuery?: (query: string) => void;
  setInput?: (value: string) => void;
  hasReachedLimit?: boolean;
}

const questions = {
  Me: 'Who are you? Tell me about your background and experience.',
  Projects: 'What are your key projects? What have you built?',
  Skills: 'What are your technical and soft skills? What is your full tech stack?',
  Experience: 'Tell me about your work experience at Sisol, Fluid Intellect, and Afrihost.',
  Contact: 'How can I contact or hire you? Are you available immediately?',
};

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Experience', color: '#B95F9D', icon: PartyPopper },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
];

// Helper drawer data
const specialQuestions = [
  'Tell me about your work experience at Sisol, Fluid Intellect, and Afrihost',
  'Who are you?',
  'Can I see your resume?',
  'What projects are you most proud of?',
  'What are your technical and soft skills?',
  'Tell me about Lumora and SafetyNet API',
  'How can I contact or hire you?',
];

const questionsByCategory = [
  {
    id: 'me',
    name: 'Me',
    icon: UserSearch,
    questions: [
      'Who are you?',
      'What is your professional summary?',
      'How did you get started in software development?',
      'Where do you see yourself in 5 years?',
    ],
  },
  {
    id: 'professional',
    name: 'Experience & Career',
    icon: BriefcaseIcon,
    questions: [
      'Can I see your resume?',
      'Tell me about your role at Sisol Labour Project',
      'What did you build at Fluid Intellect?',
      'Tell me about your experience at Afrihost',
      'Why should I hire you?',
      "What is your educational background? (TUT Computer Science)",
    ],
  },
  {
    id: 'projects',
    name: 'Key Projects',
    icon: CodeIcon,
    questions: [
      'What projects are you most proud of?',
      'Tell me about Lumora (OCR & AI Mobile Scanner)',
      'Tell me about SafetyNet API (Spring Boot & Claude API)',
      'Tell me about Insight Sphere (AI Creator Intelligence)',
      'Tell me about Labour X and SisolConnex',
    ],
  },
  {
    id: 'skills',
    name: 'Technical Skills',
    icon: GraduationCapIcon,
    questions: [
      'What are your technical and soft skills?',
      'What is your experience with React and React Native?',
      'What backend frameworks do you use (Python, Java, C# .NET)?',
      'What is your experience with AI and LLMs?',
    ],
  },
  {
    id: 'contact',
    name: 'Contact & Hiring',
    icon: MailIcon,
    questions: [
      'How can I reach or hire you?',
      'Are you immediately available to start?',
      'Where are you located?',
      'What is your email and phone number?',
    ],
  },
];

// Animated Chevron component
const AnimatedChevron = () => {
  return (
    <motion.div
      animate={{
        y: [0, -4, 0], // Subtle up and down motion
      }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="text-primary mb-1.5"
    >
      <ChevronUp size={16} />
    </motion.div>
  );
};

export default function HelperBoost({
  submitQuery,
  setInput,
  hasReachedLimit = false,
}: HelperBoostProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const handleQuestionClick = (questionKey: string) => {
    if (submitQuery) {
      submitQuery(questions[questionKey as keyof typeof questions]);
    }
  };

  const handleDrawerQuestionClick = (question: string) => {
    if (submitQuery) {
      submitQuery(question);
    }
    setOpen(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <div className="w-full">
          {/* Toggle Button */}
          <div
            className={
              isVisible
                ? 'mb-2 flex justify-center'
                : 'mb-0 flex justify-center'
            }
          >
            <button
              onClick={toggleVisibility}
              className="flex items-center gap-1 px-3 py-1 text-xs text-gray-500 transition-colors hover:text-gray-700"
            >
              {isVisible ? (
                <>
                  <ChevronDown size={14} />
                  Hide quick questions
                </>
              ) : (
                <>
                  <ChevronUp size={14} />
                  Show quick questions
                </>
              )}
            </button>
          </div>

          {/* HelperBoost Content */}
          {isVisible && (
            <div className="w-full">
              <div
                className="flex w-full flex-wrap gap-1 md:gap-3"
                style={{ justifyContent: 'safe center' }}
              >
                {questionConfig.map(({ key, color, icon: Icon }) => (
                  <Button
                    key={key}
                    onClick={() => handleQuestionClick(key)}
                    variant="outline"
                    className="h-auto min-w-[100px] flex-shrink-0 cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-2.5 shadow-md backdrop-blur-sm transition-all hover:bg-neutral-800 hover:border-neutral-700 active:scale-95"
                  >
                    <div className="flex items-center gap-2.5 text-neutral-200">
                      <Icon size={18} strokeWidth={2} color={color} />
                      <span className="text-sm font-medium">{key}</span>
                    </div>
                  </Button>
                ))}

                {/* Need Inspiration Button */}
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Drawer.Trigger className="group relative flex flex-shrink-0 items-center justify-center">
                        <motion.div
                          className="flex h-auto cursor-pointer items-center space-x-1 rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-2.5 text-sm shadow-md backdrop-blur-sm transition-all hover:bg-neutral-800 hover:border-neutral-700"
                          whileHover={{ scale: 1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center gap-2 text-neutral-200">
                            <CircleEllipsis
                              className="h-[20px] w-[18px]"
                              strokeWidth={2}
                            />
                          </div>
                        </motion.div>
                      </Drawer.Trigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <AnimatedChevron />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Content */}
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-100 bg-black/70 backdrop-blur-xs" />
          <Drawer.Content className="fixed right-0 bottom-0 left-0 z-100 mt-24 flex h-[80%] flex-col rounded-t-2xl bg-neutral-900 border-t border-neutral-800 text-neutral-100 outline-none lg:h-[65%]">
            <div className="flex-1 overflow-y-auto rounded-t-2xl bg-neutral-950 p-4 md:p-6">
              <div className="mx-auto max-w-xl space-y-4">
                <div
                  aria-hidden
                  className="mx-auto mb-6 h-1.5 w-12 flex-shrink-0 rounded-full bg-neutral-700"
                />
                <div className="mx-auto w-full max-w-xl">
                  <div className="space-y-8 pb-16">
                    {questionsByCategory.map((category) => (
                      <CategorySection
                        key={category.id}
                        name={category.name}
                        Icon={category.icon}
                        questions={category.questions}
                        onQuestionClick={handleDrawerQuestionClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

// Component for each category section
interface CategorySectionProps {
  name: string;
  Icon: React.ElementType;
  questions: string[];
  onQuestionClick: (question: string) => void;
}

function CategorySection({
  name,
  Icon,
  questions,
  onQuestionClick,
}: CategorySectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5 px-1">
        <Icon className="h-5 w-5 text-blue-400" />
        <Drawer.Title className="text-[20px] font-semibold text-neutral-100">
          {name}
        </Drawer.Title>
      </div>

      <Separator className="my-3 border-neutral-800" />

      <div className="space-y-2.5">
        {questions.map((question, index) => (
          <QuestionItem
            key={index}
            question={question}
            onClick={() => onQuestionClick(question)}
            isSpecial={specialQuestions.includes(question)}
          />
        ))}
      </div>
    </div>
  );
}

// Component for each question item with animated chevron
interface QuestionItemProps {
  question: string;
  onClick: () => void;
  isSpecial: boolean;
}

function QuestionItem({ question, onClick, isSpecial }: QuestionItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        'flex w-full items-center justify-between rounded-xl',
        'text-sm px-5 py-3.5 text-left font-normal cursor-pointer',
        'transition-all',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        isSpecial
          ? 'bg-blue-600/20 border border-blue-500/40 text-blue-200 hover:bg-blue-600/30'
          : 'bg-neutral-900 border border-neutral-800 text-neutral-200 hover:bg-neutral-800 hover:border-neutral-700'
      )}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center">
        {isSpecial && <Sparkles className="mr-2 h-4 w-4 text-blue-400" />}
        <span className={isSpecial ? 'font-medium text-blue-100' : ''}>
          {question}
        </span>
      </div>
      <motion.div
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <ChevronRight
          className={cn(
            'h-4 w-4 shrink-0',
            isSpecial ? 'text-blue-400' : 'text-neutral-500'
          )}
        />
      </motion.div>
    </motion.button>
  );
}
