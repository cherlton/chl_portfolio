'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, CheckCircle, GraduationCap, Award, UserCheck, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Sisol Labour Project',
      period: 'Sept 2025 – Jun 2026',
      leader: 'CEO: Solomon Makgobatlou',
      skills: ['React', 'TypeScript', 'C# (.NET) APIs', 'Tailwind CSS', 'POPIA', 'B-BBEE'],
      points: [
        'Partnered with the backend team to learn C# (.NET) API integration patterns, then translated that architecture into a responsive React + TypeScript frontend as sole frontend/UI-UX developer.',
        'Designed and automated HR documentation workflows, cutting manual administrative effort by 30% and improving process efficiency.',
        'Built responsive, accessible dashboards compliant with POPIA and B-BBEE regulatory requirements, ensuring the platform met local legal and industry standards.',
        'Owned the frontend development lifecycle independently, from UI/UX design through implementation, demonstrating strong ownership and adaptability in a lean team environment.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Fluid Intellect',
      period: 'Jan 2025 – Aug 2025',
      leader: 'CEO: Samantha Sighn',
      skills: ['Flask', 'React', 'React Native', 'OCR', 'OpenAI API', 'Agile/Scrum', 'Query Caching'],
      points: [
        'Built and shipped full-stack features using Flask and React for a production application supporting 1,000+ active users, following Agile/Scrum practices end-to-end.',
        'Optimized backend queries and implemented caching, improving API response times by 25% and strengthening overall application performance.',
        'Designed and implemented secure REST APIs with authentication best practices, participating in peer code reviews to uphold code quality standards.',
        'Collaborated cross-functionally with design, backend, and QA through sprint planning, stand-ups, and deployments, gaining full software development lifecycle experience.',
        'Built the React Native mobile interface for Lumora, integrating OCR and AI/NLP services to deliver real-time, tap-to-define functionality for end users.',
      ],
    },
    {
      role: 'IT Support Agent',
      company: 'Afrihost',
      period: 'Aug 2024 – Jan 2025',
      leader: 'CEO: Gian Visser',
      skills: ['Network Troubleshooting', 'ISP Infrastructure', 'Incident Triage', 'SLA Management', 'Root-Cause Analysis'],
      points: [
        'Diagnosed and resolved 50+ high-priority technical incidents weekly across network and ISP issues, consistently meeting and exceeding SLA targets.',
        'Performed root-cause analysis on recurring issues and documented findings, escalating complex cases to engineering for faster resolution.',
        'Collaborated cross-functionally with network engineers to flag systemic issues, contributing to improved first-contact resolution rates.',
        'Delivered clear, customer-focused support under pressure, building strong communication and problem-solving skills in a fast-paced, ticket-driven environment.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Diploma in Computer Science',
      institution: 'Tshwane University of Technology',
      period: '2021 – Aug 2025',
    },
    {
      degree: 'National Senior Certificate (Matric)',
      institution: 'Johannesburg Polytech Institute',
      period: '2014 – 2019',
    },
  ];

  const certifications = [
    'Responsive Web Design – freeCodeCamp',
    'cPanel Professional Certification (CPP)',
  ];

  const references = [
    { name: 'Samantha Sighn', title: 'Director & Mentor, Fluid Intellect', contact: '+27 82 978 9912' },
    { name: 'Itumeleng Kuku', title: 'IT Support Team Leader, Afrihost', contact: '+27 81 047 1233' },
    { name: 'Lady Katabe', title: 'Senior Frontend Developer, Fluid Intellect', contact: '+27 61 148 5364' },
    { name: 'Aviwe Nozigqwaba', title: 'IT Support, Afrihost', contact: '083 380 1337' },
    { name: 'Linda Mahlangu', title: 'Project Manager & Business Analyst, Fluid Intellect', contact: '+27 72 653 4354' },
    { name: 'Mbhulaheni Luvhimbi', title: 'Full Stack Developer, Sisol Labour Projects', contact: '+27 64 777 8356' },
  ];

  return (
    <div className="mx-auto w-full py-6 font-sans space-y-10">
      {/* Work Experience Section */}
      <div>
        <div className="mb-6 flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Professional Experience
            </h2>
            <p className="text-sm text-muted-foreground">
              2 years of building scalable web & mobile apps and APIs
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-3xl bg-accent p-6 md:p-8 border border-border/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary mt-0.5">
                    <Building2 className="h-4 w-4" />
                    <span>{exp.company}</span>
                    <span className="text-muted-foreground font-normal">• {exp.leader}</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground rounded-full bg-background/60 px-3 py-1 self-start sm:self-auto">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5 my-4">
                {exp.skills.map((skill, sIdx) => (
                  <Badge key={sIdx} variant="secondary" className="text-xs font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Bullet points */}
              <ul className="space-y-2 text-sm text-foreground/90 mt-2">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-1" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-accent p-6 md:p-8 border border-border/50">
          <div className="flex items-center gap-2.5 mb-4">
            <GraduationCap className="h-5 w-5 text-indigo-500" />
            <h3 className="text-lg font-bold text-foreground">Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-primary/40 pl-3">
                <p className="font-semibold text-foreground text-sm">{edu.degree}</p>
                <p className="text-xs text-muted-foreground">{edu.institution}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-accent p-6 md:p-8 border border-border/50">
          <div className="flex items-center gap-2.5 mb-4">
            <Award className="h-5 w-5 text-amber-500" />
            <h3 className="text-lg font-bold text-foreground">Certifications</h3>
          </div>
          <ul className="space-y-3 text-sm">
            {certifications.map((cert, idx) => (
              <li key={idx} className="flex items-center gap-2 text-foreground font-medium">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Professional References */}
      <div className="rounded-3xl bg-accent p-6 md:p-8 border border-border/50">
        <div className="flex items-center gap-2.5 mb-4">
          <UserCheck className="h-5 w-5 text-emerald-500" />
          <h3 className="text-lg font-bold text-foreground">References</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {references.map((ref, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-background/50 border border-border/30 text-xs">
              <p className="font-bold text-foreground">{ref.name}</p>
              <p className="text-muted-foreground mt-0.5">{ref.title}</p>
              <p className="text-blue-500 font-mono mt-1.5 flex items-center gap-1">
                <Phone className="h-3 w-3" />
                {ref.contact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
