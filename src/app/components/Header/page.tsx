// import Logo from "./logo/page";
// import Navigation from "./nav/page";

// export default function Header ({handleNav}:any){
//     return (
//         <div className="md:flex items-center justify-around mt-2">
//             <div>
//                 <Logo></Logo>
//             </div>
//             <div className="flex flex-col md:flex-row gap-2 ml-14 mt-10 md:mt-0">
//                 <Navigation handleNav={handleNav}></Navigation>
//                 <a href="" download><button>Download CV</button></a>
//             </div>
//         </div>
//     );
// };



import Logo from "./logo/page";
import Navigation from "./nav/page";

export default function Header({ handleNav }: any) {
    return (
        <div id="home" className="md:flex items-center justify-around mt-2">
            <div>
                <Logo />
            </div>
            <div className="flex flex-col md:flex-row gap-2 ml-14 mt-10 md:mt-0">
                <Navigation handleNav={handleNav} />
                <a href="/path/to/CV.pdf" download>
                    <button>Download CV</button>
                </a>
            </div>
        </div>
    );
}
