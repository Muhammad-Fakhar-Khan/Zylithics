import { ProjectSlider, type ProjectData } from '../components/ProjectSlider';

const wpProjects: ProjectData[] = [
  {
    title: "CodeTec",
    desc: "An aggressive B2B structural overhaul converting legacy monolithic PHP into a headless WordPress distribution explicitly optimized for Next.js endpoints.",
    link: "https://codetecsolutions.com/",
    screenshot: "/screenshots/codetecsolutions.com.png"
  },
  {
    title: "Precision Engineering",
    desc: "A globally synchronized backend capable of supporting an international firm interface. Absolute fidelity matching engineering schematics perfectly within standard WCAG boundaries.",
    link: "https://precissioneng.com/",
    screenshot: "/screenshots/precissioneng.com.png"
  },
  {
    title: "Oceanic Logistics",
    desc: "Overwriting an international cargo tracking front-end with an agile CMS setup designed exclusively to handle mass scale un-bloated SEO rendering.",
    link: "https://www.oceaniclogistics.com/",
    screenshot: "/screenshots/www.oceaniclogistics.com.png"
  }
];

export function WordPress() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-5xl md:text-7xl font-extrabold text-obsidian dark:text-white mb-6 tracking-tighter">Scalable WordPress</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 tracking-wide max-w-3xl mb-16">
        A premium showcase of agile monolithic and decoupled headless CMS 
        architectures engineered for precise scale.
      </p>

      <ProjectSlider projects={wpProjects} />
    </div>
  );
}
