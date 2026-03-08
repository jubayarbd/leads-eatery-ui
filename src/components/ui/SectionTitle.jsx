export default function SectionTitle({ title, subtitle }) {
    return (
        <div className="max-w-[600px] max-md:max-w-full">
            <h2 className="text-[50px] font-semibold tracking-[2px] text-black max-lg:text-[40px] max-md:text-[32px] max-sm:text-[24px]">
                {title}
            </h2>

            <p className="mt-4 text-gray-600 text-[15px] leading-relaxed max-sm:text-[13px] max-sm:mt-2">
                {subtitle}
            </p>
        </div>
    )
}