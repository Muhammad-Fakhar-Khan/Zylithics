import { ProjectSlider, type ProjectData } from '../components/ProjectSlider';

const customWebProjects: ProjectData[] = [
  {
    title: "Coffee Shop App",
    desc: "A custom high-performance ordering architecture engineered directly with React and Next.js. Engineered globally for maximum scale with a complete decoupling resulting in zero latency on the edge.",
    link: "https://coffee-shop-rho-bay.vercel.app/",
    screenshot: "/screenshots/coffee-shop-rho-bay.vercel.app.png"
  },
  {
    title: "My-App Enterprise",
    desc: "Bespoke internal operations framework mapping custom user dynamics across an entire fleet. We built a flawless React UI prioritizing uncompromised speed and frictionless state mechanics.",
    link: "https://my-app-nu-seven-55.vercel.app/",
    screenshot: "/screenshots/my-app-nu-seven-55.vercel.app.png"
  }
];

export function CustomWeb() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-5xl md:text-7xl font-extrabold text-obsidian dark:text-white mb-6 tracking-tighter">Custom Web Platforms</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 tracking-wide max-w-3xl mb-16">
        Absolute velocity achieved through rigorous React optimization. 
        Showcasing bespoke implementations across interactive verticals.
      </p>

      <ProjectSlider projects={customWebProjects} />
    </div>
  );
}
