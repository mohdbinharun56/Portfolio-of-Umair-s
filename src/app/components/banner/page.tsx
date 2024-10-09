export default function Banner({informations}:any){
    const {name,title,profileImage,aboutMe} = informations;
    return(
        <>
            <div className="max-w-7xl md:flex justify-around items-center mx-auto mt-16">
                <div className="w-2/3 ml-14"> 
                    <small className="font-semibold text-2xl">Hi I am</small>
                    <h1 className="font-semibold text-3xl text-[#FD6F00]">{name}</h1>
                    <p className="w-96 font-bold text-6xl lg:text-8xl">{title?title.slice(0,7):''}</p>
                    <p className="w-96 font-bold text-6xl mx-auto md:text-8xl ">{title? title.slice(7):''}</p>
                    <p className="font-normal text-xl my-6">{aboutMe}</p>
                    <button className="w-40">Hire me</button>
                </div>
                <div className="circle mx-auto">
                    
                    <div>
                    <img src={profileImage} alt="profilePhoto" className="w-[450px] h-[450px] absolute left-1 -top-[70px] rounded-full mx-auto" />
                    <div className="w-80 h-[70px] border-1 bg-[#FD6F0099] absolute ml-8 -mt-5"></div>
                    </div>
                </div>
            </div>
        </>
    );
}