import Image from "next/image"
import { Star, Heart } from "lucide-react"

export default function DishCard({ image, title, price }) {
    return (
        <div className="bg-white rounded-2xl border-2 border-[#F0D1CB] shadow-md p-4 w-[300px] shrink-0">

            {/* top badge */}

            <div className="flex justify-between items-center mb-2">

                <span className="text-xs bg-[#F3E5E1] text-primary px-2 py-1 rounded-full">
                    25% OFF
                </span>

                <Heart size={16} className="text-gray-400" />

            </div>


            {/* image */}

            <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
                <Image src={image} width={120} height={120} alt={title} />
            </div>


            {/* title */}

            <h3 className="mt-4 font-semibold text-[15px] text-[#2A2A2A]">
                {title}
            </h3>


            {/* small tags */}

            <div className="flex gap-2 mt-2 text-[11px] text-gray-500">
                <span className="bg-[#F3F3F3] text-[#666] px-2 py-1 rounded">for 2</span>
                <span className="bg-[#F3F3F3] text-[#666] px-2 py-1 rounded">for 2x2</span>
                <span className="bg-[#F3F3F3] text-[#666] px-2 py-1 rounded">for 2x4</span>
            </div>


            {/* description */}

            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                Bhaji, Veg Samosa, Paneer Tikka, Chilli Mushroom, Any special Rice or
                Chips, served with salad and sauce.
            </p>


            {/* price + rating */}

            <div className="flex justify-between items-center mt-4">

                <span className="font-semibold text-[#2A2A2A]">{price}</span>

                <div className="flex items-center gap-1 text-[#FFB012]">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <span className="text-gray-600 text-xs ml-1">5.0</span>
                </div>

            </div>


            {/* button */}

            <button className="mt-4 w-full bg-primary text-white py-2 rounded-full text-sm">
                ADD TO CART
            </button>

        </div>
    )
}