export default function Service({ skill }: any) {


    if (!skill) {
        return <h1>hello</h1>
    }
    console.log("Skills are", skill);
    return (
        <>
            <div>
                <div className="bg-[#F8F8F8] p-8 rounded-xl md:w-60 h-96">
                    <img src={skill.skillLogo} alt="logo" className="w-12"/>
                    <h1 className="w-fit md:text-2xl font-semibold my-5">{skill.skillTitle}</h1>
                    <p className="font-normal text-xl">{skill.description}</p>
                </div>
            </div>
        </>
    );
}