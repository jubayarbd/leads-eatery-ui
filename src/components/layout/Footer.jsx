import Container from "@/components/ui/Container"
import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"
import { SiTiktok } from "react-icons/si"

export default function Footer() {

    return (
        <footer className="bg-primary text-white pt-20 relative overflow-hidden">

            <Container>

                {/* TOP FOOTER */}

                <div className="grid md:grid-cols-4 gap-10 pb-14">

                    {/* LOGO */}

                    <div>

                        <Image
                            src="/images/logo-white.png"
                            width={140}
                            height={40}
                            alt="logo"
                        />

                        <p className="mt-6 text-white/80 text-sm leading-relaxed max-w-[260px]">
                            Simple tagline or important notice Simple tagline or important notice
                            Simple tagline or important notice
                        </p>

                    </div>


                    {/* QUICK LINKS */}

                    <div>

                        <h4 className="font-semibold text-lg mb-6">
                            Quick Links
                        </h4>

                        <ul className="space-y-3 text-white/80 text-sm">

                            <li>Menu</li>
                            <li>Categories</li>
                            <li>Popular</li>
                            <li>Blogs</li>

                        </ul>

                    </div>


                    {/* ADDRESS */}

                    <div>

                        <h4 className="font-semibold text-lg mb-6">
                            Address
                        </h4>

                        <ul className="space-y-3 text-white/80 text-sm">

                            <li>London</li>
                            <li>Email</li>
                            <li>Phone</li>
                            <li>Privacy Policy</li>

                        </ul>

                    </div>


                    {/* APP DOWNLOAD */}

                    <div className="flex flex-col items-end">

                        <h4 className="font-semibold text-lg mb-6">
                            Get the app
                        </h4>


                        {/* APP STORE */}

                        <div className="space-y-4">

                            <Image
                                src="/images/appstore.png"
                                width={150}
                                height={45}
                                alt="app store"
                            />

                            <Image
                                src="/images/googleplay.png"
                                width={150}
                                height={45}
                                alt="google play"
                            />

                        </div>


                        {/* SOCIAL */}

                        <div className="flex gap-6 mt-6">

                            <Facebook size={20} />
                            <Instagram size={20} />
                            <SiTiktok size={20} />

                        </div>

                    </div>

                </div>


                {/* DIVIDER */}

                <div className="border-t-2 border-white/50 pt-6 flex justify-between text-sm text-white/80">

                    <p>© 2025 LeadsEatery UK.</p>

                    <p>All rights reserved.</p>

                </div>

            </Container>


            {/* FOOD IMAGE STRIP */}

            <div className="mt-16">

                <Image
                    src="/images/footer-food.png"
                    width={1600}
                    height={300}
                    alt="food strip"
                    className="w-full"
                />

            </div>

        </footer>
    )
}