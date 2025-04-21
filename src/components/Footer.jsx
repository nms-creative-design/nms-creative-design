import React from 'react';
import { Typography } from "@material-tailwind/react";
import Link from 'next/link';
import Creatives from './Creatives';
// Removed Creatives import

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        {/* Removed the entire Creatives SVG section and gradients */}
       <Creatives />
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left Section - CTA */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div>
              <Typography variant="paragraph" className="text-lg font-bold">
                Ready to make your vision a reality?<br />
                Contact us today!
              </Typography>
              <button className="bg-white mt-4 text-black py-3 px-8 w-64 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Start A Project
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              {/* Facebook SVG */}
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_facebook)">
                  <rect y="0.0214844" width="32" height="32" rx="16" fill="#1877F2"/>
                  <path d="M22.2281 20.6465L22.9375 16.0215H18.5V13.0215C18.5 11.7559 19.1188 10.5215 21.1063 10.5215H23.125V6.58398C23.125 6.58398 21.2938 6.27148 19.5438 6.27148C15.8875 6.27148 13.5 8.48711 13.5 12.4965V16.0215H9.4375V20.6465H13.5V31.8277C14.3156 31.9559 15.15 32.0215 16 32.0215C16.85 32.0215 17.6844 31.9559 18.5 31.8277V20.6465H22.2281Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_facebook">
                    <rect y="0.0214844" width="32" height="32" rx="16" fill="white"/>
                  </clipPath>
                </defs>
              </svg>

              {/* Twitter SVG */}
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.0214844" width="32" height="32" rx="16" fill="#1D9BF0"/>
                <path d="M13.072 24.4616C20.168 24.4616 24.048 18.5816 24.048 13.4856C24.048 13.3176 24.048 13.1496 24.04 12.9896C24.792 12.4456 25.448 11.7656 25.968 10.9896C25.28 11.2936 24.536 11.5016 23.752 11.5976C24.552 11.1176 25.16 10.3656 25.448 9.46164C24.704 9.90164 23.88 10.2216 23 10.3976C22.296 9.64564 21.296 9.18164 20.184 9.18164C18.056 9.18164 16.328 10.9096 16.328 13.0376C16.328 13.3416 16.36 13.6376 16.432 13.9176C13.224 13.7576 10.384 12.2216 8.48 9.88564C8.152 10.4536 7.96 11.1176 7.96 11.8216C7.96 13.1576 8.64 14.3416 9.68 15.0296C9.048 15.0136 8.45599 14.8376 7.93599 14.5496C7.93599 14.5656 7.93599 14.5816 7.93599 14.5976C7.93599 16.4696 9.26399 18.0216 11.032 18.3816C10.712 18.4696 10.368 18.5176 10.016 18.5176C9.76799 18.5176 9.52799 18.4936 9.28799 18.4456C9.776 19.9816 11.2 21.0936 12.888 21.1256C11.568 22.1576 9.90399 22.7736 8.09599 22.7736C7.78399 22.7736 7.47999 22.7576 7.17599 22.7176C8.86399 23.8216 10.896 24.4616 13.072 24.4616Z" fill="white"/>
              </svg>

              {/* YouTube SVG */}
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.0214844" width="32" height="32" rx="16" fill="#FF0000"/>
                <path d="M26.9588 10.5258C26.6952 9.54668 25.9232 8.77467 24.944 8.51105C23.1552 8.02148 16 8.02148 16 8.02148C16 8.02148 8.8447 8.02148 7.05588 8.49222C6.09557 8.75584 5.30473 9.54668 5.04111 10.5258C4.57037 12.3146 4.57037 16.0241 4.57037 16.0241C4.57037 16.0241 4.57037 19.7523 5.04111 21.5223C5.30473 22.5015 6.07674 23.2735 7.05588 23.5371C8.86353 24.0267 16 24.0267 16 24.0267C16 24.0267 23.1552 24.0267 24.944 23.5559C25.9232 23.2923 26.6952 22.5203 26.9588 21.5412C27.4295 19.7523 27.4295 16.0429 27.4295 16.0429C27.4295 16.0429 27.4484 12.3146 26.9588 10.5258Z" fill="white"/>
                <path d="M13.7216 19.4511L19.6717 16.0242L13.7216 12.5972V19.4511Z" fill="#FF0000"/>
              </svg>

              {/* LinkedIn SVG */}
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="0.0214844" width="32" height="32" rx="16" fill="#0A66C2"/>
                <path d="M23.5008 7.22168H8.49923C8.15466 7.22168 7.8242 7.35856 7.58055 7.60221C7.33689 7.84586 7.20001 8.17633 7.20001 8.5209V23.5225C7.20001 23.867 7.33689 24.1975 7.58055 24.4411C7.8242 24.6848 8.15466 24.8217 8.49923 24.8217H23.5008C23.8454 24.8217 24.1758 24.6848 24.4195 24.4411C24.6631 24.1975 24.8 23.867 24.8 23.5225V8.5209C24.8 8.17633 24.6631 7.84586 24.4195 7.60221C24.1758 7.35856 23.8454 7.22168 23.5008 7.22168ZM12.4458 22.2147H9.79968V13.8095H12.4458V22.2147ZM11.1209 12.6447C10.8207 12.643 10.5278 12.5524 10.2791 12.3844C10.0304 12.2164 9.83696 11.9785 9.72332 11.7007C9.60968 11.4228 9.58089 11.1176 9.64057 10.8234C9.70025 10.5292 9.84573 10.2593 10.0587 10.0478C10.2716 9.83622 10.5424 9.69248 10.837 9.63468C11.1315 9.57689 11.4366 9.60765 11.7136 9.72307C11.9907 9.83849 12.2274 10.0334 12.3938 10.2832C12.5602 10.533 12.6489 10.8265 12.6487 11.1267C12.6515 11.3276 12.6139 11.5271 12.538 11.7132C12.4621 11.8993 12.3495 12.0682 12.2069 12.2099C12.0643 12.3515 11.8947 12.463 11.7081 12.5377C11.5215 12.6124 11.3218 12.6488 11.1209 12.6447ZM22.1991 22.222H19.5542V17.6301C19.5542 16.2759 18.9786 15.8579 18.2355 15.8579C17.4508 15.8579 16.6808 16.4495 16.6808 17.6643V22.222H14.0347V13.8156H16.5793V14.9803H16.6136C16.869 14.4633 17.7637 13.5797 19.1289 13.5797C20.6053 13.5797 22.2003 14.456 22.2003 17.0227L22.1991 22.222Z" fill="white"/>
              </svg>
            </div>
          </div>
          
          {/* Middle Section - Navigation */}
          <div className="flex justify-center">
            <div>
              <Typography variant="h6" className="mb-4 font-bold">
                NAVIGATION
              </Typography>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="hover:text-gray-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gray-300 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/inbox" className="hover:text-gray-300 transition-colors">
                    Inbox
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-300 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Section - Quick Links */}
          <div className="flex justify-center">
            <div>
              <Typography variant="h6" className="mb-4 font-bold">
                QUICK LINKS
              </Typography>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="hover:text-gray-300 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-gray-300 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Creatives. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;