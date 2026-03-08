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
        <section className="py-28 bg-[#F6EDE8]">

            <Container>

                <div className="relative rounded-[40px] overflow-hidden">

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

                    <div className="relative py-24 px-10 text-center text-white max-w-[750px] mx-auto">

                        <Quote size={70} className="mx-auto opacity-80" />

                        <p className="mt-6 text-2xl leading-relaxed">
                            {testimonials[index].text}
                        </p>

                        <p className="mt-6 text-lg opacity-80">
                            {testimonials[index].name}, {testimonials[index].location}
                        </p>

                        {/* Avatar list */}

                        <div className="flex justify-center gap-3 mt-10">

                            {testimonials.map((item, i) => (
                                <Image
                                    key={i}
                                    src={item.image}
                                    width={40}
                                    height={40}
                                    alt="avatar"
                                    className={`rounded-full cursor-pointer border-2 ${i === index ? "border-white" : "border-transparent"
                                        }`}
                                    onClick={() => setIndex(i)}
                                />
                            ))}

                        </div>

                    </div>


                    {/* Arrows */}

                    <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center"
                    >
                        <ArrowRight size={18} />
                    </button>

                </div>

            </Container>

        </section>
    )
}