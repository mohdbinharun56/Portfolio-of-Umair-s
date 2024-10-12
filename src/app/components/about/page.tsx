
export default function About({ informations }: any) {
    const { aboutMe } = informations || {};
    return (
        <>
            <div id="about" className="mt-20 flex flex-col-reverse md:flex-row justify-center items-center gap-20 ">
                <div className="mt-20">
                    <div className="circle  w-52 h-52 lg:w-96 lg:h-96 rounded-full relative">
                        <div>
                            {
                                aboutMe ? aboutMe.map((about: { image: any },idx:any) => <img key={idx} src={about.image} className="w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] absolute left-1 -top-[70px] rounded-full mx-auto"></img>) : ''
                            }
                            <div className="w-40 h-8 lg:w-80 lg:h-[70px] border-1 bg-[#FD6F0099] absolute ml-8 -mt-5"></div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="w-fit text-3xl mx-auto mb-5 lg:w-80 font-semibold lg:text-6xl">About Me</h1>
                    <div>
                        {
                            aboutMe ? aboutMe.map((about: { description: any },idx:any) => <p key={idx} className="ml-5 mb-5 text-sm text-center lg:max-w-3xl md:text-start md:text-lg">{about.description}</p>) : ''
                        }
                    </div>
                    <small className="ml-4 font-semibold text-lg md:text-2xl">UX</small>
                    <div className="my-5 ml-4 relative">
                        <div className="w-full md:w-[25rem] lg:w-[44rem] h-[1rem] bg-[#EDECEC] rounded-lg">
                            <div className="w-[18rem] md:w-[20rem] lg:w-[30rem] h-[1rem] bg-[#FD6F00] rounded-lg">
                                <div className="absolute w-6 h-6 md:w-8 md:h-8 bg-[#EDECEC] border-2 border-solid border-[#FD6F00] rounded-full -top-[6px] md:-top-[8px] left-[270px] md:left-[290px] lg:left-[470px] shadow-inner"></div>
                            </div>
                        </div>
                    </div>

                    <small className="ml-4 font-semibold text-lg md:text-2xl">Website Design</small>
                    <div className="my-5 ml-4 relative">
                        <div className="w-full md:w-[25rem] lg:w-[44rem] h-[1rem] bg-[#EDECEC] rounded-lg">
                            <div className="w-[14rem] md:w-[15rem] lg:w-[25rem] h-[1rem] bg-[#FD6F00] rounded-lg">
                                <div className="absolute w-6 h-6 md:w-8 md:h-8 bg-[#EDECEC] border-2 border-solid border-[#FD6F00] rounded-full -top-[6px] md:-top-[8px] left-[200px] md:left-[210px] lg:left-[370px] shadow-inner"></div>
                            </div>
                        </div>
                    </div>

                    <small className="ml-4 font-semibold text-lg md:text-2xl">App Design</small>
                    <div className="my-5 ml-4 relative">
                        <div className="w-full md:w-[25rem] lg:w-[44rem] h-[1rem] bg-[#EDECEC] rounded-lg">
                            <div className="w-[24rem] md:w-[20rem] lg:w-[40rem] h-[1rem] bg-[#FD6F00] rounded-lg">
                                <div className="absolute w-6 h-6 md:w-8 md:h-8 bg-[#EDECEC] border-2 border-solid border-[#FD6F00] rounded-full -top-[6px] md:-top-[8px] left-[360px] lg:left-[630px] md:left-[290px]  shadow-inner"></div>
                            </div>
                        </div>
                    </div>

                    <small className="ml-4 font-semibold text-lg md:text-2xl">Graphic Design</small>
                    <div className="my-5 ml-4 relative">
                        <div className="w-full md:w-[25rem] lg:w-[44rem] h-[1rem] bg-[#EDECEC] rounded-lg">
                            <div className="w-[18rem] md:w-[15rem] lg:w-[30rem] h-[1rem] bg-[#FD6F00] rounded-lg">
                                <div className="absolute w-6 h-6 md:w-8 md:h-8 bg-[#EDECEC] border-2 border-solid border-[#FD6F00] rounded-full -top-[6px] md:-top-[8px] left-[270px] md:left-[210px] lg:left-[470px] shadow-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
