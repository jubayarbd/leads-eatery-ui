import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Welcome() {
    return (
        <section className="bg-secondary py-24">

            <Container>

                <div className="grid md:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}

                    <div>

                        <h2 className="text-[52px] font-semibold leading-[1.15] tracking-[-0.5px] text-text-dark">
                            WELCOME TO LEADS
                            <br />
                            EATERY, LONDON
                        </h2>

                        <p className="mt-6 text-text-light max-w-[580px]">
                            100% Halal, top-rated Indian food, dining & takeaway in London.
                            From rich curries to flavorful grills, our chefs craft something
                            delicious for every taste.
                        </p>

                        {/* FEATURES */}

                        <div className="grid grid-cols-2 gap-5 mt-8 text-text-dark">

                            <div className="flex items-center gap-2 font-medium">
                                <span>🍽</span>
                                <p>ONLINE ORDER</p>
                            </div>

                            <div className="flex items-center gap-2 font-medium">
                                <span>🎟</span>
                                <p>SPECIAL DEALS</p>
                            </div>

                            <div className="flex items-center gap-2 font-medium">
                                <span>📅</span>
                                <p>PRE-RESERVATION</p>
                            </div>

                            <div className="flex items-center gap-2 font-medium">
                                <span>✔</span>
                                <p>100% HALAL</p>
                            </div>

                        </div>

                        {/* BUTTONS */}

                        <div className="flex gap-6 mt-10">

                            <button className="flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">

                                <span className="bg-white text-primary rounded-full p-1">
                                    <ArrowRight size={16} />
                                </span>

                                GET 25% OFF

                            </button>

                            <button className="flex items-center gap-3 border border-primary text-primary px-6 py-3 rounded-lg font-medium">

                                <span className="bg-primary text-white rounded-full p-1">
                                    <ArrowRight size={14} />
                                </span>

                                EXPLORE FEEDBACKS

                            </button>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}

                    <div className="flex justify-end mt-4">

                        <Image
                            src="/images/chef.png"
                            width={520}
                            height={420}
                            alt="chef"
                            className="rounded-3xl object-cover"
                        />

                    </div>

                </div>

            </Container>

        </section>
    )
}