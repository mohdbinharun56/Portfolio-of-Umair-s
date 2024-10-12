'use client'

export default function Navigation ({handleNav}:any){
    return (
        <div>
            <nav>
                <ul className="flex flex-col text-base lg:text-lg py-2 px-3 gap-3 md:flex-row">
                    <a href={'#home'} className="hover:text-orange-500 transition duration-1000" onClick={()=>handleNav("#home")}>Home</a>
                    <a href={'#about'} className="hover:text-orange-500 transition duration-1000" onClick={()=>handleNav("#about")}>About Me</a>
                    <a href={'#services'} className="hover:text-orange-500 transition duration-1000" onClick={()=>handleNav("#services")}>Services</a>
                    <a href={'#projects'} className="hover:text-orange-500 transition duration-1000" onClick={()=>handleNav("#projects")}>Projects</a>
                    <a href={'#testimonials'} className="hover:text-orange-500 transition duration-1000" onClick={()=>handleNav("#testimonials")}>Testimonials</a>
                    <a href={'#contact'} className="hover:text-orange-500 transition duration-1000" onClick={()=>handleNav("#contact")}>Contact</a>
                </ul>
            </nav>
        </div>
    );
};

