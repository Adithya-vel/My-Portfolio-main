import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] h-[50vh] w-[50vw] animate-blob rounded-full bg-brand-purple/10 mix-blend-screen blur-[120px]" />
      <div className="absolute right-[-10%] bottom-[-20%] h-[60vh] w-[50vw] animate-blob rounded-full bg-brand-blue/10 mix-blend-screen blur-[120px]" style={{ animationDelay: "2s" }} />
    </div>
  );
}

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[50] h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-[120px] mix-blend-screen"
      animate={{
        x: position.x - 250,
        y: position.y - 250,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.1,
      }}
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
