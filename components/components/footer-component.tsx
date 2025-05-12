import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const FooterPage = () => {
    return (
        <div className="flex flex-col w-full">
            <footer>
                <div className="w-full mx-auto mt-35">
                    <Separator />
                    <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-4">
                        {/* Copyright */}
                        <span className="text-muted-foreground">
                            &copy; {new Date().getFullYear()}{" "}
                            <Link href="/" target="_blank" className="font-bold text-secondary">
                                LP
                            </Link>
                            . All rights reserved.
                        </span>

                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link href="https://www.instagram.com/luiz.0_0/"
                                        target="_blank"
                                        className="p-2 rounded-md hover:bg-primary/10">
                                        <Instagram className="h-5 w-5" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Instagram</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link href="https://www.linkedin.com/in/luiz-henrique-paiva-41265a256/"
                                        target="_blank"
                                        className="p-2 rounded-md hover:bg-primary/10">
                                        <Linkedin className="h-5 w-5" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Linkedin</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link href="https://github.com/LuquehDev"
                                        target="_blank"
                                        className="p-2 rounded-md hover:bg-primary/10">
                                        <Github className="h-5 w-5" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Github</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterPage;


// <TooltipProvider>
//   <div className="flex items-center justify-center gap-4 mt-4">
//     <Tooltip>
//       <TooltipTrigger asChild>
//         <a
//           href="https://www.instagram.com/luiz.0_0/"
//           target="_blank"
//           className="p-2 border rounded-md hover:bg-primary/10"
//         >
//           <Instagram className="h-8 w-8" />
//         </a>
//       </TooltipTrigger>
//       <TooltipContent>
//         <p className="font-semibold">Instagram</p>
//       </TooltipContent>
//     </Tooltip>

//     <Tooltip>
//       <TooltipTrigger asChild>
//         <a
//           href="https://www.linkedin.com/in/luiz-henrique-paiva-41265a256/"
//           target="_blank"
//           className="p-2 border rounded-md hover:bg-primary/10"
//         >
//           <Linkedin className="h-8 w-8" />
//         </a>
//       </TooltipTrigger>
//       <TooltipContent>
//         <p className="font-semibold">LinkedIn</p>
//       </TooltipContent>
//     </Tooltip>

//     <Tooltip>
//       <TooltipTrigger asChild>
//         <a
//           href="https://github.com/LuquehDev"
//           target="_blank"
//           className="p-2 border rounded-md hover:bg-primary/10"
//         >
//           <Github className="h-8 w-8" />
//         </a>
//       </TooltipTrigger>
//       <TooltipContent>
//         <p className="font-semibold">GitHub</p>
//       </TooltipContent>
//     </Tooltip>
//   </div>
// </TooltipProvider>