export default function SectionTitle({ title, subtitle }) {
    return (
        <div className="max-w-[600px]">
            <h2 className="text-[50px] font-semibold tracking-[2px] text-black">
                {title}
            </h2>

            <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
                {subtitle}
            </p>
        </div>
    )
}