import Image from "next/image";

const AppPreviewSection = ({ project }) => {
  const { images } = project;

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6 max-w-6xl flex flex-wrap gap-5 justify-center">
        {images.preview.map((preview, idx) => (
          <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
            <Image
              src={preview.src}
              alt={preview.alt}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppPreviewSection;
