import Container from "@/components/ui/Container"
import { ArrowRight } from "lucide-react"

export default function Contact() {
    return (
        <section className="py-28 bg-secondary">

            <Container>

                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT SIDE */}

                    <div className="max-w-[620px]">

                        <h2 className="text-[48px] font-semibold text-black">
                            CONTACT US
                        </h2>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Excellent service and the tastiest lamb vindaloo I've ever tasted!
                            Leads Eatery is my new favourite curry restaurant, and I heartily suggest it.
                        </p>


                        {/* FORM */}

                        <form className="mt-5 space-y-6">

                            <div className="grid grid-cols-2 gap-6">

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Name*
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Abdur Rafiq"
                                        className="w-full mt-2 px-2 py-1 border border-gray-300 rounded-md outline-none
                    text-black placeholder:text-gray-400 focus:border-primary text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Phone*
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="+44 *** ***"
                                        className="w-full mt-2 px-2 py-1 border border-gray-300 rounded-md outline-none
                    text-black placeholder:text-gray-400 focus:border-primary text-sm"
                                    />
                                </div>

                            </div>


                            <div className="grid grid-cols-2 gap-6">

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Email*
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="yourname@gmail.com"
                                        className="w-full mt-2 px-2 py-1 border border-gray-300 rounded-md outline-none
                    text-black placeholder:text-gray-400 focus:border-primary text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium text-black">
                                        Subject*
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Your subject line here"
                                        className="w-full mt-2 px-2 py-1 border border-gray-300 rounded-md outline-none
                    text-black placeholder:text-gray-400 focus:border-primary text-sm"
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
                                    className="w-full mt-2 px-2 py-1 border border-gray-300 rounded-md outline-none
                  text-black placeholder:text-gray-400 focus:border-primary text-sm"
                                />

                            </div>


                            {/* SUBMIT BUTTON */}

                            <button className="flex items-center gap-3 bg-primary text-white px-7 py-4 rounded-xl font-medium shadow hover:opacity-90 transition">

                                <span className="bg-white text-primary p-1 rounded-full">
                                    <ArrowRight size={16} />
                                </span>

                                SUBMIT NOW

                            </button>

                        </form>

                    </div>


                    {/* MAP */}

                    <div className="w-full">

                        <iframe
                            src="https://www.google.com/maps?q=Leads%20Eatery%20Indian%20Restaurant%20%26%20Takeaway&output=embed"
                            className="w-full h-[560px] rounded-2xl shadow-md border-2 border-[#FFFFFF] mt-10"
                            loading="lazy"
                        ></iframe>

                    </div>

                </div>

            </Container>

        </section>
    )
}