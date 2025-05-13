"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [offsetFromFooter, setOffsetFromFooter] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    footerRef.current = document.querySelector("footer");
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setOffsetFromFooter(footerTop < windowHeight + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-6 z-50 w-12 h-12 rounded-full bg-muted/30 backdrop-blur-sm text-primary cursor-pointer shadow-md hover:bg-muted/50 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${offsetFromFooter ? "mb-6" : ""}`}
      style={{
        bottom: offsetFromFooter ? "90px" : "24px", // sobe quando encostar o footer
      }}
    >
      <ChevronUp className="mx-auto" />
    </button>
  );
}
