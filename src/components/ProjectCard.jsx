"use client";
import { useState, memo } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

function ProjectCardBase({ project }) {
  const [modal, setModal] = useState({ open: false, src: null, alt: "" });

  if (project.variant === "text") {
    return (
      <section className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[.03] dark:bg-white/[.03] p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>
        <p className="text-sm/6 text-black/70 dark:text-white/70">
          {project.content}
        </p>
        {project.bullets?.length ? (
          <ul className="grid sm:grid-cols-2 gap-2 mt-2">
            {project.bullets.map((b) => (
              <li
                key={b}
                className="text-sm px-3 py-2 rounded-xl bg-black/5 border border-black/10 dark:border-transparent dark:bg-white/10"
              >
                {b}
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    );
  }

  // image variant
  return (
    <section className="rounded-3xl dark:border-white/10 bg-[#f7f7f7] dark:bg-white/[.04] p-3 sm:p-4">
      {!project.isLink ? (
        project?.title && (
          <div className="flex items-center justify-between px-4 py-2 text-gray-600 dark:text-gray-200">
            <h3 className="sm:text-lg text-sm font-semibold tracking-tight">
              {project.title}
            </h3>
          </div>
        )
      ) : (
        project?.title && (
        <div className="flex items-center justify-between px-4 py-2 text-gray-600 dark:text-gray-200">
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="cursor-pointer underline sm:text-lg text-sm font-semibold tracking-tight">
            {project.title}
          </a>
        </div>
        )
      )}
      <div className="rounded-2xl p-2 sm:p-3">
        <div className="grid gap-3 grid-cols-1 ">
          {project.images?.map((img, idx) => {
            const padded =
              img.display !== "fullscreen" && img.display !== "centered";
            const paddingSize =
              img.padding === "lg"
                ? "p-6 sm:p-8"
                : img.padding === "sm"
                ? "p-2 sm:p-3"
                : "p-4 sm:p-6";
            return (
              <div
                key={`${project.id}-${idx}`}
                className={` ${
                  img.display === "centered"
                    ? "py-[calc(32%-40vh)] xl:px-[calc(50%-28vw)] px-[calc(50%-40vw)]"
                    : ""
                }`}
              >
                <figure
                  className={`relative w-full h-full rounded-xl overflow-hidden  ${
                    padded ? paddingSize : "p-0"
                  } w-full`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt || project.title}
                    className={`object-cover rounded-xl w-full h-full`}
                    priority={idx === 0}
                  />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
      <ImageModal
        open={modal.open}
        onClose={() => setModal({ open: false, src: null })}
        src={modal.src}
        alt={modal.alt}
      />
    </section>
  );
}

const ProjectCard = memo(ProjectCardBase);
export default ProjectCard;
