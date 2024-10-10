'use client'
import { useState } from "react";

export default function Projects({ informations }: any) {
    const [project,setProject] = useState<string>("All");

    const handleprojects = (e:any,projectType:string) =>{
        e.preventDefault();
        setProject(projectType);
    }
    const { projects } = informations;
    console.log(projects)
    return (
        <>
            <div>
                <div className="mt-20">
                    <h1 className="text-center text-3xl lg:text-6xl font-semibold">My Projects</h1>
                    <p className="max-w-4xl my-5 mx-auto text-center font-normal text-base md:text-xl">The Projects section showcases a range of completed works, highlighting innovative solutions and technical expertise across web, mobile, and design projects. Each project demonstrates practical applications of skills, creativity, and problem-solving abilities.</p>
                </div>
                <div className="projects-show w-full flex justify-center gap-4">
                    <div>
                        <button className={`${project==='All'? 'bg-[#FD6F00]':'bg-[#F8F8F8] text-black border-1 border-[#545454]'}`} onClick={(e)=>handleprojects(e,"All")}>All</button>
                    </div>
                    <div>
                        <button className={`${project==='UI/UX'? 'bg-[#FD6F00]':'bg-[#F8F8F8] text-black'}`} onClick={(e)=>handleprojects(e,"UI/UX")}>UI/UX</button>
                    </div>
                    <div className="">
                        <button className={`${project==='Web Design'? 'bg-[#FD6F00]':'bg-[#F8F8F8] text-black'}`} onClick={(e)=>handleprojects(e,"Web Design")}>Web Design</button>
                    </div>
                    <div>
                        <button className={`${project==='App Design'? 'bg-[#FD6F00]':'bg-[#F8F8F8] text-black'}`} onClick={(e)=>handleprojects(e,"App Design")}>AppDesign</button>
                    </div>
                    <div>
                        <button className={`${project==='Graphic Design'? 'bg-[#FD6F00]':'bg-[#F8F8F8] text-black'}`} onClick={(e)=>handleprojects(e,"Graphic Design")}>Graphic Design</button>
                    </div>
                </div>
            </div>
        </>
    )
}