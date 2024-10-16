export default function Logo({theme}:any) {
    return (
        <>
            <div className="flex gap-2 items-center">
                <img src="/assets/logo.png" alt="Logo" className="w-8 h-8 rounded-full lg:w-12 lg:h-12 mt-3 ml-14" />
                <h1 className={`font-normal lg:text-3xl text-[#757575]`}><span className={`${theme?'text-[#FBFBFB]':'text-[#000000]'} font-bold lg:text-3xl `}>M</span>umair</h1>
            </div>
        </>
    )
}