import Inner from '@/components/About/Inner'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import Project from '@/components/Project'
import Innerservice from '@/components/Services/Innserservice'
import Head from '@/components/Services/Innserservice'
import Tabservices from '@/components/Services/Tabservices'
import { StickyNavbar } from '@/components/StickyNavbar'
import React from 'react'

const services = () => {
  return (
    <div className="min-h-screen relative">
        <StickyNavbar />
       <Innerservice />
       <Tabservices />
       <Project />
       <Cta />
       <Footer />
      
        </div>
  )
}

export default services
