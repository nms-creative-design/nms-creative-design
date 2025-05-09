import Image from "next/image";


const ProjectDetails = ({project}) => {
    const {typeFace, colorPalette, images} = project
    return (
        <section className="bg-black py-24">
            <div className="container mx-auto px-6 max-w-6xl flex flex-col gap-16">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="relative h-fit">
                    <div className="h-[64px] w-[64px] rounded-full absolute bottom-0 left-[-24px]" style={{ background: colorPalette[0]}}></div>
                        <p className={`${typeFace} capitalize`}>{typeFace}</p>
                        <p className={`${typeFace} text-[200px] relative leading-none z-10`}>Aa</p>
                        
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className={`${typeFace} mb-3`}>
                            <p>Regular</p>
                            <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptentAa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                        <div className={`${typeFace} mb-3`}>
                            <p className="font-medium">Medium</p>
                            <p className="font-medium">Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptentAa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                        <div className={`${typeFace} mb-3`}>
                            <p className="font-bold">Bold</p>
                            <p className="font-bold">Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptentAa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        </div>
                    </div>
                </div>

                {/*Color Palette */}
                <div className="flex flex-col md:flex-row gap-5">
                    {colorPalette.map((color) => {
                        return (
                            <div
                            className="h-[64px] flex-1 rounded-sm"
                            style={{ background: color }}
                          ></div>
                        )
                    })}
                </div>

                {/*l Preview */}
                <div className="flex flex-col md:flex-row gap-5">
                {images.logo.map((logo) => {
                    return (
                        <div>
                            <Image className="flex-1"
                            src={logo.src}
                            alt={logo.alt}
                            width={600}
                            height={200}
                            />
                        </div>
                    );
                })}
                </div>

            </div>
        </section>
    );
};

export default ProjectDetails;