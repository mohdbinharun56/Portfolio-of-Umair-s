'use client'
import { useEffect, useRef, useState } from "react";
import Testimonial from "../testimonial/page";

export default function Testimonials({ informations,theme }: any) {
    
    const { experiences } = informations || {};
    const carouselRef = useRef<HTMLDivElement>(null);
    const [moveCarousel, setMoveCarousel] = useState(0)
   
    const totalslides = experiences? experiences.length:0;

    useEffect(() => {
        const interval = setInterval(() => {
            setMoveCarousel((prevSlide:number)=> (prevSlide+1)%totalslides);
        }, 3000)
        return () => clearInterval(interval);

    }, [totalslides])

    useEffect(() => {
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.clientWidth;
            carouselRef.current.scrollTo({
                left: moveCarousel * itemWidth,
                behavior: "smooth"
            })
        }
    }, [moveCarousel])


    const handleCarousel = (e: any, idx:number) => {
        e.preventDefault();
        setMoveCarousel(idx);
        console.log(idx);
    }

    if (!experiences) {
        return null;
    }
    return (
        <>
            <div id="testimonials">
                <div className="text-center my-20">
                    <h1 className="text-center text-3xl lg:text-6xl font-semibold">Testimonials</h1>
                    <p className="max-w-4xl my-5 mx-auto text-center font-normal text-base md:text-xl">This section 
                        highlights client and colleague testimonials, showcasing appreciation for Mohammad’s exceptional design
                         skills, user-centric approach, and dedication to delivering high-quality work.</p>
                </div>

                <div ref={carouselRef} className="carousel w-full">
                    {
                        experiences.map((experience: any, idx: any) => <Testimonial experience={experience} key={idx} 
                        moveCarousel={moveCarousel} theme={theme}></Testimonial>)
                    }
                </div>

                <div className="flex w-full justify-center gap-2 py-2">
                    {
                        experiences.map((_: any, idx: any) => (
                            <a
                                key={idx}
                                href={`#item${idx+1}`}
                                
                                onClick={(e) => handleCarousel(e, idx)}>
                                <button className={`${moveCarousel === idx? "": "bg-[#D9D9D9]"}`}>{}</button>
                            </a>
                        ))
                    }
                </div>
            </div>

            <div>
                <footer></footer>
            </div>
        </>
    );
}