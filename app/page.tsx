import Timeline from "@/components/components/timeline-component";
import HeroComponent from "@/components/components/hero-component";
import AboutMe from "@/components/components/aboutme-component";
import Technologies from "@/components/components/technologies-component";
import ScrollToTopButton from "@/components/components/topscroll-component";
import FooterPage from "@/components/components/footer-component";
import MyProjects from "@/components/components/projects-component";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-col h-full gap-[200px] px-8 md:px-10 lg:px-12">
        <HeroComponent />
        <AboutMe />
        <Technologies />
        <Timeline />
        <MyProjects />
      </div>
      <ScrollToTopButton />
      <FooterPage />
    </div>
  );
}
