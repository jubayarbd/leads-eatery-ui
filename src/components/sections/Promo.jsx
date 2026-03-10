import Container from "@/components/ui/Container"
import Image from "next/image"
import Button from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export default function Promo() {

    return (
        <section className="py-28 bg-gradient-to-b from-[#F6EDE8] to-[#F3E3DB] max-md:py-16 max-sm:py-12">

            <Container>

                <div className="grid md:grid-cols-2 gap-20 items-center max-lg:gap-10 max-md:gap-12">

                    {/* LEFT IMAGE AREA */}

                    <div className="relative max-md:flex max-md:justify-center">

                        {/* Main Image */}

                        <div className="relative bg-gradient-to-br from-[#F3E3DB] to-[#EEDAD0] p-6 rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.08)] max-md:w-full max-md:max-w-[450px] max-sm:p-4">

                            <Image
                                src="/images/promo.png"
                                width={520}
                                height={420}
                                alt="dish"
                                className="rounded-2xl object-cover hover:scale-[1.02] transition duration-300 max-lg:w-full max-lg:h-auto"
                            />

                        </div>


                        {/* TOP CARD */}

                        <div className="absolute top-[-30px] left-[290px] bg-gradient-to-br from-[#FFA8AA]/80 to-[#EDEDED]/5 p-6 rounded-xl shadow-lg w-[300px] border-2 border-white/90 backdrop-blur max-lg:w-[240px] max-lg:left-auto max-lg:-right-8 max-lg:p-4 max-md:hidden">

                            <h4 className="font-medium text-lg text-text-dark py-2 max-lg:text-base max-lg:py-1">
                                Get 25% OFF Every Time
                            </h4>

                            <p className="text-sm text-gray-600 mt-2 max-lg:text-xs">
                                25% on Collection when the food total is £20 or over.
                            </p>

                        </div>


                        {/* BOTTOM CARD */}

                        <div className="absolute bottom-[-10px] left-[10px] bg-gradient-to-r from-[#FFDB94]/80 to-[#EDEDED]/5 p-6 rounded-xl shadow-lg w-[300px] border-2 border-white/90 backdrop-blur max-lg:w-[240px] max-lg:left-0 max-lg:p-4 max-md:hidden">

                            <h4 className="font-medium text-lg text-text-dark py-2 max-lg:text-base max-lg:py-1">
                                Get 20% OFF On Delivery
                            </h4>

                            <p className="text-sm text-gray-600 mt-2 max-lg:text-xs">
                                20% OFF on Delivery when the food total is £25 or over.
                            </p>

                        </div>


                        {/* SMALL DISH */}

                        <div className="absolute right-[35px] top-[50%] bg-[#FD8F2F] rounded-full p-2 shadow-lg border border-white max-lg:-right-4 max-md:hidden">

                            <Image
                                src="/images/dish1.png"
                                width={70}
                                height={70}
                                alt="dish"
                                className="rounded-full max-lg:w-[50px] max-lg:h-[50px] object-cover"
                            />

                        </div>


                        <p className="absolute bottom-[120px] left-[480px] text-sm mt-6 text-gray-700 max-lg:left-auto max-lg:-right-10 max-lg:text-xs max-md:hidden">
                            <span className="font-semibold">*Free Onion Bhajee</span>
                            <br />
                            on orders of £30 or over.
                        </p>

                    </div>


                    {/* RIGHT CONTENT */}

                    <div className="max-md:text-center max-md:flex max-md:flex-col max-md:items-center">

                        <p className="text-sm text-gray-600 max-sm:text-xs">
                            Habit for better health! ✌
                        </p>

                        <h2 className="text-[48px] font-semibold mt-3 leading-tight text-black max-lg:text-[36px] max-md:text-[32px] max-sm:text-[32px]">
                            UNLIMITED DISCOUNTS
                            <br />
                            EVERY TIME
                        </h2>

                        <p className="text-gray-600 mt-6 max-w-[550px] max-lg:text-sm max-md:mt-4 max-sm:text-[13px]">
                            A handful of nuts a day is a nutrient-packed snack! These nutrients support overall health, from heart health to immune function. Make nuts a daily habit for better health!
                        </p>

                        <p className="text-gray-600 mt-4 max-w-[550px] max-lg:text-sm max-sm:text-[13px] max-sm:mt-3">
                            A handful of nuts a day is a nutrient-packed snack! These nutrients support overall health, from heart health to immune function. Make nuts a daily habit for better health!
                        </p>


                        {/* BUTTONS */}

                        <div className="flex gap-5 mt-10 max-lg:gap-4 max-lg:mt-8 max-md:w-full max-md:justify-center max-sm:flex-col max-sm:gap-3 max-sm:mt-6">

                            <button className="flex items-center justify-center gap-3 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 max-lg:px-4 max-lg:py-2.5 max-lg:text-sm max-sm:w-full">

                                <span className="bg-white text-primary rounded-full p-1 max-lg:p-0.5">
                                    <ArrowRight size={16} className="max-lg:w-3.5 max-lg:h-3.5" />
                                </span>

                                GET 25% OFF

                            </button>

                            <button className="flex items-center justify-center gap-3 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 max-lg:px-4 max-lg:py-2.5 max-lg:text-sm max-sm:w-full">

                                <span className="bg-primary text-white rounded-full p-1 max-lg:p-0.5">
                                    <ArrowRight size={14} className="max-lg:w-3 max-lg:h-3" />
                                </span>

                                EXPLORE MENU

                            </button>

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    )
}