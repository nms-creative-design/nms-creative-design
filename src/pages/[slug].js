import React from 'react';
import { StickyNavbar } from '@/components/StickyNavbar';
import Inner from '@/components/Inner';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/projectsData'; // Adjust path if needed
import { useRouter } from 'next/router';




const innerproject = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log('slug:', slug);
  // Example: Show project with id = 1 (Noa Coach)
  const project = projectsData.find((proj) => proj.slug === slug);

  return (
    <div className="min-h-screen relative bg-black">
      
      <StickyNavbar />
      <Inner
        title={project?.title}
        description={project?.description}
        imageSrc={project?.image.preview.src}
        imageAlt={project?.imageAlt}
        showImage={true}
      />
      <Footer />
    </div>
  );
};

export default innerproject;