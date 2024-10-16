export default function Project({ project, activeProject }: any) {
    console.log('Active Project:', activeProject);

    const {technology,designImage,projectName} = project || {};

    const showProject = activeProject === "All" || activeProject === technology || false;
    console.log(showProject);

    return (
        <>
            {
                showProject && (
                    <div className="w-[350px] mx-auto mt-3">
                        <div className="p-5 bg-[#FFEBDB] h-[495px] rounded-xl relative">
                            <img src={designImage} alt="Project Image" className="w-[300px] h-[400px] absolute top-24"/>
                        </div>
                        <p className="text-lg font-normal text-[#FD6F00] mt-2">{technology}</p>
                        <h1 className="w-[390px] font-bold text-2xl mt-2">{projectName}</h1>
                    </div>
                )}
        </>
    );
}