import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "framer-motion";

export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] h-[50vh] w-[50vw] animate-blob rounded-full bg-brand-purple/10 mix-blend-screen blur-[120px]" />
      <div className="absolute right-[-10%] bottom-[-20%] h-[60vh] w-[50vw] animate-blob rounded-full bg-brand-blue/10 mix-blend-screen blur-[120px]" style={{ animationDelay: "2s" }} />
    </div>
  );
}

export function CursorGlow() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const springX = useSpring(x, { stiffness: 250, damping: 30, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 250, damping: 30, mass: 0.6 });

  useEffect(() => {
    // Skip entirely on touch / coarse pointers and reduced-motion
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let raf = 0;
    let pending: { x: number; y: number } | null = null;
    const flush = () => {
      raf = 0;
      if (pending) {
        x.set(pending.x - 250);
        y.set(pending.y - 250);
        pending = null;
      }
    };
    const handleMouseMove = (e: MouseEvent) => {
      pending = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(flush);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, [x, y]);

  // Render nothing on touch devices (SSR-safe: matchMedia checked in effect,
  // element stays hidden until first mousemove via opacity)
  if (typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[1] hidden h-[500px] w-[500px] rounded-full bg-brand-blue/30 blur-[100px] md:block"
      style={{ x: springX, y: springY }}
    />
  );
}

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 animate-ping rounded-full border-2 border-brand-blue/50" />
        <div className="absolute inset-2 animate-spin rounded-full border-t-2 border-brand-purple" />
      </div>
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[150] h-1 origin-left bg-gradient-brand"
      style={{ scaleX }}
    />
  );
}
