'use client'
import Link from "next/link";

export default function Navigation (){
    return (
        <div>
            <nav>
                <ul className="flex flex-col text-base lg:text-lg py-2 px-3 gap-3 md:flex-row">
                    <Link href={'/'} className="hover:text-orange-500 transition duration-1000">Home</Link>
                    <Link href={'#about'} className="hover:text-orange-500 transition duration-1000">About Me</Link>
                    <Link href={'/'} className="hover:text-orange-500 transition duration-1000">Services</Link>
                    <Link href={'/'} className="hover:text-orange-500 transition duration-1000">Projects</Link>
                    <Link href={'/'} className="hover:text-orange-500 transition duration-1000">Testimonials</Link>
                    <Link href={'/'} className="hover:text-orange-500 transition duration-1000">Contact</Link>
                </ul>
            </nav>
        </div>
    );
};