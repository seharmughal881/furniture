'use client';

export function Footer() {
  return (
    <div className="w-full" style={{ fontFamily: "Gilroy, sans-serif", fontSize: "16px", color: "#1a1a1a", backgroundColor: "#f2ede7" }}>

      {/* ── Main footer columns + contact panel ── */}
      <div className="flex flex-col lg:flex-row gap-0 px-4 sm:px-6 lg:px-8 xl:px-10 py-6 lg:py-9">

        {/* Our Services */}
        <div className="flex-1 min-w-[170px] lg:pr-5 mb-6 lg:mb-0">
          <p className="font-bold text-base sm:text-lg lg:text-xl mb-3 lg:mb-4 leading-tight" style={{ fontWeight: "700", fontSize: "14px sm:16px lg:18px", lineHeight: "1.4" }}>Our Services</p>
          <ul className="list-none p-0 m-0 space-y-1.5 sm:space-y-2">
            <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ textDecoration: "none", fontSize: "13px sm:14px lg:16px" }}>100 Night Guarantee</a></li>
            <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ textDecoration: "none", fontSize: "13px sm:14px lg:16px" }}>Returns &amp; Exchanges</a></li>
            <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ textDecoration: "none", fontSize: "13px sm:14px lg:16px" }}>Shipping &amp; Delivery</a></li>
            <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ textDecoration: "none", fontSize: "13px sm:14px lg:16px" }}>Unbeatable Price Guarantee</a></li>
          </ul>
        </div>

        {/* All About Sleep Country */}
        <div className="flex-1 min-w-[200px] lg:pr-5 mb-6 lg:mb-0">
          <p className="font-bold text-base sm:text-lg lg:text-xl mb-3 lg:mb-4 leading-tight" style={{ fontWeight: "700", fontSize: "14px sm:16px lg:18px", lineHeight: "1.4" }}>All About Sleep Country</p>
          <ul className="list-none p-0 m-0 space-y-1.5 sm:space-y-2">
            <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ textDecoration: "none", fontSize: "13px sm:14px lg:16px" }}>About Us</a></li>
            <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ textDecoration: "none", fontSize: "13px sm:14px lg:16px" }}>Supplier Partners</a></li>
            <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ textDecoration: "none", fontSize: "13px sm:14px lg:16px" }}>Careers</a></li>
          </ul>
        </div>

        {/* Help & Info */}
        <div className="flex-1 min-w-[160px] lg:pr-5 mb-6 lg:mb-0">
          <p className="font-bold text-base sm:text-lg lg:text-xl mb-3 lg:mb-4 leading-tight" style={{ fontWeight: "700", fontSize: "14px sm:16px lg:18px", lineHeight: "1.4" }}>Help &amp; Info</p>
          <ul className="list-none p-0 m-0 space-y-1.5 sm:space-y-2">
            <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ textDecoration: "none", fontSize: "13px sm:14px lg:16px" }}>Help Center/FAQ</a></li>
            <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ textDecoration: "none", fontSize: "13px sm:14px lg:16px" }}>Contact Us</a></li>
            <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ textDecoration: "none", fontSize: "13px sm:14px lg:16px" }}>Track My Order</a></li>
            <li><a href="#" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ textDecoration: "none", fontSize: "13px sm:14px lg:16px" }}>Find a Store</a></li>
          </ul>
        </div>

        {/* Spacer */}
        <div className="hidden lg:block lg:flex-0.4" />

        {/* Have questions? panel */}
        <div className="w-full lg:w-[320px] lg:flex-shrink-0">
          <p className="font-bold text-xl lg:text-2xl mb-4 lg:mb-5 leading-tight" style={{ fontWeight: "700", fontSize: "18px sm:20px lg:24px", lineHeight: "1.25", color: "#1a1a1a" }}>
            Have questions? Our Sleep Experts are here to help.
          </p>

          {/* Live Chat */}
          <div className="flex items-start mb-4 lg:mb-4 gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <p className="mb-0.5" style={{ margin: "0 0 2px", fontSize: "13px sm:14px lg:16px", color: "#1a1a1a" }}>Sleep Expert</p>
              <a href="tel:18447480260" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ fontSize: "13px sm:14px lg:16px", textDecoration: "underline" }}>1-844-748-0260</a>
            </div>
          </div>

          {/* Customer Service */}
          <div className="flex items-start mb-5 lg:mb-5 gap-3">
            <div className="w-6 h-6 flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.27 6.27l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p className="mb-0.5" style={{ margin: "0 0 2px", fontSize: "13px sm:14px lg:16px", color: "#1a1a1a" }}>Customer Service</p>
              <a href="tel:18885337388" className="text-gray-800 hover:text-gray-600 transition-colors block" style={{ fontSize: "13px sm:14px lg:16px", textDecoration: "underline" }}>1-888-SLEEP-88</a>
              <a href="tel:18885337388" className="text-gray-800 hover:text-gray-600 transition-colors" style={{ fontSize: "13px sm:14px lg:16px", textDecoration: "underline" }}>(1-888-753-3788)</a>
            </div>
          </div>

          {/* Chat button + up arrow */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="bg-gray-900 text-white border-0 rounded-full px-4 sm:px-6 py-3 text-sm font-medium cursor-pointer flex items-center gap-2 transition-colors hover:bg-gray-800" style={{ letterSpacing: "0.01em" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span className="text-xs sm:text-sm">Chat with a Sleep Expert</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#c8c4bc] border-0 cursor-pointer flex items-center justify-center transition-colors hover:bg-[#b8b3ac]">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Badges row ── */}
      {/* <div className="px-4 sm:px-6 lg:px-8 xl:px-10 py-4 lg:py-5 flex items-center justify-center gap-2 sm:gap-3">
        {/* BrandSpark Most Trusted badge 1 */}
        {/* <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[#7a1c6c] flex flex-col items-center justify-center bg-white p-1">
          <p className="m-0 text-[10px] sm:text-xs font-bold text-[#7a1c6c] text-center leading-tight uppercase" style={{ fontSize: "10px" }}>BrandSpark</p>
          <p className="m-0.5 text-[8px] sm:text-[10px] font-bold text-[#7a1c6c] text-center uppercase" style={{ fontSize: "8px" }}>Most</p>
          <p className="m-0 text-[8px] sm:text-[10px] font-bold text-[#7a1c6c] text-center uppercase" style={{ fontSize: "8px" }}>Trusted</p>
          <p className="m-0.5 text-[8px] text-gray-500 text-center" style={{ fontSize: "8px" }}>by Canadian<br/>Shoppers</p>
        </div> */}
        {/* BrandSpark #1 Most Trusted badge */}
        {/* <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[#7a1c6c] flex flex-col items-center justify-center bg-white p-1">
          <p className="m-0 text-[10px] sm:text-xs font-bold text-[#7a1c6c] text-center leading-tight uppercase" style={{ fontSize: "10px" }}>BrandSpark</p>
          <p className="m-0.5 text-[10px] sm:text-sm font-black text-[#7a1c6c] text-center" style={{ fontSize: "10px" }}>#1</p>
          <p className="m-0 text-[8px] sm:text-[10px] font-bold text-[#7a1c6c] text-center uppercase" style={{ fontSize: "8px" }}>Most Trusted</p>
          <p className="m-0.5 text-[8px] text-gray-500 text-center" style={{ fontSize: "8px" }}>by Canadian<br/>Shoppers</p> */}
        {/* </div> */}
      {/* </div> */} 

      {/* ── Copyright strip ── */}
      <div className="border-t border-[#d8d0c6] px-4 sm:px-6 lg:px-8 xl:px-10 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 flex-wrap">
        {/* Social icons */}
        <div className="flex gap-3 items-center">
          {/* Facebook */}
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors flex">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4.5 sm:h-4.5">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors flex">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4.5 sm:h-4.5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="m-0 text-xs text-gray-500 flex-1 text-center" style={{ fontSize: "12px" }}>
          Copyright 2026 Sleep Country Canada. All rights reserved
        </p>

        {/* Links */}
        <div className="flex gap-4 sm:gap-5 items-center flex-wrap">
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors text-xs" style={{ fontSize: "12px", textDecoration: "none" }}>Privacy Policy</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors text-xs" style={{ fontSize: "12px", textDecoration: "none" }}>Terms &amp; Conditions</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors text-xs" style={{ fontSize: "12px", textDecoration: "none" }}>*Offers Detail Page</a>
        </div>

        {/* Payment icons */}
        <div className="flex gap-1.5 sm:gap-2 items-center flex-wrap">
          {/* VISA */}
          <div className="bg-[#1a1f71] rounded px-1.5 sm:px-2 py-0.5 sm:py-1 h-6 flex items-center">
            <span className="text-white font-black text-[9px] sm:text-[10px] italic tracking-wide" style={{ letterSpacing: "0.5px" }}>VISA</span>
          </div>
          {/* Mastercard */}
          <div className="rounded border border-gray-300 px-1 sm:px-1.5 py-0.5 sm:py-1 h-6 flex items-center bg-white">
            <div className="flex items-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#eb001b]" />
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#f79e1b] -ml-1.5 sm:-ml-2" />
            </div>
          </div>
          {/* AmEx */}
          <div className="bg-[#2e77bc] rounded px-1.5 sm:px-2 py-0.5 sm:py-1 h-6 flex items-center">
            <span className="text-white font-bold text-[8px] sm:text-[9px] lg:text-[10px] tracking-wide" style={{ letterSpacing: "0.3px" }}>AMERICAN<br/>EXPRESS</span>
          </div>
          {/* PayPal */}
          <div className="bg-white border border-gray-300 rounded px-1.5 sm:px-2 py-0.5 sm:py-1 h-6 flex items-center">
            <span className="text-[#253b80] font-black text-[9px] sm:text-[10px]">Pay</span>
            <span className="text-[#179bd7] font-black text-[9px] sm:text-[10px]">Pal</span>
          </div>
          {/* Affirm */}
          <div className="bg-white border border-gray-300 rounded px-1.5 sm:px-2 py-0.5 sm:py-1 h-6 flex items-center">
            <span className="text-black font-bold text-[9px] sm:text-[10px]">affirm</span>
          </div>
          {/* Flexiti */}
          <div className="bg-white border border-gray-300 rounded px-1.5 sm:px-2 py-0.5 sm:py-1 h-6 flex items-center">
            <span className="text-[#e85d26] font-bold text-[9px] sm:text-[10px]">flexiti</span>
          </div>
        </div>
      </div>

      {/* ── Sticky bottom product bar ── */}
      <div className="bg-white border-t border-[#e0d9d0] px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5">
        {/* Product name + rating */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xs sm:text-sm font-medium text-gray-800" style={{ fontSize: "11px sm:12px lg:13px" }}>Kingsdown Studio Cares...</span>
          {/* Stars */}
          <span className="flex items-center gap-0.5">
            {[1, 2, 3, 4].map(i => (
              <svg key={i} viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" fill="#f5a623">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
            {/* Half star */}
            <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4">
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#f5a623" />
                  <stop offset="50%" stopColor="#d8d0c6" />
                </linearGradient>
              </defs>
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#half)" />
            </svg>
          </span>
          <span className="text-xs sm:text-sm text-gray-800" style={{ fontSize: "11px sm:12px lg:13px" }}>4.5 (156)</span>
          <span className="text-xs sm:text-sm text-gray-800 cursor-pointer" style={{ fontSize: "11px sm:12px lg:13px" }}>▾</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 sm:gap-3 flex-col sm:flex-row w-full sm:w-auto">
          <button className="border border-gray-800 bg-white text-gray-800 rounded px-4 sm:px-6 lg:px-10 py-2 text-xs sm:text-sm font-medium cursor-pointer min-w-[100px] sm:min-w-[120px] lg:min-w-[160px] transition-colors hover:bg-gray-50">
            Buy Now
          </button>
          <button className="border border-gray-300 bg-[#e8e3dc] text-gray-800 rounded px-3 sm:px-5 lg:px-8 py-2 text-xs sm:text-sm font-medium cursor-pointer flex items-center gap-1.5 sm:gap-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[160px] transition-colors hover:bg-[#d8d2cc] justify-center">
            Add to Cart
            <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}


  