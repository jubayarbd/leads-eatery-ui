export default function Button({ children }) {
    return (
        <button className="bg-[#A3472D] px-8 py-3 rounded-lg text-white text-m font-medium tracking-wide hover:opacity-90 transition shadow-md">
            {children}
        </button>
    )
}