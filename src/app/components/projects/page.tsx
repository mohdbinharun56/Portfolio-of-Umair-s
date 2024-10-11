'use client'
import { useState } from "react";
import Project from "../project/page";

export default function Projects({ informations }: any) {
    const [activeProject, setActiveProject] = useState("All");

    const handleprojects = (e: any, projectType: string) => {
        e.preventDefault();
        setActiveProject(projectType);
    }

    const { projects } = informations;
    // console.log(projects)
    if (!projects) {
        return <h1></h1>
    }
    // const setDesign = activeProject === 'All' || activeProject === projects.find((project: any) => {
    //     const projectType = project.technology;
    //     const isCheck = activeProject === projectType;
    //     console.log(isCheck, projectType);

    // });
    return (
        <>
            <div className="w-full">
                <div className="mt-20">
                    <h1 className="text-center text-3xl lg:text-6xl font-semibold">My Projects</h1>
                    <p className="max-w-4xl my-5 mx-auto text-center font-normal text-base md:text-xl">The Projects section showcases a range of completed works, highlighting innovative solutions and technical expertise across web, mobile, and design projects. Each project demonstrates practical applications of skills, creativity, and problem-solving abilities.</p>
                </div>
                <div className="projects-show w-fit flex flex-col ml-10 md:mx-auto md:flex-row gap-4">
                    <div>
                        <button className={`${activeProject === 'All' ? 'bg-[#FD6F00]' : 'bg-[#F8F8F8] text-black border-1 border-[#545454]'}`} onClick={(e) => handleprojects(e, "All")}>All</button>
                    </div>
                    <div>
                        <button className={`${activeProject === 'UI/UX' ? 'bg-[#FD6F00]' : 'bg-[#F8F8F8] text-black'}`} onClick={(e) => handleprojects(e, "UI/UX")}>UI/UX</button>
                    </div>
                    <div className="">
                        <button className={`${activeProject === 'Web Design' ? 'bg-[#FD6F00]' : 'bg-[#F8F8F8] text-black'}`} onClick={(e) => handleprojects(e, "Web Design")}>Web Design</button>
                    </div>
                    <div>
                        <button className={`${activeProject === 'App Design' ? 'bg-[#FD6F00]' : 'bg-[#F8F8F8] text-black'}`} onClick={(e) => handleprojects(e, "App Design")}>App Design</button>
                    </div>
                    <div>
                        <button className={`${activeProject === 'Graphic Design' ? 'bg-[#FD6F00]' : 'bg-[#F8F8F8] text-black'}`} onClick={(e) => handleprojects(e, "Graphic Design")}>Graphic Design</button>
                    </div>
                </div>

                <div className={`grid grid-cols-1  lg:grid-cols-3 w-fit mx-auto my-20 gap-10`}>
                    {
                        projects.map((project: any, idx: any) => <Project key={idx} project={project} activeProject={activeProject}></Project>)
                    }
                </div>
            </div>
        </>
    )
}