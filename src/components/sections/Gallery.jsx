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
        <section className="py-28 bg-secondary">

            <Container>

                {/* TOP */}

                <div className="text-center">

                    <span className="bg-primary text-white px-5 py-2 rounded-full text-lg tracking-[3px]">
                        GALLERY
                    </span>

                    <h2 className="text-[52px] font-semibold text-primary mt-6 tracking-[8px]">
                        EXPLORE EXPERIENCE
                    </h2>

                </div>


                {/* IMAGES */}

                <div className="grid grid-cols-5 gap-8 mt-16">

                    {images.map((img, index) => (

                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl"
                        >

                            <Image
                                src={img}
                                alt="gallery"
                                width={400}
                                height={400}
                                className="w-full h-[260px] object-cover hover:scale-110 transition duration-500"
                            />

                        </div>

                    ))}

                </div>

            </Container>

        </section>
    )
}