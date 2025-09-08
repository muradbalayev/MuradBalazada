"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function ImageModal({ open, onClose, src, alt }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-[1600px] w-full h-[86vh]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt={alt || "Project image"}
          fill
          sizes="100vw"
          className="object-contain rounded-xl"
          priority
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black/70 text-white text-xl grid place-items-center"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}
