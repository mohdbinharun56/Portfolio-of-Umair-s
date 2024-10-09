'use client'
import Link from "next/link";
import { useState } from "react";
const Navigation = () => {

    const [isVisible, setVisible] = useState(false);
 
    const toggleMenu = ()=>{
        setVisible(!isVisible);
    }
    return (
        <div>
            
            <div className="w-[100px] relative ml-auto lg:hidden md:hidden cursor-pointer" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-1 h-6 w-6 text-black" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>

            <nav>
                <ul className="hidden text-sm lg:text-lg py-2 px-3 gap-3 md:flex">
                    <Link href={'/'} className="hover:text-orange-500">Home</Link>
                    <Link href={'/'} className="hover:text-orange-500">About Me</Link>
                    <Link href={'/'} className="hover:text-orange-500">Services</Link>
                    <Link href={'/'} className="hover:text-orange-500">Projects</Link>
                    <Link href={'/'} className="hover:text-orange-500">Testimonials</Link>
                    <Link href={'/'} className="hover:text-orange-500">Contact</Link>
                    <a href="" download><button>Download CV</button></a>
                </ul>
                <ul className={`${isVisible? 'grid':'hidden'} grid-cols-1 gap-2 text-center ml-auto mr-20 -mt-2 text-xl bg-[#000000] w-fit rounded-xl p-2 text-white  md:hidden lg:hidden`}>
                    <Link href={'/'} className="hover:text-orange-500">Home</Link>
                    <Link href={'/'} className="hover:text-orange-500">About Me</Link>
                    <Link href={'/'} className="hover:text-orange-500">Services</Link>
                    <Link href={'/'} className="hover:text-orange-500">Projects</Link>
                    <Link href={'/'} className="hover:text-orange-500">Testimonials</Link>
                    <Link href={'/'} className="hover:text-orange-500">Contact</Link>
                    <a href="" download><button>Download CV</button></a>
                </ul>
            </nav>
            
        </div>
    );
};

export default Navigation;