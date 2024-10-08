import Navigation from "./nav/page";

const Header = () => {
    return (
        <div className="md:flex items-center justify-around mt-2">
            <div className="flex gap-3 items-center">
                <img src="/assets/logo.png" alt="Logo" className="w-10 lg:w-12 mt-3 ml-14" />
                <h1 className="font-normal lg:text-3xl text-[#757575]"><span className="font-bold lg:text-3xl text-[#000000]">M</span>umair</h1>
            </div>
            <div>
                <Navigation></Navigation>
            </div>
        </div>
    );
};

export default Header;