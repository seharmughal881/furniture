'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProductPage from './component/ProductPage';
// import ProductOverview from './component/ProductOverview';
import ProductDetail from './component/ProductDetail';
// import { Cart } from './component/Cart';
import { ComparisonTable } from './component/ComparisonTable';
import Header from './component/Header';
import Reviews from './component/Review';
import Review from './component/Review';
import { Footer } from './component/Footer';
import Rigional from './component/Rigional';
import Gallery from './component/Gallery';
export default function Home() {
  const [selectedSize, setSelectedSize] = useState('Full');
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showStarPopup, setShowStarPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768);
  }, []);

  const sizes = [
    { name: 'Twin', price: '$999' },
    { name: 'Full', price: '$1,299' },
    { name: 'Queen', price: '$1,499' },
    { name: 'King', price: '$1,699' },
    { name: 'California King', price: '$1,799' }
  ];

  const thumbnails = [
    'https://en.sleepcountry.ca/products/kingsdown-studio-caresa-mattress.html#',
    'https://picsum.photos/seed/mattress1/80/80.jpg',
    'https://picsum.photos/seed/mattress3/80/80.jpg'
  ];

  const mainImages = [
    'https://en.sleepcountry.ca/products/kingsdown-studio-caresa-mattress.html#',
    'https://picsum.photos/seed/mattress1/600/400.jpg',
    'https://picsum.photos/seed/mattress2/600/400.jpg',
    'https://picsum.photos/seed/mattress3/600/400.jpg'
  ];

  const handleThumbnailClick = (index: number) => {
    setSelectedThumbnail(index);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Handle scroll to show/hide scroll-to-top button
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setShowScrollTop(window.scrollY > 300);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     
<Header/>
      {/* Main Content */}
      <main className="w-full bg-white">
        {/* Product Section */}
        <section className="flex flex-col lg:flex-row gap-4 lg:gap-8 relative px-4 sm:px-6 lg:px-8">
          {/* Gallery Section */}
          <div className="w-full lg:w-3/5 xl:w-1/2 lg:sticky lg:top-6 lg:self-start">
                   <Gallery/>
          </div>
          
          {/* Product Details Section */}
          <div className="w-full lg:w-1/2 xl:w-3/5">
            {/* Rating and Reviews */}
            <div className="flex items-center space-x-2 mb-4 lg:mb-6">
              <div className="flex items-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={isMobile ? "20" : "24"} 
                  height={isMobile ? "20" : "24"} 
                  viewBox="0 0 25 25" 
                  aria-hidden="true" 
                  focusable="false"
                  className="flex-shrink-0"
                >
                  <defs>
                    <linearGradient id="bv_rating_summary_star_filled_2_4_46.15_02633M" x1="99.99%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'rgb(208, 168, 109)', stopOpacity: 1 }} />
                      <stop offset="1%" style={{ stopColor: 'rgb(232, 232, 234)', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points="25 9.12 15.5669599 9.12 12.512219 0 9.40860215 9.12 0 9.12 7.55131965 14.856 4.47214076 24 12.512219 18.216 20.5522972 24 17.4731183 14.856" 
                    style={{ fill: 'url(#bv_rating_summary_star_filled_2_4_46.15_02633M)' }}
                  />
                  <path d="" style={{ fill: 'url(#bv_rating_summary_star_filled_2_4_46.15_02633M)' }} />
                </svg>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={isMobile ? "20" : "24"} 
                  height={isMobile ? "20" : "24"} 
                  viewBox="0 0 25 25" 
                  aria-hidden="true" 
                  focusable="false"
                  className="flex-shrink-0"
                >
                  <defs>
                    <linearGradient id="bv_rating_summary_star_filled_2_1_99.99_02633M" x1="99.99%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'rgb(208, 168, 109)', stopOpacity: 1 }} />
                      <stop offset="1%" style={{ stopColor: 'rgb(232, 232, 234)', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points="25 9.12 15.5669599 9.12 12.512219 0 9.40860215 9.12 0 9.12 7.55131965 14.856 4.47214076 24 12.512219 18.216 20.5522972 24 17.4731183 14.856" 
                    style={{ fill: 'url(#bv_rating_summary_star_filled_2_1_99.99_02633M)' }}
                  />
                  <path d="" style={{ fill: 'url(#bv_rating_summary_star_filled_2_1_99.99_02633M)' }} />
                </svg>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={isMobile ? "20" : "24"} 
                  height={isMobile ? "20" : "24"} 
                  viewBox="0 0 25 25" 
                  aria-hidden="true" 
                  focusable="false"
                  className="flex-shrink-0"
                >
                  <defs>
                    <linearGradient id="bv_rating_summary_star_filled_2_1_99.99_02633M" x1="99.99%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'rgb(208, 168, 109)', stopOpacity: 1 }} />
                      <stop offset="1%" style={{ stopColor: 'rgb(232, 232, 234)', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points="25 9.12 15.5669599 9.12 12.512219 0 9.40860215 9.12 0 9.12 7.55131965 14.856 4.47214076 24 12.512219 18.216 20.5522972 24 17.4731183 14.856" 
                    style={{ fill: 'url(#bv_rating_summary_star_filled_2_1_99.99_02633M)' }}
                  />
                  <path d="" style={{ fill: 'url(#bv_rating_summary_star_filled_2_1_99.99_02633M)' }} />
                </svg>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={isMobile ? "20" : "24"} 
                  height={isMobile ? "20" : "24"} 
                  viewBox="0 0 25 25" 
                  aria-hidden="true" 
                  focusable="false"
                  className="flex-shrink-0"
                >
                  <defs>
                    <linearGradient id="bv_rating_summary_star_filled_2_1_99.99_02633M" x1="99.99%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'rgb(208, 168, 109)', stopOpacity: 1 }} />
                      <stop offset="1%" style={{ stopColor: 'rgb(232, 232, 234)', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points="25 9.12 15.5669599 9.12 12.512219 0 9.40860215 9.12 0 9.12 7.55131965 14.856 4.47214076 24 12.512219 18.216 20.5522972 24 17.4731183 14.856" 
                    style={{ fill: 'url(#bv_rating_summary_star_filled_2_1_99.99_02633M)' }}
                  />
                  <path d="" style={{ fill: 'url(#bv_rating_summary_star_filled_2_1_99.99_02633M)' }} />
                </svg>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width={isMobile ? "20" : "24"} 
                  height={isMobile ? "20" : "24"} 
                  viewBox="0 0 25 25" 
                  aria-hidden="true" 
                  focusable="false"
                  className="flex-shrink-0"
                >
                  <defs>
                    <linearGradient id="bv_rating_summary_star_filled_2_4_46.15_02633M" x1="99.99%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: 'rgb(208, 168, 109)', stopOpacity: 1 }} />
                      <stop offset="1%" style={{ stopColor: 'rgb(232, 232, 234)', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <polygon 
                    points="25 9.12 15.5669599 9.12 12.512219 0 9.40860215 9.12 0 9.12 7.55131965 14.856 4.47214076 24 12.512219 18.216 20.5522972 24 17.4731183 14.856" 
                    style={{ fill: 'url(#bv_rating_summary_star_filled_2_4_46.15_02633M)' }}
                  />
                  <path d="" style={{ fill: 'url(#bv_rating_summary_star_filled_2_4_46.15_02633M)' }} />
                </svg>
              </div>
              <span className="text-gray-600 text-sm lg:text-base" style={{ fontFamily: 'Arial, sans-serif' }}>(156)</span>
            </div>
            
            {/* Product Components */}
            <div className="space-y-4 lg:space-y-6">
              <ProductPage/>
              {/* <ProductOverview/> */}
              <ProductDetail/>
            </div>
          </div>
        </section>
        <section>
          {/* <MattressComparison/> */}
          <br /> <br /> <br />
          <ComparisonTable/>
          <br /><br /><br />
          <Review/>
          <Rigional/>
          <Footer/>
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}
