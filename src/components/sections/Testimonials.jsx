"use client"

import Container from "@/components/ui/Container"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { useState } from "react"

export default function Testimonials() {

    const testimonials = [
        {
            text: "Excellent service and the tastiest lamb vindaloo I've ever tasted! Leads Eatery is my new favourite curry restaurant.",
            name: "Finley Topping",
            location: "87b Shacklewell Ln",
            image: "/images/avatar1.jpg"
        },
        {
            text: "Amazing food and quick service. One of the best Indian restaurants in London!",
            name: "John Smith",
            location: "London",
            image: "/images/avatar2.jpg"
        },
        {
            text: "Highly recommended! The flavours are authentic and staff are very friendly.",
            name: "Oliver Brown",
            location: "UK",
            image: "/images/avatar3.jpg"
        }
    ]

    const [index, setIndex] = useState(0)

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    return (
        <section className="py-28 bg-[#F6EDE8] max-md:py-16 max-sm:py-12">

            <Container>

                <div className="relative rounded-[40px] overflow-hidden max-sm:rounded-[24px]">

                    {/* Background image */}

                    <Image
                        src="/images/testimonial-bg.png"
                        width={1200}
                        height={500}
                        alt="testimonial"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-black/10"></div>

                    {/* Content */}

                    <div className="relative py-24 px-10 text-center text-white max-w-[750px] mx-auto max-lg:px-20 max-md:py-16 max-md:px-8 max-sm:py-10 max-sm:px-4">

                        <Quote size={70} className="mx-auto opacity-80 max-md:w-12 max-md:h-12 max-sm:w-10 max-sm:h-10" />

                        <p className="mt-6 text-2xl leading-relaxed max-lg:text-xl max-md:text-lg max-sm:text-base max-sm:mt-4">
                            "{testimonials[index].text}"
                        </p>

                        <p className="mt-6 text-lg opacity-80 max-sm:text-sm max-sm:mt-4">
                            {testimonials[index].name}, {testimonials[index].location}
                        </p>

                        {/* Avatar list */}

                        <div className="flex justify-center gap-3 mt-10 max-sm:mt-6">

                            {testimonials.map((item, i) => (
                                <Image
                                    key={i}
                                    src={item.image}
                                    width={40}
                                    height={40}
                                    alt="avatar"
                                    className={`rounded-full cursor-pointer border-2 max-sm:w-8 max-sm:h-8 ${i === index ? "border-white" : "border-transparent"
                                        }`}
                                    onClick={() => setIndex(i)}
                                />
                            ))}

                        </div>

                        {/* Arrows for Mobile (moved inside content area at bottom) */}
                        <div className="hidden max-md:flex justify-center gap-4 mt-8">
                            <button
                                onClick={prevSlide}
                                className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center transition max-sm:w-8 max-sm:h-8"
                            >
                                <ArrowLeft size={18} className="max-sm:w-4 max-sm:h-4" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center transition max-sm:w-8 max-sm:h-8"
                            >
                                <ArrowRight size={18} className="max-sm:w-4 max-sm:h-4" />
                            </button>
                        </div>

                    </div>


                    {/* Arrows for Desktop/Tablet (absolute positioned) */}

                    <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center max-md:hidden"
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center max-md:hidden"
                    >
                        <ArrowRight size={18} />
                    </button>

                </div>

            </Container>

        </section>
    )
}