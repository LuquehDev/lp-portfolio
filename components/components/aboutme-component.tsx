import Image from "next/image"
import { CodeXml, MapPin, CalendarFold } from "lucide-react";

export default function AboutMe() {
    return (
        <section id="about" className="flex flex-col gap-6 py-22">
            <div className="flex flex-row items-center gap-6 w-full">
                <div className="text-primary text-4xl lg:text-5xl font-semibold text-nowrap">About <span className="text-secondary">Me</span></div>
                <div className="w-full bg-primary/30 dark:bg-muted/30 h-1 rounded-full" />
            </div>
            <div className="flex flex-col items-center lg:items-start lg:flex-row gap-4">
                <Image
                    width={400}
                    height={400}
                    src="/eu.png"
                    alt="Logo LP"
                    className="rounded-2xl shadow-lg shadow-black/20"
                />
                <div className="flex flex-col flex-1 gap-6 lg:gap-0 justify-between lg:self-stretch">
                    <div className="flex flex-col gap-4">
                        <div className="flex w-full gap-2 text-primary text-4xl lg:text-5xl font-bold lg:justify-normal justify-center items-center">Luiz <span className="text-secondary">Henrique</span> Paiva</div>
                        <div className="flex flex-col gap-1">
                            <span className="flex gap-2 items-center text-2xl font-semibold">
                                <CodeXml height={32} className="text-secondary" />
                                Front-End Developer
                            </span>
                            <span className="flex gap-1 items-center text-lg text-primary">
                                <MapPin height={18} className="text-secondary" />
                                Portugal, Lisbon
                            </span>
                            <span className="flex gap-2 items-center text-lg text-primary">
                                <CalendarFold height={18} className="text-secondary" />
                                22 yo.
                            </span>
                        </div>
                    </div>
                    <div>
                        <span className="text-lg text-primary font-medium">
                            I am a passionate Front-End Developer with a strong focus on creating exceptional user experiences. My expertise lies in HTML, CSS, and JavaScript, and I am always eager to learn new technologies and frameworks to enhance my skills.
                            I am a passionate Front-End Developer with a strong focus on creating exceptional user experiences. My expertise lies in HTML, CSS, and JavaScript, and I am always eager to learn new technologies and frameworks to enhance my skills.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}