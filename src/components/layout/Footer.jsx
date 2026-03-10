import Container from "@/components/ui/Container"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { SiTiktok } from "react-icons/si"

export default function Footer() {

    return (
        <footer className="bg-primary text-white pt-20 relative overflow-hidden max-md:pt-16 max-sm:pt-12">

            <Container>

                {/* TOP FOOTER */}

                <div className="grid md:grid-cols-4 gap-10 pb-14 max-lg:grid-cols-2 max-lg:gap-12 max-md:grid-cols-1 max-md:gap-10 max-md:text-center max-sm:pb-10">

                    {/* LOGO */}

                    <div className="max-md:flex max-md:flex-col max-md:items-center">

                        <Image
                            src="/images/logo-white.png"
                            width={140}
                            height={40}
                            alt="logo"
                        />

                        <p className="mt-6 text-white/80 text-sm leading-relaxed max-w-[260px] max-md:max-w-[400px]">
                            Simple tagline or important notice Simple tagline or important notice
                            Simple tagline or important notice
                        </p>

                    </div>


                    {/* QUICK LINKS */}

                    <div>

                        <h4 className="font-semibold text-lg mb-6 max-sm:mb-4">
                            Quick Links
                        </h4>

                        <ul className="space-y-3 text-white/80 text-sm flex flex-col max-md:items-center">

                            <Link href="#" className="hover:text-white transition-colors duration-300 w-fit">Menu</Link>
                            <Link href="#" className="hover:text-white transition-colors duration-300 w-fit">Categories</Link>
                            <Link href="#" className="hover:text-white transition-colors duration-300 w-fit">Popular</Link>
                            <Link href="#" className="hover:text-white transition-colors duration-300 w-fit">Blogs</Link>

                        </ul>

                    </div>


                    {/* ADDRESS */}

                    <div>

                        <h4 className="font-semibold text-lg mb-6 max-sm:mb-4">
                            Address
                        </h4>

                        <ul className="space-y-3 text-white/80 text-sm flex flex-col max-md:items-center">

                            <Link href="#" className="hover:text-white transition-colors duration-300 w-fit">London</Link>
                            <Link href="#" className="hover:text-white transition-colors duration-300 w-fit">Email</Link>
                            <Link href="#" className="hover:text-white transition-colors duration-300 w-fit">Phone</Link>
                            <Link href="#" className="hover:text-white transition-colors duration-300 w-fit">Privacy Policy</Link>

                        </ul>

                    </div>


                    {/* APP DOWNLOAD */}

                    <div className="flex flex-col items-end max-md:items-center">

                        <h4 className="font-semibold text-lg mb-6 max-sm:mb-4">
                            Get the app
                        </h4>


                        {/* APP STORE */}

                        <div className="space-y-4 max-md:flex max-md:flex-row max-md:gap-4 max-md:space-y-0 max-sm:flex-col max-sm:space-y-3 max-sm:gap-0 max-sm:items-center">

                            <Link href="#" className="block hover:-translate-y-1 transition-transform duration-300">
                                <Image
                                    src="/images/appstore.png"
                                    width={150}
                                    height={45}
                                    alt="app store"
                                />
                            </Link>

                            <Link href="#" className="block hover:-translate-y-1 transition-transform duration-300">
                                <Image
                                    src="/images/googleplay.png"
                                    width={150}
                                    height={45}
                                    alt="google play"
                                />
                            </Link>

                        </div>


                        {/* SOCIAL */}

                        <div className="flex gap-6 mt-6 max-sm:mt-8">

                            <Link href="#" aria-label="Facebook" className="hover:text-black hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" aria-label="Instagram" className="hover:text-black hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" aria-label="Tiktok" className="hover:text-black hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                                <SiTiktok size={20} />
                            </Link>

                        </div>

                    </div>

                </div>


                {/* DIVIDER */}

                <div className="border-t-2 border-white/50 pt-6 pb-6 flex justify-between text-sm text-white/80 max-md:flex-col max-md:items-center max-md:gap-2">

                    <p>© 2025 LeadsEatery UK.</p>

                    <p>All rights reserved.</p>

                </div>

            </Container>


            {/* FOOD IMAGE STRIP */}

            <div className="mt-16 max-md:mt-8 max-md:overflow-x-auto max-md:flex max-md:w-full max-sm:mt-0">

                <Image
                    src="/images/footer-food.png"
                    width={1600}
                    height={300}
                    alt="food strip"
                    className="w-full max-md:w-auto max-md:min-w-[1200px]"
                />

            </div>

        </footer>
    )
}