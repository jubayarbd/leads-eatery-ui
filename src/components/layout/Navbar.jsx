"use client"

import { useState } from "react"
import Container from "@/components/ui/Container"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-6 left-0 w-full z-50 max-sm:top-4">
            <Container>

                <div className="bg-white/90 backdrop-blur-md rounded-2xl px-8 py-4 flex items-center justify-between shadow-lg max-md:px-6 max-sm:px-4 relative z-50 transition-all duration-300">

                    {/* logo */}
                    <div className="flex-shrink-0 z-50">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="Leads Eatery"
                                width={120}
                                height={40}
                                className="object-contain max-md:w-28 max-sm:w-24 px-1"
                            />
                        </Link>
                    </div>

                    {/* menu (Desktop & Tablet) */}
                    <div className="hidden md:block">
                        <nav className="flex gap-10 text-[16px] font-medium tracking-wide text-black max-lg:gap-6 max-md:gap-4 max-lg:text-sm">
                            <Link href="#" className="hover:text-primary transition-colors duration-300">HOME</Link>
                            <Link href="#" className="hover:text-primary transition-colors duration-300">MENU</Link>
                            <Link href="#" className="hover:text-primary transition-colors duration-300">BOOKING</Link>
                            <Link href="#" className="hover:text-primary transition-colors duration-300">GALLERY</Link>
                            <Link href="#" className="hover:text-primary transition-colors duration-300">CONTACT</Link>
                        </nav>
                    </div>

                    {/* CTA button (Desktop & Tablet) */}
                    <div className="hidden md:block">
                        <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg max-lg:px-4 max-lg:text-sm max-lg:py-1.5 shadow-sm hover:opacity-90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <span className="bg-white text-primary rounded-full p-1 max-lg:p-0.5">
                                <ArrowRight size={14} className="max-lg:w-3 max-lg:h-3" />
                            </span>
                            GET 25% OFF
                        </button>
                    </div>

                    {/* Hamburger Menu Icon (Mobile Only) */}
                    <button
                        className="md:hidden text-black z-50 p-1 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu size={26} />
                    </button>

                </div>

                {/* Mobile Menu Overlay */}

                {/* Backdrop Blur */}
                <div
                    className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Slide-in Menu Panel */}
                <div className={`md:hidden fixed top-0 right-0 h-full w-[85%] max-w-[340px] bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100/80">
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>
                            <Image
                                src="/images/logo.png"
                                alt="Leads Eatery"
                                width={100}
                                height={32}
                                className="object-contain w-24 px-1"
                            />
                        </Link>
                        <button
                            className="text-gray-500 hover:bg-red-50 hover:text-primary p-2 rounded-full transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto py-6 px-4">
                        <nav className="flex flex-col space-y-2 text-center text-black">
                            {["HOME", "MENU", "BOOKING", "GALLERY", "CONTACT"].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="block font-medium text-lg tracking-wide py-3 px-4 rounded-xl hover:bg-red-50 hover:text-primary active:bg-red-100 transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Footer / CTA */}
                    <div className="p-6 border-t border-gray-100/80 mb-4 mt-auto">
                        <button className="flex items-center justify-center gap-3 bg-primary text-white px-6 py-4 rounded-xl w-full font-medium shadow-md shadow-primary/25 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98]">
                            <span className="bg-white text-primary rounded-full p-1">
                                <ArrowRight size={16} />
                            </span>
                            GET 25% OFF
                        </button>
                    </div>

                </div>

            </Container>
        </header>
    )
}