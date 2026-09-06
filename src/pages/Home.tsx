import { Suspense, lazy } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BackgroundFX, CursorGlow, PageLoader, ScrollProgress } from "@/components/fx/Visuals";
import { SectionDivider } from "@/components/ui/SectionDivider";

// Below-the-fold sections split into separate chunks for faster FCP/LCP.
const AboutSection = lazy(() =>
  import("@/components/sections/About").then((m) => ({ default: m.About }))
);
const SkillsSection = lazy(() =>
  import("@/components/sections/About").then((m) => ({ default: m.Skills }))
);
const ExperienceSection = lazy(() =>
  import("@/components/sections/Experience").then((m) => ({ default: m.Experience }))
);
const ProjectsSection = lazy(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects }))
);
const TechStackSection = lazy(() =>
  import("@/components/sections/Credentials").then((m) => ({ default: m.TechStack }))
);
const ContactSection = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact }))
);
const Footer = lazy(() =>
  import("@/components/layout/Footer").then((m) => ({ default: m.Footer }))
);

function SectionFallback() {
  return <div aria-hidden="true" className="min-h-[40vh]" />;
}

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CursorGlow />
      <BackgroundFX />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
          <SkillsSection />
          <SectionDivider />
          <ExperienceSection />
          <SectionDivider />
          <ProjectsSection />
          <SectionDivider />
          <TechStackSection />
          <SectionDivider />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
