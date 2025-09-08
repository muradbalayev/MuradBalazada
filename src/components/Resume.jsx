"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight } from "lucide-react";

export default function CVPopover() {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
  
    useEffect(() => {
      function onDocClick(e) {
        if (!containerRef.current) return;
        if (!containerRef.current.contains(e.target)) setOpen(false);
      }
      document.addEventListener("click", onDocClick);
      return () => document.removeEventListener("click", onDocClick);
    }, []);
  
    return (
      <div className="relative" ref={containerRef}>
        <button className="font-medium underline cursor-pointer" onClick={() => setOpen((v) => !v)}>Resume</button>
      
  
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute z-20 mt-2 w-[min(320px,80vw)] rounded-xl border border-black/10 bg-white p-3 shadow-lg dark:border-white/10 dark:bg-black"
            >
              <div className="flex flex-col gap-2">
                <a
                  href="/MuradBalazadaCv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 rounded-lg px-3 py-3 hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <span className="text-sm">Preview CV in browser</span>
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="/MuradBalazadaCv.pdf"
                  download
                  className="inline-flex items-center justify-between gap-3 rounded-lg px-3 py-3 hover:bg-black/5 dark:hover:bg:white/10"
                >
                  <span className="text-sm">Download CV</span>
                  <ArrowDownToLine className="size-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
