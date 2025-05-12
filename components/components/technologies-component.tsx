import Image from "next/image";

    const technologies = [
        {
            title: "TypeScript",
            type: "Language",
            src: "/typescript.png",
            alt: "Logo TS",
        },
        {
            title: "JavaScript",
            type: "Language",
            src: "/javascript.png",
            alt: "Logo JS",
        },
        {
            title: "Python",
            type: "Language",
            src: "/python.png",
            alt: "Logo Python",
        },
        {
            title: "C#",
            type: "Language",
            src: "/csharp.png",
            alt: "Logo C#",
        },
        {
            title: "C",
            type: "Language",
            src: "/c.png",
            alt: "Logo C",
        },
        {
            title: "CSS",
            type: "Language",
            src: "/css.png",
            alt: "Logo CSS",
        },
        {
            title: "HTML",
            type: "Language",
            src: "/html.png",
            alt: "Logo HTML",
        },
        {
            title: "SQL",
            type: "Language",
            src: "/sql.png",
            alt: "Logo SQL",
        },
        {
            title: "Next.Js",
            type: "Framework",
            src: "/nextjs.png",
            alt: "Logo Next.Js",
        },
        {
            title: "React",
            type: "Framework",
            src: "/react.png",
            alt: "Logo React",
        },
        {
            title: "jQuery",
            type: "Library",
            src: "/jquery.png",
            alt: "Logo jQuery",
        },
        {
            title: "Tailwind",
            type: "Library",
            src: "/tailwind.png",
            alt: "Logo Tailwind",
        },
    ];

export default function Technologies() {
    return (
        <section id="technologies" className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-6 w-full">
                <div className="text-primary text-4xl lg:text-5xl font-semibold text-nowrap">Using <span className="text-secondary">Technologies</span></div>
                <div className="w-full bg-primary/30 dark:bg-muted/30 h-1 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-secondary/20 hover:bg-secondary/40 gap-4 dark:bg-muted/5 dark:hover:bg-muted/15 transition-all duration-200 ease-in-out px-4 py-4 rounded-md"
                    >
                        <Image
                            width={56}
                            height={56}
                            src={tech.src}
                            alt={tech.alt}
                            className="rounded-sm shadow-lg shadow-black/20"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg text-primary font-bold">{tech.title}</span>
                            <span className="text-sm font-semibold text-muted-foreground">{tech.type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}