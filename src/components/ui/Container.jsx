export default function Container({ children }) {
    return (
        <div className="max-w-[1400px] mx-auto px-6">
            {children}
        </div>
    )
}