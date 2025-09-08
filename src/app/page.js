import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Shell */}
      <div className="mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[560px_minmax(0,1fr)] gap-6">
          {/* Left fixed/sticky column */}
          <Sidebar />

          {/* Right scrollable column */}
          <main className="min-h-dvh py-12 space-y-6 sm:space-y-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
