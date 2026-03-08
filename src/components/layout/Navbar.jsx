import Container from "@/components/ui/Container"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Navbar() {
    return (
        <header className="absolute top-6 left-0 w-full z-50">
            <Container>

                <div className="bg-white rounded-2xl px-8 py-4 flex items-center justify-between shadow-lg">

                    {/* logo */}

                    <Image
                        src="/images/logo.png"
                        alt="Leads Eatery"
                        width={120}
                        height={40}
                        className="object-contain"
                    />

                    {/* menu */}

                    <nav className="flex gap-10 text-[16px] font-medium tracking-wide text-black">
                        <a href="#">HOME</a>
                        <a href="#">MENU</a>
                        <a href="#">BOOKING</a>
                        <a href="#">GALLERY</a>
                        <a href="#">CONTACT</a>
                    </nav>

                    {/* CTA button */}

                    <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg">

                        <span className="bg-white text-primary rounded-full p-1">
                            <ArrowRight size={14} />
                        </span>

                        GET 25% OFF

                    </button>

                </div>

            </Container>
        </header>
    )
}