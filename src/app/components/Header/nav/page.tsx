import Link from "next/link";
const Navigation = () => {
    return (
        <div className="md:flex items-center gap-2 p-2">
            <nav>
                <ul className="text-sm lg:text-xl py-2 px-3 grid gap-3 md:flex">
                    <Link href={'/'} className="hover:text-orange-500">Home</Link>
                    <Link href={'/'} className="hover:text-orange-500">About Me</Link>
                    <Link href={'/'} className="hover:text-orange-500">Services</Link>
                    <Link href={'/'} className="hover:text-orange-500">Projects</Link>
                    <Link href={'/'} className="hover:text-orange-500">Testimonials</Link>
                    <Link href={'/'} className="hover:text-orange-500">Contact</Link>
                </ul>
            </nav>
            <a href="" download><button className="lg:text-xl text-white hover:bg-black" >Download CV</button></a>
        </div>
    );
};

export default Navigation;