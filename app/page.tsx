'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProductPage from './component/ProductPage';
import ProductOverview from './component/ProductOverview';
import ProductDetail from './component/ProductDetail';
// import MattressComparison from './component/MattressComparison';
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scroll to show/hide scroll-to-top button
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 300);
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     
<Header/>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto bg-white">
        {/* Product Section */}
        <section className="flex flex-col lg:flex-row gap-8 p-6">
          {/* <div className="flex-1">
            <div className="w-full h-96 bg-gray-100 rounded-lg mb-4 overflow-hidden">
              <Image
                src={mainImages[selectedThumbnail]}
                alt="Mattress Main Image"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-16 h-16 bg-gray-100 rounded cursor-pointer border-2 transition-colors ${
                    selectedThumbnail === index ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div> */}
          <div className=''>
                   <Gallery/>

          </div>
          <div className="flex-1">
                            {/* <h1 style={{ color: '#444444', fontFamily: 'Gilroy,serif',fontSize:"40px" }}>Kingsdown Studio Caresa Mattress</h1> */}

            {/* Rating and Reviews */}
            <div className="flex items-center space-x-2 mb-3">


              <div className="text-yellow-400 text-sm" style={{ fontFamily: 'Arial, sans-serif',display:"flex" }}>
                           {/* <h1 style={{ color: '#444444', fontFamily: 'Gilroy,serif',fontSize:"40px" }}>Kingsdown Studio Caresa Mattress</h1> */}

                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 25 25" 
                  aria-hidden="true" 
                  focusable="false"
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
                  width="24" 
                  height="24" 
                  viewBox="0 0 25 25" 
                  aria-hidden="true" 
                  focusable="false"
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
                </svg> <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 25 25" 
                  aria-hidden="true" 
                  focusable="false"
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
                </svg> <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 25 25" 
                  aria-hidden="true" 
                  focusable="false"
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
    <polygon 
  points="25 9.12 15.5669599 9.12 12.512219 0 9.40860215 9.12 0 9.12 7.55131965 14.856 4.47214076 24 12.512219 18.216 20.5522972 24 17.4731183 14.856" 
  style={{ fill: 'url(#bv_rating_summary_star_filled_2_4_46.15_02633M)' }}
/>
              </div>
              <span className="text-gray-600 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>(156)</span>
            </div>
            {/* Chat with Expert Button */}
                        <ProductPage/>
                        <ProductOverview/>
                        <ProductDetail/>

          </div>
        </section>
        <section>
          {/* <MattressComparison/> */}
          
          <ComparisonTable/>
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
