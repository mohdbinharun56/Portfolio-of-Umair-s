

export default function Contact() {
   
    return (
        <>
            <div id="contact" className="lg:w-[900px] mx-auto my-20">
                <h1 className="text-center font-semibold text-3xl md:text-6xl">Lets Design Together</h1>
                <p className="text-center font-normal md:text-xl my-5 ml-4">Stay updated with our latest projects and offerings.</p>
                <form className="flex gap-5 lg:w-[800px] justify-center items-center mx-auto">
                    <input type="email" className="p-2 border-2 bg-[#f7f7f7] text-[#797979] md:w-[500px] rounded-xl " placeholder="Enter Your Email" required/>
                    <button className="">Contact Me</button>
                </form>
            </div>
        </>
    );
}