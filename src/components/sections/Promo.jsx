import Container from "@/components/ui/Container"
import Image from "next/image"
import Button from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export default function Promo() {

    return (
        <section className="py-28 bg-gradient-to-b from-[#F6EDE8] to-[#F3E3DB]">

            <Container>

                <div className="grid md:grid-cols-2 gap-20 items-center">

                    {/* LEFT IMAGE AREA */}

                    <div className="relative">

                        {/* Main Image */}

                        <div className="relative bg-gradient-to-br from-[#F3E3DB] to-[#EEDAD0] p-6 rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.08)]">

                            <Image
                                src="/images/promo.png"
                                width={520}
                                height={420}
                                alt="dish"
                                className="rounded-2xl object-cover hover:scale-[1.02] transition duration-300"
                            />

                        </div>


                        {/* TOP CARD */}

                        <div className="absolute top-[-30px] left-[290px] bg-gradient-to-br from-[#FFA8AA]/80 to-[#EDEDED]/5 p-6 rounded-xl shadow-lg w-[300px] border-2 border-white/90 backdrop-blur">

                            <h4 className="font-medium text-lg text-text-dark py-2">
                                Get 25% OFF Every Time
                            </h4>

                            <p className="text-sm text-gray-600 mt-2">
                                25% on Collection when the food total is £20 or over.
                            </p>

                        </div>


                        {/* BOTTOM CARD */}

                        <div className="absolute bottom-[-10px] left-[10px] bg-gradient-to-r from-[#FFDB94]/80 to-[#EDEDED]/5 p-6 rounded-xl shadow-lg w-[300px] border-2 border-white/90 backdrop-blur">

                            <h4 className="font-medium text-lg text-text-dark py-2">
                                Get 20% OFF On Delivery
                            </h4>

                            <p className="text-sm text-gray-600 mt-2">
                                20% OFF on Delivery when the food total is £25 or over.
                            </p>

                        </div>


                        {/* SMALL DISH */}

                        <div className="absolute right-[35px] top-[50%] bg-[#FD8F2F] rounded-full p-2 shadow-lg border border-white">

                            <Image
                                src="/images/dish1.png"
                                width={70}
                                height={70}
                                alt="dish"
                                className="rounded-full"
                            />

                        </div>


                        <p className="absolute bottom-[120px] left-[480px] text-sm mt-6 text-gray-700">
                            <span className="font-semibold">*Free Onion Bhajee</span>
                            <br />
                            on orders of £30 or over.
                        </p>

                    </div>


                    {/* RIGHT CONTENT */}

                    <div>

                        <p className="text-sm text-gray-600">
                            Habit for better health! ✌
                        </p>

                        <h2 className="text-[48px] font-semibold mt-3 leading-tight text-black">
                            UNLIMITED DISCOUNTS
                            <br />
                            EVERY TIME
                        </h2>

                        <p className="text-gray-600 mt-6 max-w-[550px]">
                            A handful of nuts a day is a nutrient-packed snack! These nutrients support overall health, from heart health to immune function. Make nuts a daily habit for better health!
                        </p>

                        <p className="text-gray-600 mt-4 max-w-[550px]">
                            A handful of nuts a day is a nutrient-packed snack! These nutrients support overall health, from heart health to immune function. Make nuts a daily habit for better health!
                        </p>


                        {/* BUTTONS */}

                        <div className="flex gap-5 mt-10">

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

                                EXPLORE MENU

                            </button>

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    )
}