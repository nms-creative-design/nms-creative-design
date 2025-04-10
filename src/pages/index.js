import Cta from '@/components/Cta';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import ImageSlider from '@/components/sections/ImageSlider';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
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
       
        </main>
      </div>
    </>
  );
}
