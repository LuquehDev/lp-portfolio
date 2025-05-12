import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Professional Internship - Web Developer Full Stack",
    company: "APTIV",
    period: "Aug - 2023",
    description:
      "Conducted research on machinery and corresponding peripherals with advanced filters to optimize production processes.",
    technologies: ["C#", "Blazor", "API", "GIT"],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-6 w-full">
        <div className="text-primary text-4xl lg:text-5xl font-semibold text-nowrap">My <span className="text-secondary">Experiences</span></div>
        <div className="w-full bg-primary/30 dark:bg-muted/30 h-1 rounded-full" />
      </div>
      <div className="max-w-screen-sm ml-21">
        <div className="relative ml-3">
          {/* Timeline line */}
          <div className="absolute left-0 top-4 bottom-0 border-l-2 border-border" />

          {experiences.map(({ company, description, period, technologies, title }, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0 flex items-start gap-4">
              {/* Period Badge (à esquerda da bolinha) */}
              <div className="absolute -left-28 w-24 text-right">
                <Badge className="whitespace-nowrap bg-muted-foreground/20 text-primary rounded-full">
                  {period}
                </Badge>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-px top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-secondary bg-background" />

              {/* Content card */}
              <div className="flex flex-col gap-2 p-4 rounded-lg w-full bg-secondary/20 hover:bg-secondary/40 dark:bg-muted/5 dark:hover:bg-muted/10 transition-all duration-200 ease-in-out">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
                  <span className="text-primary/80 sm:text-md font-medium">{company}</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full bg-secondary/20 dark:bg-muted/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
