import Hero from '@/components/sections/Hero';
import ImageSlider from '@/components/sections/ImageSlider';
import { StickyNavbar } from '@/components/StickyNavbar';
import { Navbar } from '@material-tailwind/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative X - Dominate Online: Unleash Creative X</title>
        <meta name="description" content="Creative X - Dominate Online: Unleash Creative X" />
        <link rel="icon" href="/images/creativex.ico?v=1" type="image/x-icon" />
      </Head>
      <div className="font-inter">
      <StickyNavbar/>
        <main>
          <Hero />
          <ImageSlider />
        </main>
      </div>
    </>
  );
}
