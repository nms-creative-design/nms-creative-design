import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import About from '@/components/Home/About';
import Faq from '@/components/Faq';
import Hero from '@/components/Home/Hero';
import ImageSlider from '@/components/ImageSlider';
import Project from '@/components/Project';
import Services from '@/components/Home/Services';
import Setapart from '@/components/Home/Setapart';
import { StickyNavbar } from '@/components/StickyNavbar';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function Home() {
  // State to manage button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll event to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>NMS Creative Design - Dominate Online</title>
        <meta name="description" content="Creative X - Dominate Online: Unleash Creative X" />
        <link rel="icon" href="/images/creativex.ico?v=1" type="image/x-icon" />
      </Head>
      <div className="font-inter">
        <StickyNavbar />
        <main>
          <Hero />
          <ImageSlider />
          <Services />
          <About />
          <Project />
          <Setapart />
          <Faq />
          <Cta />
          <Footer />
        </main>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-white text-black px-4 py-4 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-100 font-medium shadow-lg z-[1000] focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            <ArrowUpIcon className="h-6 w-6" />
          </button>
        )}
      </div>
    </>
  );
}