export default function Logo() {
    return (
        <>
            <div className="flex gap-3 items-center">
                <img src="/assets/logo.png" alt="Logo" className="w-8 h-8 rounded-full lg:w-12 lg:h-12 mt-3 ml-14" />
                <h1 className="font-normal lg:text-3xl text-[#757575]"><span className="font-bold lg:text-3xl text-[#000000]">M</span>umair</h1>
            </div>
        </>
    )
}