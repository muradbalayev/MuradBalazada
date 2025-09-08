import ThemeSwitch from "./ThemeSwitch";
import myImage from "@/assets/profile.jpeg";
import Image from "next/image";
import logo from '../../public/logo.png'
import { Github, Linkedin, Twitter, ArrowRight, ArrowDownToLine } from "lucide-react";
import CVPopover from "./Resume";

export default function Sidebar() {
  return (
    <aside className="xl:sticky relative overflow-y-auto xl:top-0 xl:h-dvh flex flex-col justify-between py-6 px-4 sm:py-10 sm:px-10  bg-background">
      <div className="space-y-6 max-w-[420px]">
        {/* Header row with theme toggle */}
       
        {/* Profile */}
        <div className="flex items-center sm:gap-4 gap-3">
          <div className="sm:w-[60px] sm:h-[60px] w-[56px] h-[56px] sm:min-w-[60px] sm:min-h-[60px] min-w-[56px] min-h-[56px] rounded-full  overflow-hidden">
            <Image
              src={myImage}
              width={500}
              height={500}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex sm:max-w-[100px] max-w-[80px]">
            <Image
              src={logo}
              width={1024}
              height={1024}
              alt="Profile"
              className="w-full h-full object-cover rounded-full dark:invert"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-3 rounded-lg bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200/70 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-800/40 w-max">
          <span className="animate-pulse size-2.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
          <span className="sm:text-sm text-xs font-medium">
            Available for hire
          </span>
        </div>
        <div className=" flex items-center justify-end">
          <ThemeSwitch />
        </div>
        </div>

        {/* Availability */}
        

        {/* Intro */}
        <div className="space-y-3 mt-20">
          <h2 className="text-2xl font- font-medium leading-tight">
            Websites that takes startups from zero to epic.
          </h2>
          <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
            I'm Murad Balazade 22, a software engineer with 2+ years of experience helping companies create web and mobile
            products. High impact interfaces and performance-driven
            applications.
          </p>
          <div className="flex gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 h-12 px-4 rounded-full bg-foreground text-background text-sm font-medium shadow-sm hover:opacity-90"
            >
              Work with me
              <ArrowRight className="size-4 group-hover:translate-x-[2px] transition" />
            </a>
            <a
              href="#message"
              className="inline-flex items-center gap-2 h-12 px-4 rounded-full bg-black/5 border border-black/10 dark:border-transparent dark:bg-white/10 text-sm font-medium hover:bg-black/10 dark:hover:bg-white/20"
            >
              Message me
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-3">
          <h3 className="font-medium">What I’m best at...</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
                "React",
              "Next.js",
              "React Native",
              "JavaScript",
              "Tailwind",
              "State Management",
              "Animations",
              "Performance",
            ].map((t) => (
              <div
                key={t}
                className="text-sm px-3 py-3 rounded-lg bg-[#f7f7f7]   dark:border-transparent dark:bg-white/10 dark:text-white/90"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        {/* Resume */}
        <CVPopover />
{/* Study */}
        {/* <div className="space-y-3">
          <h3 className="font-medium">Study</h3>
          <div className="grid grid-cols-1 gap-2">
            {[
                "Azerbaijan State and Oil University - Bachelor",
                "Azerbaijan Technical University - Master",
           
            ].map((t) => (
              <div
                key={t}
                className="text-sm px-3 py-3 rounded-lg bg-[#f7f7f7]   dark:border-transparent dark:bg-white/10 dark:text-white/90"
              >
                {t}
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Footer */}
      <div className="mt-8 max-w-[420px]">
        <div className="flex flex-row  items-center justify-between gap-4 text-sm">
          {/* email badge */}
          <a
            href="mailto:muradbalazade@gmail.com"
            className="inline-flex items-center gap-2 px-3 py-3 rounded-full bg-black/5 text-black/70 ring-1 ring-black/10 hover:bg-black/10 hover:ring-black/20 dark:bg-white/10 dark:text-white/70 dark:ring-white/15 dark:hover:bg-white/15"
          >
            <span className="i-mdi-email hidden" aria-hidden />
            <span>muradbalazade@gmail.com</span>
          </a>

          {/* socials */}
            <a
              href="#github"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3 py-3 rounded-full ring-1 ring-black/10 bg-black/5 hover:bg-black/10 hover:ring-black/20 dark:ring-white/15 dark:bg-white/10 dark:hover:bg-white/15"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="size-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="#linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3 py-3 rounded-full ring-1 ring-black/10 bg-black/5 hover:bg-black/10 hover:ring-black/20 dark:ring-white/15 dark:bg-white/10 dark:hover:bg-white/15"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="size-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          
        </div>
      </div>
    </aside>
  );
}


