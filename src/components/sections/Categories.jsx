import Container from "@/components/ui/Container"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Categories() {

    const categories = [
        { title: "Papadom And Dips", color: "bg-[#FFE2D3]" },
        { title: "Papadom And Dips", color: "bg-[#D3E2FF]" },
        { title: "Papadom And Dips", color: "bg-[#EEFFD3]" },
        { title: "Papadom And Dips", color: "bg-[#FFD3D4]" },
        { title: "Papadom And Dips", color: "bg-[#FFFED3]" },
        { title: "Papadom And Dips", color: "bg-[#D3F2FF]" },
        { title: "Papadom And Dips", color: "bg-[#F4D3FF]" },
        { title: "Papadom And Dips", color: "bg-[#D3E2FF]" },
    ]

    return (
        <section className="bg-secondary py-24">

            <Container>

                {/* Title */}

                <div className="text-center max-w-[700px] mx-auto">

                    <h2 className="text-[52px] font-semibold leading-[1.15] tracking-[-0.5px] text-text-dark">
                        OUR CATEGORIES
                    </h2>

                    <p className="mt-4 text-gray-600">
                        From rich curries to flavorful grills, our chefs craft something
                        delicious for every taste.
                    </p>

                </div>


                {/* Grid */}

                <div className="grid grid-cols-4 gap-8 mt-16">

                    {categories.map((item, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-2 text-center hover:-translate-y-2 transition"
                        >

                            {/* Image box */}

                            <div className={`${item.color} rounded-xl p-8 flex justify-center`}>

                                <Image
                                    src="/images/dish9.png"
                                    width={120}
                                    height={120}
                                    alt="category"
                                />

                            </div>


                            {/* Title */}

                            <h3 className="mt-6 font-medium text-lg text-black">
                                {item.title}
                            </h3>


                            {/* Items */}

                            <div className="flex justify-center items-center gap-2 mt-2 text-primary text-sm p-2">

                                <span className="bg-primary text-white rounded-full p-z">
                                    <ArrowRight size={12} />
                                </span>

                                <span>+15 Items</span>

                            </div>

                        </div>

                    ))}

                </div>

            </Container>

        </section>
    )
}