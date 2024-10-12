export default function Testimonial({ experience,theme }: any) {
    const { feedback } = experience || {};

    if (!experience && !feedback) {
        return;
    }
    return (
        <>
            {
                feedback.map((feed: any, idx: any) => {
                    return (
                        <div id={`#item${idx+1}`} className="carousel-item w-full" key={idx}>
                            <div className={`${theme?'text-black':''} flex flex-col md:flex-row items-center gap-10 bg-[#F8F8F8] p-10 ml-5 mr-5 md:ml-20 md:mr-20 rounded-2xl my-20`}>
                                <img src={feed.profilePhoto} className="w-20 h-20 rounded-full" />
                                <div>
                                    <p className="font-normal text-sm md:text-base my-5"><span className="text-[#FD6F00]">"</span>{feed.feedbackMessage}<span className="text-[#FD6F00]">"</span></p>
                                    <p className="font-medium text-2xl">{feed.name}</p>
                                    <small className="my-5">{feed.roleOfUser}</small>
                                </div>
                            </div>
                        </div>


                    )
                })
            }
        </>
    )
}