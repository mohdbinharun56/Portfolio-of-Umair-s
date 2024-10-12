'use client'
import Logo from "./logo/page";
import Navigation from "./nav/page";

export default function Header({ handleTheme,handleNav, theme }: any) {
    return (
        <div id="home" className="md:flex items-center justify-around mt-2">
            <div>
                <Logo theme={theme} />
            </div>
            <div className="flex flex-col md:flex-row gap-4 ml-14 mt-10 md:mt-0 items-center">
                <Navigation handleNav={handleNav} />
                <a href="/path/to/CV.pdf" download>
                    <button>Download CV</button>
                </a>
                <div>
                    <input
                        type="checkbox"
                        onClick={(e: any) => handleTheme(e)}
                        className={`${theme ? '[--tglbg:white] hover:[--tglbg:bleck] bg-black' : 'bg-white [--tglbg:black] hover:[--tglbg:white] hover:bg-black'} toggle boder-2 border-blue-900`} />
                </div>
            </div>
        </div>
    );
}
