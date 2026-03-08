import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative h-[760px] bg-[url('/images/hero-bg.jpg')] bg-cover bg-center overflow-hidden">

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* orbit circles */}

            <div className="absolute w-[1350px] h-[1350px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="absolute w-[930px] h-[930px] border border-white/15 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>


            <Container>

                {/* center content */}

                <div className="relative flex flex-col items-center justify-center text-center text-white h-[900px] max-w-[650px] mx-auto">

                    <h1 className="text-[75px] font-semibold leading-none tracking-[14px]}">
                        MAKE YOUR
                    </h1>

                    <p className="mt-6 text-[20px] tracking-[10px] text-white/90">
                        DINING IN LONDON EXTRAORDINARY
                    </p>

                    <div className="mt-8">
                        <button className="flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">

                            <span className="bg-white text-primary rounded-full p-1">
                                <ArrowRight size={16} />
                            </span>

                            GET 25% OFF

                        </button>
                    </div>
                    <div className="flex gap-8 mt-8 text-sm text-white/90">

                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} />
                            100% Halal
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} />
                            Indian Food
                        </div>

                    </div>

                </div>

            </Container>


            {/* Dish 1 */}

            <div className="absolute left-10 top-[320px]">
                <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                    <Image src="/images/dish1.png" width={120} height={120} alt="paneer" />
                    <span className="absolute -right-12 top-10 bg-white px-3 py-1 text-xs rounded-full shadow text-black">
                        PANEER
                    </span>
                </div>
            </div>


            {/* Dish 2 */}

            <div className="absolute left-[280px] top-[140px]">
                <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                    <Image src="/images/dish2.png" width={120} height={120} alt="king prawn" />
                    <span className="absolute -left-16 top-10 bg-white px-3 py-1 text-xs rounded-full shadow text-black">
                        KING PRAWN
                    </span>
                </div>
            </div>


            {/* Dish 3 */}

            <div className="absolute left-[300px] bottom-[80px]">
                <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                    <Image src="/images/dish3.png" width={120} height={120} alt="prawn" />
                    <span className="absolute -right-12 top-10 bg-white px-3 py-1 text-xs rounded-full shadow text-black">
                        PRAWN
                    </span>
                </div>
            </div>


            {/* Dish 4 (Vegetable) */}

            <div className="absolute right-[270px] top-[160px]">
                <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                    <Image src="/images/dish4.png" width={120} height={120} alt="vegetable" />
                    <span className="absolute -left-16 top-8 bg-white px-3 py-1 text-xs rounded-full shadow text-black">
                        VEGETABLE
                    </span>
                </div>
            </div>


            {/* Dish 5 */}

            <div className="absolute right-10 top-[330px]">
                <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                    <Image src="/images/dish5.png" width={120} height={120} alt="chicken" />
                    <span className="absolute -left-12 top-10 bg-white px-3 py-1 text-xs rounded-full shadow text-black">
                        CHICKEN
                    </span>
                </div>
            </div>


            {/* Dish 6 */}

            <div className="absolute right-[260px] bottom-[100px]">
                <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                    <Image src="/images/dish6.png" width={120} height={120} alt="chicken tikka" />
                    <span className="absolute -left-16 top-10 bg-white px-3 py-1 text-xs rounded-full shadow text-black">
                        CHICKEN TIKKA
                    </span>
                </div>
            </div>

        </section>
    )
}