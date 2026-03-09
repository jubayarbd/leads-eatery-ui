import Container from "@/components/ui/Container"
import Image from "next/image"

export default function Gallery() {

    const images = [
        "/images/gallery1.jpg",
        "/images/gallery2.jpg",
        "/images/gallery3.jpg",
        "/images/gallery4.jpg",
        "/images/gallery5.jpg",
    ]

    return (
        <section className="py-28 bg-secondary max-md:py-16 max-sm:py-12">

            <Container>

                {/* TOP */}

                <div className="text-center">

                    <span className="bg-primary text-white px-5 py-2 rounded-full text-lg tracking-[3px] max-lg:text-base max-lg:px-4 max-sm:text-sm max-sm:tracking-[2px]">
                        GALLERY
                    </span>

                    <h2 className="text-[52px] font-semibold text-primary mt-6 tracking-[8px] max-lg:text-[40px] max-lg:tracking-[6px] max-md:text-[32px] max-md:tracking-[4px] max-sm:text-[24px] max-sm:tracking-[2px] max-sm:mt-4">
                        EXPLORE EXPERIENCE
                    </h2>

                </div>


                {/* IMAGES */}

                <div className="grid grid-cols-5 gap-8 mt-16 max-lg:grid-cols-3 max-lg:gap-6 max-md:grid-cols-2 max-md:gap-4 max-sm:mt-10 max-md:mx-auto">

                    {images.map((img, index) => (

                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl w-full"
                        >

                            <Image
                                src={img}
                                alt="gallery"
                                width={400}
                                height={400}
                                className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-500 max-lg:h-[220px] max-md:h-[200px] max-sm:h-[160px]"
                            />

                        </div>

                    ))}

                </div>

            </Container>

        </section>
    )
}