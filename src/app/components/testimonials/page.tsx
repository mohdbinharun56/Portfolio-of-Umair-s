// import { useEffect, useRef } from "react";
import Testimonial from "../testimonial/page";

export default function Testimonials({ informations }: any) {
    const { experiences } = informations;
    // const carouselRef = useRef<HTMLDivElement>(null);

    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         if(carouselRef.current){
    //             carouselRef.current.scrollBy({
    //                 left:300,
    //                 behavior:"smooth"
    //             })
    //         }
    //     },3000)
    //     return ()=>clearInterval(interval);
    // },[])
    console.log(experiences);
    if (!experiences) {
        return;
    }
    return (
        <>
            <div>
                <div className="text-center my-20">
                    <h1 className="font-semibold text-3xl lg:text-6xl">Testimonials</h1>
                    <p className="w-[350px] lg:w-[900px] font-normal text-sm md:text-xl text-center mx-auto my-5">This section highlights client and colleague testimonials, showcasing appreciation for Mohammad’s exceptional design skills, user-centric approach, and dedication to delivering high-quality work.</p>
                </div>

                {/* <div ref={carouselRef} className="carousel rounded-box w-full my-20"> */}
                <div className="carousel w-full">
                    {
                        experiences.map((experience: any, idx: any) => <Testimonial experience={experience} key={idx}></Testimonial>)
                    }
                </div>
                {/* <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div> */}
            </div>
        </>
    );
}