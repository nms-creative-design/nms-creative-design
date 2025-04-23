import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Faq from '@/components/Faq';
import Hero from '@/components/Hero';
import ImageSlider from '@/components/ImageSlider';
import Project from '@/components/Project';
import Services from '@/components/Services';
import Setapart from '@/components/Setapart';
import { StickyNavbar } from '@/components/StickyNavbar';
import { Navbar } from '@material-tailwind/react';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>NMS Creative Design - Dominate Online</title>
        <meta name="description" content="Creative X - Dominate Online: Unleash Creative X" />
        <link rel="icon" href="/images/creativex.ico?v=1" type="image/x-icon" />
      </Head>
      <div className="font-inter">
      <StickyNavbar/>
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
      </div>
    </>
  );
}