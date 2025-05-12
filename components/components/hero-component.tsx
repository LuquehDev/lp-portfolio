"use client";

import { Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HeroSection() {
  return (
    <section
      id="start"
      className="relative h-screen w-full text-primary flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] dark:bg-muted/25 rounded-full blur-[150px]" />
      </div>

      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black leading-tight md:mb-80">
          Turning <span className="text-blue-500">ideas</span>
          <br />
          into
          <br />
          <span className="text-blue-500">interfaces</span>!
        </h1>

        <TooltipProvider>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.instagram.com/luiz.0_0/"
                  target="_blank"
                  className="p-2 border rounded-md hover:bg-primary/10"
                >
                  <Instagram className="h-8 w-8" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">Instagram</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/luiz-henrique-paiva-41265a256/"
                  target="_blank"
                  className="p-2 border rounded-md hover:bg-primary/10"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">LinkedIn</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/LuquehDev"
                  target="_blank"
                  className="p-2 border rounded-md hover:bg-primary/10"
                >
                  <Github className="h-8 w-8" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-semibold">GitHub</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/svg1.svg"
          alt="Floating Icon"
          width={110}
          height={110}
          className="absolute bottom-160 hidden md:block md:left-[15%] lg:left-[20%] animate-floating"
        />
        <Image
          src="/svg2.svg"
          alt="Floating Icon"
          width={110}
          height={110}
          className="absolute bottom-120 hidden md:block md:left-5 lg:left-[12%] animate-floating"
        />
        <Image
          src="/svg3.svg"
          alt="Floating Icon"
          width={110}
          height={110}
          className="absolute bottom-50 hidden md:block md:left-[20%] lg:left-[30%] animate-floating"
        />
        <Image
          src="/svg4.svg"
          alt="Floating Icon"
          width={110}
          height={110}
          className="absolute bottom-50 hidden md:block md:left-[65%] lg:left-[60%] animate-floating"
        />
        <Image
          src="/svg5.svg"
          alt="Floating Icon"
          width={110}
          height={110}
          className="absolute bottom-120 hidden md:block md:left-[82%] lg:left-[78%] animate-floating"
        />
        <Image
          src="/svg6.svg"
          alt="Floating Icon"
          width={110}
          height={110}
          className="absolute bottom-160 hidden md:block md:left-[75%] lg:left-[70%] animate-floating"
        />
      </div>
    </section>
  );
}
