import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ContentGrid from '../components/ContentGrid';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Head>
                <title>NontonX - Platform Streaming Film</title>
                <meta name="description" content="NontonX adalah platform streaming film berbasis Next.js yang memungkinkan pengguna untuk menonton film secara langsung. Nikmati streaming video langsung dengan kualitas tinggi." />
            </Head>
            <Navbar />
            <HeroSection />
            <main className="container mx-auto p-4">
                <ContentGrid />
            </main>
            <Footer />
        </div>
    );
}
