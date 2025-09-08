import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Shell */}
      <div className="mx-auto ">
        <div className="grid grid-cols-1 xl:grid-cols-[560px_minmax(0,1fr)] gap-6">
          {/* Left fixed/sticky column */}
          <Sidebar />

          {/* Right scrollable column */}
          <main className="min-h-dvh py-12 flex flex-col gap-y-6 sm:gap-y-8 px-2 sm:px-4">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
