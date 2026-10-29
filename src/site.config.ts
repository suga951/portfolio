// ─────────────────────────────────────────────────────────────
// Central place for site-wide content. Edit this file first.
// Anything in [square brackets] is a placeholder — replace it.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Suga',
  headline: 'Backend Developer · NestJS · AWS · Linux',
  title: 'Suga — Backend Developer',
  description:
    'Suga is a backend developer working with NestJS, Node.js, TypeScript, AWS and Linux. Open to new roles.',
  openToWork: true, // set to false to hide the "Open to work" callout
  openToWorkText: 'Open to work — backend / Node.js / NestJS roles', // TODO: adjust (e.g. remote, location, full-time/contract)
};

// TODO: replace every placeholder below with your real links.
export const contact = {
  email: '[Your email]', // e.g. you@example.com
  github: '[Your GitHub URL]', // e.g. https://github.com/your-username
  linkedin: '[Your LinkedIn URL]', // e.g. https://www.linkedin.com/in/your-handle
  resume: '[Your résumé URL]', // optional: e.g. /resume.pdf (put the file in /public)
};

export const isPlaceholder = (v: string) => v.startsWith('[') && v.endsWith(']');

export const skills = [
  {
    group: 'Backend',
    icon: '{ }',
    items: ['NestJS', 'Node.js', 'TypeScript', 'REST APIs', 'Modules / DI / Guards / Pipes'],
    note: '[Add more: e.g. databases, ORMs, queues, testing tools you use]',
  },
  {
    group: 'Cloud',
    icon: 'aws',
    items: ['AWS'],
    note: '[List the AWS services you have used, e.g. specific compute / storage / database services]',
  },
  {
    group: 'Systems',
    icon: '$_',
    items: ['Linux', 'Shell / command line'],
    note: '[Add more: e.g. scripting, containers, CI/CD, networking]',
  },
];

// TODO: replace these three placeholder projects with real ones.
export const projects = [
  {
    title: '[Project 1 name]',
    description: '[One or two sentences: what it does, the problem it solves, your role.]',
    tags: ['[Tech]', '[Tech]', '[Tech]'],
    repo: '[Repo URL]',
    demo: '[Live demo URL]',
    placeholder: true,
  },
  {
    title: '[Project 2 name]',
    description: '[One or two sentences: what it does, the problem it solves, your role.]',
    tags: ['[Tech]', '[Tech]'],
    repo: '[Repo URL]',
    demo: '[Live demo URL]',
    placeholder: true,
  },
  {
    title: '[Project 3 name]',
    description: '[One or two sentences: what it does, the problem it solves, your role.]',
    tags: ['[Tech]', '[Tech]'],
    repo: '[Repo URL]',
    demo: '[Live demo URL]',
    placeholder: true,
  },
];
