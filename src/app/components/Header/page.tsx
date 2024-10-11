import Logo from "./logo/page";
import Navigation from "./nav/page";

const Header = () => {
    return (
        <div className="md:flex items-center justify-around mt-2">
            <div>
                <Logo></Logo>
            </div>
            <div className="flex flex-col md:flex-row gap-2 ml-14 mt-10">
                <Navigation></Navigation>
                <a href="" download><button>Download CV</button></a>
            </div>
        </div>
    );
};

export default Header;