import Logo from "../Header/logo/page";
import Navigation from "../Header/nav/page";

export default function Footer({handleNav,theme}:any) {
    return (
        <>
            <div className={`${theme?'bg-[#1E1E1E]':'bg-[#F8F8F8]'} p-20 mt-20`}>
                <div className="mx-auto w-fit">
                    <div className="mx-auto w-fit my-10">
                        <Logo theme={theme}></Logo>
                    </div>
                    <div className="ml-20 my-10">
                        <Navigation handleNav={handleNav}></Navigation>
                    </div>
                </div>

                <div className="flex gap-14 justify-center items-center mt-20">
                    <a href="https://facebook.com" target="_blank" className=" hover:text-[#FD6F0099] transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                            style={{ cursor: "pointer" }}>
                            <path
                                d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495v-9.294h-3.128v-3.622h3.128V8.411c0-3.1 1.892-4.787 4.659-4.787 1.324 0 2.462.098 2.795.142v3.239h-1.917c-1.504 0-1.794.714-1.794 1.761v2.311h3.587l-.467 3.622h-3.12V24h6.117c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.406 0 22.676 0z" />
                        </svg>
                    </a>

                    <a href="https://twitter.com" target="_blank" className=" hover:text-[#FD6F0099] transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                            style={{ cursor: "pointer" }}>
                            <path
                                d="M23.953 4.57a10.004 10.004 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.724 9.864 9.864 0 0 1-3.127 1.184 4.916 4.916 0 0 0-8.384 4.482 13.978 13.978 0 0 1-10.15-5.14 4.822 4.822 0 0 0-.664 2.475 4.92 4.92 0 0 0 2.188 4.1 4.903 4.903 0 0 1-2.228-.616v.06a4.927 4.927 0 0 0 3.946 4.829 4.952 4.952 0 0 1-2.224.085 4.931 4.931 0 0 0 4.604 3.417A9.867 9.867 0 0 1 1.187 20.28a13.957 13.957 0 0 0 7.548 2.212c9.142 0 14.307-7.721 14.307-14.422 0-.219-.005-.437-.014-.654A10.243 10.243 0 0 0 24 4.59a9.937 9.937 0 0 1-2.847.782 4.92 4.92 0 0 0 2.163-2.724z" />
                        </svg>
                    </a>


                    <a href="https://instagram.com" target="_blank" className=" hover:text-[#FD6F0099] transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                            style={{ cursor: "pointer" }}>
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.315 3.608 1.29.975.975 1.228 2.242 1.29 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.315 2.633-1.29 3.608-.975.975-2.242 1.228-3.608 1.29-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.315-3.608-1.29-.975-.975-1.228-2.242-1.29-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.315-2.633 1.29-3.608.975-.975 2.242-1.228 3.608-1.29C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.015 7.052.072 5.771.13 4.732.308 3.867.877c-.865.568-1.548 1.252-2.116 2.116C.308 4.732.13 5.771.072 7.052.015 8.332 0 8.741 0 12s.015 3.668.072 4.948c.058 1.281.236 2.32.805 3.185.568.865 1.252 1.548 2.116 2.116.865.568 1.904.746 3.185.805C8.332 23.985 8.741 24 12 24s3.668-.015 4.948-.072c1.281-.058 2.32-.236 3.185-.805.865-.568 1.548-1.252 2.116-2.116.568-.865.746-1.904.805-3.185C23.985 15.668 24 15.259 24 12s-.015-3.668-.072-4.948c-.058-1.281-.236-2.32-.805-3.185-.568-.865-1.252-1.548-2.116-2.116-.865-.568-1.904-.746-3.185-.805C15.668.015 15.259 0 12 0zm0 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.163a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.755-10.601a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                        </svg>
                    </a>

                    <a href="https://linkedin.com" target="_blank" className="hover:text-[#FD6F0099]  transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                            style={{ cursor: "pointer" }}>
                            <path
                                d="M19.667 3H4.333C3.6 3 3 3.6 3 4.333v15.334C3 20.4 3.6 21 4.333 21h15.334C20.4 21 21 20.4 21 19.667V4.333C21 3.6 20.4 3 19.667 3zM8.5 18.5H6V9.75h2.5v8.75zm-1.25-10.042c-.802 0-1.458-.656-1.458-1.458 0-.802.656-1.458 1.458-1.458.802 0 1.458.656 1.458 1.458 0 .802-.656 1.458-1.458 1.458zM18.5 18.5h-2.5v-4.167c0-1.11-.945-2.042-2.042-2.042H12v6.25H9.5V9.75H12v1.042c.625-.9 2.012-1.875 3.333-1.875 2.25 0 3.167 1.708 3.167 4.167V18.5z" />
                        </svg>
                    </a>

                </div>
            </div>

            <div className={`${theme?'bg-[#121212]':'bg-[#545454]'} flex justify-center p-3 text-white`}>
                <small className="md:font-bold md:text-xl">© 2023 <span className="text-[#FD6F00]">Mumair</span> All Rights Reserved , Inc.</small>
            </div>
            
        </>
    );
}