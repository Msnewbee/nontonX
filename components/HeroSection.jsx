export default function HeroSection() {
    return (
        <section className="hero bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/path/to/your/banner-image.jpg')" }}>
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Streaming film tanpa ribet</h1>
                <p className="text-xl">Akses ribuan film gratis</p>
            </div>
        </section>
    );
}
