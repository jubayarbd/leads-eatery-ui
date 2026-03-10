import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative h-[760px] bg-[url('/images/hero-bg.jpg')] bg-cover bg-center overflow-hidden max-lg:h-auto max-lg:min-h-screen max-lg:py-32 max-md:flex max-md:flex-col max-md:justify-center max-md:py-24 max-md:items-center">

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* orbit circles */}
            <div className="absolute w-[1350px] h-[1350px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:w-[800px] max-lg:h-[800px] max-md:w-[500px] max-md:h-[500px] max-md:hidden"></div>

            <div className="absolute w-[930px] h-[930px] border border-white/15 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:w-[600px] max-lg:h-[600px] max-md:w-[400px] max-md:h-[400px] max-md:hidden"></div>

            <Container>

                {/* center content */}
                <div className="relative flex flex-col items-center justify-center text-center text-white h-[900px] max-w-[650px] mx-auto z-10 max-lg:h-auto max-lg:mx-0 max-lg:w-1/2 max-lg:items-start max-lg:text-left max-md:w-full max-md:items-center max-md:text-center">

                    <h1 className="text-[75px] font-semibold leading-none tracking-[12px] max-lg:text-[50px] max-lg:tracking-[10px] max-md:text-[45px] max-sm:text-[36px] max-sm:tracking-[6px]">
                        MAKE YOUR
                    </h1>

                    <p className="mt-6 text-[20px] tracking-[10px] text-white/90 max-lg:text-[16px] max-lg:tracking-[6px] max-sm:text-[14px] max-sm:tracking-[4px] max-md:mt-4">
                        DINING IN LONDON EXTRAORDINARY
                    </p>

                    <div className="mt-8 max-md:mt-6">
                        <button className="flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 max-sm:px-4 max-sm:py-2 max-sm:text-sm">

                            <span className="bg-white text-primary rounded-full p-1 max-sm:p-0.5">
                                <ArrowRight size={16} className="max-sm:w-3 max-sm:h-3" />
                            </span>

                            GET 25% OFF

                        </button>
                    </div>
                    <div className="flex gap-8 mt-8 text-sm text-white/90 max-md:flex-row max-md:gap-6 max-sm:flex-col max-sm:gap-3 max-md:mt-6">

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

            {/* Dishes Wrapper */}
            <div className="absolute inset-0 pointer-events-none z-10 max-lg:left-auto max-lg:right-0 max-lg:w-1/2 max-lg:flex max-lg:flex-wrap max-lg:items-center max-lg:justify-center max-lg:gap-6 max-lg:p-10 max-md:relative max-md:w-full max-md:p-4 max-md:mt-12 max-sm:gap-4 max-lg:h-full max-md:hidden">

                {/* Dish 1 */}
                <div className="absolute left-10 top-[320px] pointer-events-auto max-lg:static max-lg:transform-none">
                    <div className="relative bg-white rounded-2xl p-3 shadow-xl max-lg:scale-90 max-sm:scale-75 max-lg:p-2">
                        <Image src="/images/dish1.png" width={120} height={120} alt="paneer" className="max-lg:w-20 max-lg:h-auto" />
                        <span className="absolute -right-12 top-10 bg-white px-3 py-1 text-xs rounded-full shadow text-black max-lg:-right-6 max-lg:top-6 max-lg:text-[10px] max-lg:px-2 max-lg:py-0.5 whitespace-nowrap">
                            PANEER
                        </span>
                    </div>
                </div>

                {/* Dish 2 */}
                <div className="absolute left-[280px] top-[140px] pointer-events-auto max-lg:static max-lg:transform-none">
                    <div className="relative bg-white rounded-2xl p-3 shadow-xl max-lg:scale-90 max-sm:scale-75 max-lg:p-2">
                        <Image src="/images/dish2.png" width={120} height={120} alt="king prawn" className="max-lg:w-20 max-lg:h-auto" />
                        <span className="absolute -left-16 top-10 bg-white px-3 py-1 text-xs rounded-full shadow text-black max-lg:-left-8 max-lg:top-6 max-lg:text-[10px] max-lg:px-2 max-lg:py-0.5 whitespace-nowrap">
                            KING PRAWN
                        </span>
                    </div>
                </div>

                {/* Dish 3 */}
                <div className="absolute left-[300px] bottom-[80px] pointer-events-auto max-lg:static max-lg:transform-none">
                    <div className="relative bg-white rounded-2xl p-3 shadow-xl max-lg:scale-90 max-sm:scale-75 max-lg:p-2">
                        <Image src="/images/dish3.png" width={120} height={120} alt="prawn" className="max-lg:w-20 max-lg:h-auto" />
                        <span className="absolute -right-12 top-10 bg-white px-3 py-1 text-xs rounded-full shadow text-black max-lg:-right-6 max-lg:top-6 max-lg:text-[10px] max-lg:px-2 max-lg:py-0.5 whitespace-nowrap">
                            PRAWN
                        </span>
                    </div>
                </div>

                {/* Dish 4 (Vegetable) */}
                <div className="absolute right-[270px] top-[160px] pointer-events-auto max-lg:static max-lg:transform-none">
                    <div className="relative bg-white rounded-2xl p-3 shadow-xl max-lg:scale-90 max-sm:scale-75 max-lg:p-2">
                        <Image src="/images/dish4.png" width={120} height={120} alt="vegetable" className="max-lg:w-20 max-lg:h-auto" />
                        <span className="absolute -left-16 top-8 bg-white px-3 py-1 text-xs rounded-full shadow text-black max-lg:-left-8 max-lg:top-6 max-lg:text-[10px] max-lg:px-2 max-lg:py-0.5 whitespace-nowrap">
                            VEGETABLE
                        </span>
                    </div>
                </div>

                {/* Dish 5 */}
                <div className="absolute right-10 top-[330px] pointer-events-auto max-lg:static max-lg:transform-none">
                    <div className="relative bg-white rounded-2xl p-3 shadow-xl max-lg:scale-90 max-sm:scale-75 max-lg:p-2">
                        <Image src="/images/dish5.png" width={120} height={120} alt="chicken" className="max-lg:w-20 max-lg:h-auto" />
                        <span className="absolute -left-12 top-10 bg-white px-3 py-1 text-xs rounded-full shadow text-black max-lg:-left-6 max-lg:top-6 max-lg:text-[10px] max-lg:px-2 max-lg:py-0.5 whitespace-nowrap">
                            CHICKEN
                        </span>
                    </div>
                </div>

                {/* Dish 6 */}
                <div className="absolute right-[260px] bottom-[100px] pointer-events-auto max-lg:static max-lg:transform-none">
                    <div className="relative bg-white rounded-2xl p-3 shadow-xl max-lg:scale-90 max-sm:scale-75 max-lg:p-2">
                        <Image src="/images/dish6.png" width={120} height={120} alt="chicken tikka" className="max-lg:w-20 max-lg:h-auto" />
                        <span className="absolute -left-16 top-10 bg-white px-3 py-1 text-xs rounded-full shadow text-black max-lg:-left-8 max-lg:top-6 max-lg:text-[10px] max-lg:px-2 max-lg:py-0.5 whitespace-nowrap">
                            CHICKEN TIKKA
                        </span>
                    </div>
                </div>

            </div>

        </section>
    )
}