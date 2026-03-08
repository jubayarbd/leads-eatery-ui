import Hero from "@/components/sections/Hero"
import PopularDishes from "@/components/sections/PopularDishes"
import Navbar from "@/components/layout/Navbar"
import Welcome from "@/components/sections/Welcome"
import Categories from "@/components/sections/Categories"
import Promo from "@/components/sections/Promo"
import Testimonials from "@/components/sections/Testimonials"
import Subscribe from "@/components/sections/Subscribe"
import Contact from "@/components/sections/Contact"
import Gallery from "@/components/sections/Gallery"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDishes />
      <Welcome />
      <Categories />
      <Promo />
      <Testimonials />
      <Subscribe />
      <Contact />
      <Gallery />
      <Footer />
    </>
  )
}