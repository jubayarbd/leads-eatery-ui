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
        <section className="bg-secondary py-24 max-md:py-16 max-sm:py-12">

            <Container>

                {/* Title */}

                <div className="text-center max-w-[700px] mx-auto max-sm:px-4">

                    <h2 className="text-[52px] font-semibold leading-[1.15] tracking-[-0.5px] text-text-dark max-lg:text-[42px] max-md:text-[36px] max-sm:text-[32px]">
                        OUR CATEGORIES
                    </h2>

                    <p className="mt-4 text-gray-600 max-sm:text-sm">
                        From rich curries to flavorful grills, our chefs craft something
                        delicious for every taste.
                    </p>

                </div>


                {/* Grid */}

                <div className="grid grid-cols-4 gap-8 mt-16 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-6 max-sm:gap-4 max-md:mt-10">

                    {categories.map((item, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-2 text-center hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 max-sm:w-full max-sm:mx-auto max-sm:max-w-[340px]"
                        >

                            {/* Image box */}

                            <div className={`${item.color} rounded-xl p-8 flex justify-center max-sm:p-6`}>

                                <Image
                                    src="/images/dish9.png"
                                    width={120}
                                    height={120}
                                    alt="category"
                                    className="max-sm:w-24 max-sm:h-24 object-contain"
                                />

                            </div>


                            {/* Title */}

                            <h3 className="mt-6 font-medium text-lg text-black max-sm:mt-4 max-sm:text-base">
                                {item.title}
                            </h3>


                            {/* Items */}

                            <div className="flex justify-center items-center gap-2 mt-2 text-primary text-sm p-2 max-sm:text-xs">

                                <span className="bg-primary text-white rounded-full p-z max-sm:p-0.5">
                                    <ArrowRight size={12} className="max-sm:w-3 max-sm:h-3" />
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