import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MyProjects() {
    const projects = [
        {
            title: "Doodes",
            description:
                "Doodes is a web-site that uses Trello as inspiration, being a Kanban option offering more features. Focused on companies, it is a better solution for organizing teams and tasks.",
            technologies: ["TypeScript", "Next.js", "PostgreSQL"],
            image: "/projects/doodes.png",
            logo: "/projects/logoDoodes.png",
            link: "https://doodes.com",
        },
    ];

    return (
        <section id="projects" className="flex flex-col gap-6 py-22">
            <div className="flex flex-row items-center gap-6 w-full">
                <div className="text-primary text-4xl lg:text-5xl font-semibold whitespace-nowrap">
                    My <span className="text-secondary">Projects</span>
                </div>
                <div className="w-full bg-primary/30 dark:bg-muted/30 h-1 rounded-full" />
            </div>

            <div className="flex flex-col items-center gap-6">
                {projects.length === 0 ? (
                    <span className="text-muted-foreground text-center text-lg lg:text-xl">
                        No projects to show yet. I am currently working on a few projects that will be available soon. Stay tuned!
                    </span>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="bg-background/90 dark:bg-[#0B0F19] rounded-xl shadow-lg flex flex-col overflow-hidden"
                            >
                                <div className="flex flex-col justify-baseline items-center w-full relative">
                                    <div className="w-full overflow-hidden relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={400}
                                            height={100}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50" />
                                    </div>
                                    <div className="-mt-14 z-10">
                                        <div className="relative w-22 h-22 rounded-full bg-black border border-primary shadow-md flex items-center justify-center overflow-hidden">
                                            <div className="absolute inset-0 bg-primary/15 blur-xl opacity-50 z-0" />
                                            <div className="z-10">
                                                <Image
                                                    src={project.logo}
                                                    alt="Project Logo"
                                                    width={55}
                                                    height={55}
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="px-4 flex flex-col gap-2 box-content">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm">{project.description}</p>

                                    <div className="flex gap-2 flex-wrap mt-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-muted/20 text-white text-xs px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <Button asChild className="mt-4 mb-4 w-full bg-secondary text-primary hover:bg-secondary/80">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Try out
                                        </a>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
