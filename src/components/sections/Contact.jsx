import Container from "@/components/ui/Container"
import { ArrowRight } from "lucide-react"

export default function Contact() {
    return (
        <section className="py-28 bg-secondary max-md:py-16 max-sm:py-12">

            <Container>

                <div className="grid lg:grid-cols-2 gap-20 items-start max-md:gap-10">

                    {/* LEFT SIDE */}

                    <div className="max-w-[620px] max-lg:mx-auto max-md:text-center">

                        <h2 className="text-[48px] font-semibold text-black max-lg:text-[36px] max-md:text-[32px] max-sm:text-[28px]">
                            CONTACT US
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed max-sm:text-sm max-sm:mt-3">
                            Excellent service and the tastiest lamb vindaloo I've ever tasted!
                            Leads Eatery is my new favourite curry restaurant, and I heartily suggest it.
                        </p>


                        {/* FORM */}

                        <form className="mt-8 space-y-6 max-md:text-left max-sm:space-y-4 max-sm:mt-6">

                            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Name*
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Abdur Rafiq"
                                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md outline-none text-black placeholder:text-gray-400 focus:border-primary text-sm max-sm:py-1.5"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Phone*
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="+44 *** ***"
                                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md outline-none text-black placeholder:text-gray-400 focus:border-primary text-sm max-sm:py-1.5"
                                    />
                                </div>

                            </div>


                            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Email*
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="yourname@gmail.com"
                                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md outline-none text-black placeholder:text-gray-400 focus:border-primary text-sm max-sm:py-1.5"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Subject*
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Your subject line here"
                                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md outline-none text-black placeholder:text-gray-400 focus:border-primary text-sm max-sm:py-1.5"
                                    />
                                </div>

                            </div>


                            <div>

                                <label className="text-sm font-medium text-black">
                                    Message*
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Write your message here"
                                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md outline-none text-black placeholder:text-gray-400 focus:border-primary text-sm max-sm:py-1.5"
                                />

                            </div>


                            {/* SUBMIT BUTTON */}

                            <button className="flex items-center gap-3 bg-primary text-white px-7 py-4 rounded-xl font-medium shadow hover:opacity-90 transition max-sm:w-full max-sm:justify-center max-sm:px-5 max-sm:py-3 max-sm:text-sm max-sm:rounded-lg max-md:mx-auto">

                                <span className="bg-white text-primary p-1 rounded-full max-sm:p-0.5">
                                    <ArrowRight size={16} className="max-sm:w-3.5 max-sm:h-3.5" />
                                </span>

                                SUBMIT NOW

                            </button>

                        </form>

                    </div>


                    {/* MAP */}

                    <div className="w-full">

                        <iframe
                            src="https://www.google.com/maps?q=Leads%20Eatery%20Indian%20Restaurant%20%26%20Takeaway&output=embed"
                            className="w-full h-[560px] rounded-2xl shadow-md border-2 border-[#FFFFFF] mt-10 max-lg:h-[400px] max-md:h-[300px] max-md:mt-0 max-sm:h-[250px]"
                            loading="lazy"
                        ></iframe>

                    </div>

                </div>

            </Container>

        </section>
    )
}