const ProjectPage = () => {
    return (
        <div className="px-2 lg:px-10 2xl:px-28 md:pb-4 lg:pb-8">
            <h2 className="text-4xl text-center mt-10 font-bold text-black"><span className="text-pink-600">My</span> Projects</h2>
            <p className="text-center pt-4 text-lg text-neutral-800">
                A collection of projects that reflect my focus on clean design, efficient development, and meaningful digital experiences.     
            </p>
            <p className="text-center text-lg text-neutral-800">
                Each one represents a step forward in combining creativity with functionality.
            </p>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 md:px-10 gap-10 items-center justify-center py-10">
                <section className="bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="biletSatisSistemi.png"
                        alt="biletSatisSistemi Görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    ></img>
                    <h2>Bilet Satış Sistemi</h2>
                    <p>Bilet Satıs sistemi açıklaması</p>
                    <button>Detayları Gör</button>
                </section>
                <section className="bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="my-portfolio.png"
                        alt="my-portfolio görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2>My Portfolio</h2>
                    <p>Portfolio açıklaması</p>
                    <button>Detayları Gör</button>
                </section>
                <section className=" bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="AutoFixPartsGörseli.png"
                        alt="AutoFixParts Görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2>AutoFixParts</h2>
                    <p>AutoFixParts açıklaması</p>
                    <button>Detayları Gör</button>
                </section>
                <section className=" bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="insurance Company görseli.png"
                        alt="insurance Company görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2>insurance Company</h2>
                    <p>insurance Company açıklaması</p>
                    <button>Detayları Gör</button>
                </section>
                <section className=" bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="Google Docs Clone.png"
                        alt="Google Docs Clone görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl"
                    >
                    </img>
                    <h2>Google Docs Clone</h2>
                    <p>Google Docs Clone açıklaması</p>
                    <button>Detayları Gör</button>
                </section>
                <section className=" bg-white text-center justify-center items-center shadow-2xl rounded-2xl">
                    <img
                        src="derslikTakipSistemi.png"
                        alt="Derslik Takip Sistemi Görseli"
                        className="w-full h-40 md:h-60 lg:h-72 2xl:h-80 rounded-t-2xl" 
                    >
                    </img>
                    <h2>Derslik Takip Sistemi Clone</h2>
                    <p>Derslik Takip Sistemi açıklaması</p>
                    <button>Detayları Gör</button>
                </section>
            </div>
        </div>
    );
}
export default ProjectPage;