export default function MyProjects() {
    return (
        <section id="projects" className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-6 w-full">
                <div className="text-primary text-4xl lg:text-5xl font-semibold text-nowrap">My <span className="text-secondary">Projects</span></div>
                <div className="w-full bg-primary/30 dark:bg-muted/30 h-1 rounded-full" />
            </div>
            <div className="flex flex-col items-center gap-6">
                <span className="text-muted-foreground text-center text-lg lg:text-xl">
                    No projects to show yet. I am currently working on a few projects that will be available soon. Stay tuned!
                </span>
            </div>
        </section>
    );
}