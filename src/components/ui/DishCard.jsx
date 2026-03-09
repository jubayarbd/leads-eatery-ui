import Image from "next/image"
import { Star, Heart } from "lucide-react"

export default function DishCard({ image, title, price }) {
    return (
        <div className="bg-white rounded-2xl border-2 border-[#F0D1CB] shadow-md p-4 w-[300px] shrink-0 max-lg:w-[280px] max-md:w-[260px] max-sm:w-[240px] max-sm:p-3">

            {/* top badge */}

            <div className="flex justify-between items-center mb-2">

                <span className="text-xs bg-[#F3E5E1] text-primary px-2 py-1 rounded-full max-sm:text-[10px]">
                    25% OFF
                </span>

                <Heart size={16} className="text-gray-400 max-sm:w-3.5 max-sm:h-3.5" />

            </div>


            {/* image */}

            <div className="bg-gray-100 rounded-xl p-6 flex justify-center max-sm:p-4">
                <Image src={image} width={120} height={120} alt={title} className="max-sm:w-[90px] max-sm:h-[90px] object-contain" />
            </div>


            {/* title */}

            <h3 className="mt-4 font-semibold text-[15px] text-[#2A2A2A] max-sm:mt-3 max-sm:text-[14px]">
                {title}
            </h3>


            {/* small tags */}

            <div className="flex gap-2 mt-2 text-[11px] text-gray-500 max-sm:mt-1.5 max-sm:text-[10px] max-sm:gap-1.5 max-sm:flex-wrap">
                <span className="bg-[#F3F3F3] text-[#666] px-2 py-1 rounded">for 2</span>
                <span className="bg-[#F3F3F3] text-[#666] px-2 py-1 rounded">for 2x2</span>
                <span className="bg-[#F3F3F3] text-[#666] px-2 py-1 rounded">for 2x4</span>
            </div>


            {/* description */}

            <p className="text-xs text-gray-500 mt-3 leading-relaxed max-sm:mt-2 max-sm:text-[11px] max-sm:line-clamp-2">
                Bhaji, Veg Samosa, Paneer Tikka, Chilli Mushroom, Any special Rice or
                Chips, served with salad and sauce.
            </p>


            {/* price + rating */}

            <div className="flex justify-between items-center mt-4 max-sm:mt-3">

                <span className="font-semibold text-[#2A2A2A] max-sm:text-[14px]">{price}</span>

                <div className="flex items-center gap-1 text-[#FFB012]">
                    <Star size={14} fill="currentColor" className="max-sm:w-3 max-sm:h-3" />
                    <Star size={14} fill="currentColor" className="max-sm:w-3 max-sm:h-3" />
                    <Star size={14} fill="currentColor" className="max-sm:w-3 max-sm:h-3" />
                    <Star size={14} fill="currentColor" className="max-sm:w-3 max-sm:h-3" />
                    <Star size={14} fill="currentColor" className="max-sm:w-3 max-sm:h-3" />
                    <span className="text-gray-600 text-xs ml-1 max-sm:text-[10px]">5.0</span>
                </div>

            </div>


            {/* button */}

            <button className="mt-4 w-full bg-primary text-white py-2 rounded-full text-sm hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 max-sm:mt-3 max-sm:py-1.5 max-sm:text-xs">
                ADD TO CART
            </button>

        </div>
    )
}