import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import Image from "next/image"
import { ArrowRight, ShoppingCart, TicketPercent, CalendarDays, BadgeCheck } from "lucide-react"

export default function Welcome() {
    return (
        <section className="bg-secondary py-24 max-md:py-16 max-sm:py-12">

            <Container>

                <div className="grid md:grid-cols-2 gap-20 items-center max-lg:gap-10 max-md:gap-12 max-md:flex max-md:flex-col">

                    {/* LEFT */}

                    <div className="max-md:order-1 max-md:text-center max-md:flex max-md:flex-col max-md:items-center">

                        <h2 className="text-[52px] font-semibold leading-[1.15] tracking-[-0.5px] text-text-dark max-lg:text-[42px] max-md:text-[36px] max-sm:text-[32px]">
                            WELCOME TO LEADS
                            <br className="max-sm:hidden" />
                            {' '}EATERY, LONDON
                        </h2>

                        <p className="mt-6 text-text-light max-w-[580px] max-lg:text-sm max-md:mt-4 max-sm:text-[13px]">
                            100% Halal, top-rated Indian food, dining & takeaway in London.
                            From rich curries to flavorful grills, our chefs craft something
                            delicious for every taste.
                        </p>

                        {/* FEATURES */}

                        <div className="grid grid-cols-2 gap-5 mt-8 text-text-dark max-lg:gap-3 max-lg:text-sm max-md:mt-6 max-md:w-full max-sm:gap-4 max-sm:text-[13px] max-sm:justify-items-center">

                            <div className="flex items-center gap-2 font-medium max-md:justify-center">
                                <span><ShoppingCart size={20} className="text-black" strokeWidth={2.5} /></span>
                                <p>ONLINE ORDER</p>
                            </div>

                            <div className="flex items-center gap-2 font-medium max-md:justify-center">
                                <span><TicketPercent size={20} className="text-black" strokeWidth={2.5} /></span>
                                <p>SPECIAL DEALS</p>
                            </div>

                            <div className="flex items-center gap-2 font-medium max-md:justify-center">
                                <span><CalendarDays size={20} className="text-black" strokeWidth={2.5} /></span>
                                <p>PRE-RESERVATION</p>
                            </div>

                            <div className="flex items-center gap-2 font-medium max-md:justify-center">
                                <span><BadgeCheck size={20} className="text-black" strokeWidth={2.5} /></span>
                                <p>100% HALAL</p>
                            </div>

                        </div>

                        {/* BUTTONS */}

                        <div className="flex gap-6 mt-10 max-lg:gap-4 max-lg:mt-8 max-md:w-full max-md:justify-center max-sm:flex-col max-sm:gap-4 max-sm:mt-6">

                            <button className="flex items-center justify-center gap-3 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 max-lg:px-4 max-lg:py-2.5 max-lg:text-sm max-sm:w-full">

                                <span className="bg-white text-primary rounded-full p-1 max-lg:p-0.5">
                                    <ArrowRight size={16} className="max-lg:w-3.5 max-lg:h-3.5" />
                                </span>

                                GET 25% OFF

                            </button>

                            <button className="flex items-center justify-center gap-3 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 max-lg:px-4 max-lg:py-2.5 max-lg:text-sm max-sm:w-full">

                                <span className="bg-primary text-white rounded-full p-1 max-lg:p-0.5">
                                    <ArrowRight size={14} className="max-lg:w-3 max-lg:h-3" />
                                </span>

                                EXPLORE FEEDBACKS

                            </button>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}

                    <div className="flex justify-end mt-4 max-md:order-2 max-md:justify-center max-md:w-full max-md:mt-0">

                        <Image
                            src="/images/chef.png"
                            width={520}
                            height={420}
                            alt="chef"
                            className="rounded-3xl object-cover max-lg:w-full max-lg:h-auto max-md:max-w-[400px] max-md:w-full max-sm:rounded-2xl"
                        />

                    </div>

                </div>

            </Container>

        </section>
    )
}