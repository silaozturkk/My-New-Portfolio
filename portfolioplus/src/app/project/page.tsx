const ProjectPage = () => {
    return (
        <div>
            <h2 className="text-4xl text-center mt-10 font-bold text-black"><span className="text-pink-600">My</span> Projects</h2>
            <p className="text-center pt-4 text-lg text-neutral-800">
                A collection of projects that reflect my focus on clean design, efficient development, and meaningful digital experiences.     
            </p>
            <p className="text-center text-lg text-neutral-800">
                Each one represents a step forward in combining creativity with functionality.
            </p>
            <div className="flex px-10 gap-10 items-center justify-center py-10">
                <section className="w-1/6 bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <h2>Bilet Satış Sistemi</h2>
                    <p>Bilet Satıs sistemi açıklaması</p>
                </section>
                <section className="w-1/6 bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <h2>My Portfolio</h2>
                    <p>Portfolio açıklaması</p>
                </section>
                <section className="w-1/6 bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <h2>AutoFixParts</h2>
                    <p>AutoFixParts açıklaması</p>
                </section>
                <section className="w-1/6 bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <h2>insurance Company</h2>
                    <p>insurance Company açıklaması</p>
                </section>
                <section className="w-1/6 bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <h2>Google Docs Clone</h2>
                    <p>Google Docs Clone açıklaması</p>
                </section>
                <section className="w-1/6 bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <h2>Derslik Takip Sistemi Clone</h2>
                    <p>Derslik Takip Sistemi açıklaması</p>
                </section>
            </div>
        </div>
    );
}
export default ProjectPage;