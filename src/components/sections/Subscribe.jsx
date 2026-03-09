import Container from "@/components/ui/Container"
import Image from "next/image"

export default function Subscribe() {
    return (
        <section className="py-32 bg-secondary overflow-hidden max-md:py-16 max-sm:py-12">

            <Container>

                <div className="grid md:grid-cols-2 gap-0 items-center max-md:gap-12">

                    {/* LEFT CONTENT */}

                    <div className="max-md:text-center max-md:flex max-md:flex-col max-md:items-center">

                        <h2 className="text-[48px] font-semibold leading-tight text-black max-lg:text-[36px] max-md:text-[32px] max-sm:text-[32px]">
                            SUBSCRIBE FOR FREE &
                            <br />
                            WIN UNLIMITED
                        </h2>

                        <p className="text-gray-600 mt-6 max-w-[420px] leading-relaxed max-sm:text-[13px] max-sm:mt-4 max-sm:max-w-full">
                            Excellent service and the tastiest lamb vindaloo I've ever tasted!
                            Leads Eatery is my new favourite curry restaurant, and I heartily
                            suggest it.
                        </p>


                        {/* EMAIL INPUT */}

                        <div className="flex items-center mt-10 w-[520px] bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.08)] overflow-hidden max-lg:w-full max-sm:flex-col max-sm:rounded-2xl max-sm:bg-transparent max-sm:shadow-none max-sm:mt-6 max-sm:w-full max-sm:gap-3">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 outline-none text-sm placeholder-gray-400 bg-transparent max-sm:w-full max-sm:bg-white max-sm:rounded-full max-sm:shadow-[0_4px_15px_rgba(0,0,0,0.05)] max-sm:py-3.5 max-sm:text-center"
                            />

                            <button className="bg-primary text-white px-8 py-2 rounded-full mr-2 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 max-sm:w-full max-sm:mr-0 max-sm:py-3 max-sm:shadow-md">
                                SUBSCRIBE
                            </button>

                        </div>

                    </div>


                    {/* RIGHT IMAGE AREA */}

                    <div className="relative flex justify-center overflow-visible">

                        {/* BACKGROUND SHAPE */}
                        {/* 
                        <div className="absolute w-[520px] h-[320px] bg-[#E8E1DC] rounded-[40px]"></div> */}


                        {/* MAIN IMAGE */}

                        <div className="relative p-8 max-sm:p-4">

                            <Image
                                src="/images/gift.png"
                                width={320}
                                height={320}
                                alt="gift"
                                className="max-lg:w-[280px] max-lg:h-[280px] max-sm:w-[220px] max-sm:h-[220px] object-contain"
                            />

                        </div>


                        {/* VIP CARD */}

                        <div className="absolute top-[-50px] left-[120px] bg-gradient-to-r from-[#FFA8AA]/100 to-[#EDEDED]/10 p-6 rounded-xl shadow-lg w-[280px] border-2 border-white/90 backdrop-blur text-text-dark max-lg:left-[20px] max-lg:w-[220px] max-lg:p-4 max-md:hidden z-10">

                            <h4 className="font-semibold text-xl max-lg:text-lg">
                                VIP Membership
                            </h4>

                            <p className="text-xs text-gray-700 mt-2">
                                Get up to 30% discounts with our VIP Membership program!!!
                            </p>

                        </div>


                        {/* SPECIAL OFFER CARD */}

                        <div className="absolute top-[250px] right-[30px] bg-gradient-to-r from-[#EDEDED]/10 to-[#FFDB94]/100 p-6 rounded-xl shadow-lg w-[280px] border-2 border-white/90 backdrop-blur text-text-dark max-lg:right-[0px] max-lg:w-[220px] max-lg:p-4 max-lg:top-[220px] max-md:hidden z-10">

                            <h4 className="font-semibold text-xl max-lg:text-lg">
                                Special Offers
                            </h4>

                            <p className="text-xs text-gray-700 mt-2">
                                Receive special discount codes for your Special Day,
                                unlimited!!!
                            </p>

                        </div>


                        {/* RED ICON */}

                        <div className="absolute bottom-[80px] left-[150px] bg-[#FCD4D5] p-2 rounded-full shadow-md max-lg:left-[80px] max-md:hidden z-10">

                            <Image
                                src="/images/gift-icon.png"
                                width={80}
                                height={80}
                                alt="icon"
                            />

                        </div>


                        {/* TEXT */}

                        <div className="absolute bottom-[-20px] left-[120px] text-sm text-gray-700 max-lg:left-[60px] max-md:hidden z-10">

                            <p className="font-semibold">
                                Win Monthly Best
                            </p>

                            <p className="text-xs text-gray-500">
                                Win SHERA KHADOK <br />coupon program every month
                            </p>

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    )
}