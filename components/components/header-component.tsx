"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Moon, Sun, Menu } from "lucide-react";
import * as React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex w-full py-4 items-center justify-between px-8 md:px-10 lg:px-12 gap-2 ${scrolled ? "backdrop-blur-sm bg-background/70" : ""
        }`}
    >
      <div className="flex items-center gap-2">
        <Image width={34} height={34} src="/logoLP.png" alt="Logo LP" />
        <Separator orientation="vertical" />
        <div onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <a href="#about" className="text-primary font-medium hover:text-muted">
                  About Me
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#technologies" className="text-primary font-medium hover:text-muted">
                  Thecnologies
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#experience" className="text-primary font-medium hover:text-muted">
                  Experience
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#projects" className="text-primary font-medium hover:text-muted">
                  Projects
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <nav className="hidden lg:flex gap-4">
          <a href="#about" className="text-primary font-medium hover:text-secondary hover:font-semibold">
            About Me
          </a>
          <a href="#technologies" className="text-primary font-medium hover:text-secondary hover:font-semibold">
            Thecnologies
          </a>
          <a href="#experience" className="text-primary font-medium hover:text-secondary hover:font-semibold">
            Experience
          </a>
          <a href="#projects" className="text-primary font-medium hover:text-secondary hover:font-semibold">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
