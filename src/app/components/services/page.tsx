import Service from "../service/page";

export default function Services({ informations,nav }: any) {

    if (!informations) {
        return <h1 className="text-center font-semibold text-blue-900">Loading...</h1>
    }
    const { skills } = informations;

    console.log(skills);

    if (!skills) {
        return <h1 className="text-6xl text-center font-semibold text-blue-900 mt-10px">Loading...</h1>
    }

    return (
        <>
            <div id="services" className="text-center my-20">
                <h1 className="font-semibold text-3xl lg:text-6xl">Services</h1>
                <p className="font-normal text-sm md:text-xl max-w-4xl mx-auto my-5 h-24">I provide a wide range of services leveraging my expertise in multiple areas of design and development. My focus is on delivering high-quality work that meets the needs of clients and enhances user experiences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center w-fit mx-auto gap-14">
                {
                    skills.map((skill: any, idx: any) => {
                        return (
                            <Service skill={skill} key={idx}></Service>
                        );
                    })
                }
            </div>
        </>
    );

}