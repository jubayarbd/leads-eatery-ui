"use client"

import Container from "@/components/ui/Container"
import SectionTitle from "@/components/ui/SectionTitle"
import DishCard from "@/components/ui/DishCard"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useRef } from "react"

export default function PopularDishes() {

    const dishes = [
        { image: "/images/dish1.png", title: "PLATTER FOR VEG", price: "£14.95" },
        { image: "/images/chicken.png", title: "KING PRAWN", price: "£16.95" },
        { image: "/images/dish7.png", title: "PRAWN SPECIAL", price: "£17.95" },
        { image: "/images/dish4.png", title: "VEGETABLE SAMOSA", price: "£12.95" },
        { image: "/images/dish5.png", title: "CHICKEN GRILL", price: "£18.95" },
        { image: "/images/dish6.png", title: "CHICKEN TIKKA", price: "£19.95" },
        { image: "/images/dish7.png", title: "LAMB CURRY", price: "£20.95" },
        { image: "/images/dish8.png", title: "BIRYANI SPECIAL", price: "£21.95" }
    ]

    const sliderRef = useRef(null)

    const scrollLeft = () => {
        if (!sliderRef.current) return
        sliderRef.current.scrollBy({
            left: -320,
            behavior: "smooth",
        })
    }

    const scrollRight = () => {
        if (!sliderRef.current) return
        sliderRef.current.scrollBy({
            left: 320,
            behavior: "smooth",
        })
    }

    return (
        <section className="bg-secondary py-24 max-md:py-16 max-sm:py-12">

            <Container>

                {/* title */}

                <div className="flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-6">

                    <SectionTitle
                        title="OUR POPULAR DISHES"
                        subtitle="100% Halal, top-rated Indian food, dining & takeaway in London. From rich curries to flavorful grills, our chefs craft something delicious for every taste."
                    />

                    <div className="flex items-center gap-4 bg-white p-1 rounded-full shadow max-md:self-end">

                        <button
                            onClick={scrollLeft}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-white"
                        >
                            <ArrowLeft size={16} />
                        </button>

                        <button
                            onClick={scrollRight}
                            className="w-7 h-7 flex items-center justify-center rounded-full bg-primary text-white"
                        >
                            <ArrowRight size={16} />
                        </button>

                    </div>

                </div>


                {/* cards */}

                <div
                    ref={sliderRef}
                    className="mt-12 flex gap-6 overflow-x-auto pb-4 no-scrollbar max-md:gap-4 max-sm:gap-3 max-md:mt-8"
                >

                    {dishes.map((dish, index) => (
                        <DishCard
                            key={index}
                            image={dish.image}
                            title={dish.title}
                            price={dish.price}
                        />
                    ))}

                </div>

            </Container>

        </section>
    )
}