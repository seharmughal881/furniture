import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, MessageCircle, Video } from "lucide-react";
import Sleep from "./Sleep";

type SectionKey = "features" | "aboutBrand" | "warranty";

const specs = [
  {
    label: "Dimensions",
    value: (
      <ul className="list-disc list-inside space-y-0.5 text-sm">
        <li>Twin: 38 x 75 x 13.5H</li>
        <li>Twin XL: 38 x 80 x 13.5H</li>
        <li>Full: 54 x 75 x 13.5H</li>
        <li>Queen: 60 x 80 x 13.5H</li>
        <li>King: 76 x 80 x 13.5H</li>
        <li>CA King: 72 x 84 x 13.5H</li>
      </ul>
    ),
  },
  { label: "Mattress Construction Type", value: "Innerspring" },
  { label: "Mattress Pillow Top Style", value: "Euro Top" },
  { label: "Firmness", value: "Medium" },
  { label: "Temperature Regulating", value: "No" },
  { label: "Motion Control", value: "No" },
  { label: "Remove From Roll", value: "No" },
  { label: "Adjustable", value: "No" },
  { label: "Removable Cover", value: "No" },
  { label: "CertiPUR-US", value: "No" },
  { label: "OEKO-TEX Compatible", value: "No" },
  { label: "Country of Origin", value: "No" },
  { label: "Online Only", value: "No" },
];

export default function ProductDetail() {
  const [open, setOpen] = useState<Record<SectionKey, boolean>>({
    features: true,
    aboutBrand: false,
    warranty: false,
  });

  const toggle = (key: SectionKey) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // SleepCountry specific data
  const completeBedroom = [
    {
      name: "Bloom Essentials Mattress Protector",
      price: "$49.99",
      description: "Protect your investment",
      image: "/protector.jpg"
    },
    {
      name: "Kingsdown Box Spring",
      price: "$299.99",
      description: "Perfect foundation support",
      image: "/boxspring.jpg"
    },
    {
      name: "Soho Airscape Platform",
      price: "$449.99",
      description: "Modern platform bed frame",
      image: "/platform.jpg"
    }
  ];

  const highlights = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <path d="M4 36 Q12 28 24 32 Q36 28 44 36" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M4 30 Q12 22 24 26 Q36 22 44 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M4 24 Q12 16 24 20 Q36 16 44 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <line x1="12" y1="38" x2="12" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="18" y1="38" x2="18" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="30" y1="38" x2="30" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="36" y1="38" x2="36" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 42 L40 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      label: "Comfort Level:",
      value: "Plush",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="6" y="14" width="36" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="8" y="20" width="32" height="5" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="6" y="25" width="36" height="5" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="8" y="30" width="32" height="5" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="10" y1="14" x2="10" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="16" y1="14" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="22" y1="14" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="28" y1="14" x2="28" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="34" y1="14" x2="34" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      label: "Mattress Type:",
      value: "Innerspring",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="8" y="16" width="32" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="12" y1="16" x2="12" y2="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
          <line x1="18" y1="16" x2="18" y2="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
          <line x1="24" y1="16" x2="24" y2="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
          <line x1="30" y1="16" x2="30" y2="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
          <line x1="36" y1="16" x2="36" y2="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
          <path d="M5 24 L3 24 M5 28 L3 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M43 24 L45 24 M43 28 L45 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M5 20 L3 28 M43 20 L45 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      label: "Mattress Thickness:",
      value: '13.5"',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <path d="M6 30 Q14 24 24 28 Q34 24 42 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <rect x="6" y="30" width="36" height="6" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
          <line x1="6" y1="38" x2="6" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="42" y1="38" x2="42" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="6" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="15" y1="30" x2="15" y2="36" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
          <line x1="24" y1="30" x2="24" y2="36" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
          <line x1="33" y1="30" x2="33" y2="36" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
        </svg>
      ),
      label: "Adjustable Base",
      value: "Compatible",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <path d="M6 28 Q12 22 18 26 Q24 30 30 24 Q36 18 42 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="32" x2="12" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="18" y1="32" x2="18" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="24" y1="32" x2="24" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="30" y1="32" x2="30" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="36" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="18" cy="36" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="24" cy="36" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="30" cy="36" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      label: "Pressure Point Relief",
      value: "",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <path d="M24 6 L30 12 L36 8 L34 16 L42 18 L36 22 L38 30 L30 26 L24 32 L18 26 L10 30 L12 22 L6 18 L14 16 L12 8 L18 12 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
          <path d="M20 20 L22 24 L28 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      label: "Antimicrobial",
      value: "",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="20" y="8" width="8" height="26" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M24 34 L24 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="16" y1="40" x2="32" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M28 16 Q34 14 34 20 Q34 26 28 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </svg>
      ),
      label: "Temperature",
      value: "Regulating",
    },
  ];

  return (
    <div className="w-full bg-white min-h-screen" style={{ fontFamily: 'Gilroy, sans-serif' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h1> */}

        <div
          className="bg-white rounded-2xl border border-black p-4 sm:p-6 lg:p-8"
          style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
        >
          <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">Mattress Highlights:</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 gap-y-6 sm:gap-y-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#2d5f8a] flex-shrink-0 mt-0.5 w-8 h-8 sm:w-10 sm:h-10">{item.icon}</span>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-[#2d5f8a] leading-snug">{item.label}</p>
                  {item.value && (
                    <p className="text-xs sm:text-sm text-[#2d5f8a] leading-snug">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 pb-3 border-b border-gray-200" style={{ fontFamily: 'Gilroy, sans-serif' }}>
        <h2 className="text-gray-900 mb-2" style={{ fontSize: '16px sm:18px', fontFamily: 'Gilroy, sans-serif' }}>Description</h2>
        <p className="text-gray-700 leading-relaxed" style={{ fontSize: '14px sm:16px', fontFamily: 'Gilroy, sans-serif' }}>
          The Studio Convo Euro Top Mattress offers a plush, conforming feel designed to gently
          contour your bodys pressure points for a more informed sleep experience. Ideal for sleepers
        </p>
        <button className="flex items-center gap-1 mt-1 text-blue-700 font-medium hover:underline" style={{ fontSize: '14px sm:16px', fontFamily: 'Gilroy, sans-serif' }}>
          <span className="text-blue-600 mr-0.5 text-sm sm:text-base leading-none">&#x25B6;</span>
          Read More
        </button>
      </div>

      {/* Features & Specifications */}
      <div className="border-b border-gray-200" style={{ fontFamily: 'Gilroy, sans-serif' }}>
        <button
          className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left"
          onClick={() => toggle("features")}
        >
          <span className="text-gray-900" style={{ fontSize: '16px sm:18px', fontFamily: 'Gilroy, sans-serif' }}>Features & Specifications</span>
          {open.features ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
        </button>

        {open.features && (
          <div className="px-4 sm:px-6 lg:px-8 pb-4">
            <div className="block sm:hidden">
              {/* Mobile layout - stacked cards */}
              <div className="space-y-3">
                {specs.map((row, i) => (
                  <div key={i} className={`p-3 rounded-lg border ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    <div className="font-medium text-gray-800 mb-1" style={{ fontSize: '14px', fontFamily: 'Gilroy, sans-serif' }}>
                      {row.label}
                    </div>
                    <div className="text-gray-700" style={{ fontSize: '13px', fontFamily: 'Gilroy, sans-serif' }}>
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden sm:block">
              {/* Desktop layout - table */}
              <table className="w-full border-collapse" style={{ fontSize: '14px sm:16px', fontFamily: 'Gilroy, sans-serif' }}>
                <tbody>
                  {specs.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="py-2 pr-4 pl-2 text-gray-800 font-medium w-1/2 align-top border border-gray-200" style={{ fontSize: '14px sm:16px', fontFamily: 'Gilroy, sans-serif' }}>
                        {row.label}
                      </td>
                      <td className="py-2 px-2 text-gray-700 w-1/2 align-top border border-gray-200" style={{ fontSize: '14px sm:16px', fontFamily: 'Gilroy, sans-serif' }}>
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* About This Brand */}
      <div className="border-b border-gray-200" style={{ fontFamily: 'Gilroy, sans-serif' }}>
        <button
          className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left"
          onClick={() => toggle("aboutBrand")}
        >
          <span className="text-gray-900" style={{ fontSize: '16px sm:18px', fontFamily: 'Gilroy, sans-serif' }}>About This Brand</span>
          {open.aboutBrand ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
        </button>
        {open.aboutBrand && (
          <div className="px-4 sm:px-6 lg:px-8 pb-4" style={{ fontSize: '14px sm:16px', fontFamily: 'Gilroy, sans-serif' }}>
            <p>This brand is dedicated to creating high-quality sleep products designed to deliver lasting comfort and support.</p>
          </div>
        )}
      </div>

      {/* 10 Year Warranty */}
      <div className="border-b border-gray-200" style={{ fontFamily: 'Gilroy, sans-serif' }}>
        <button
          className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-left"
          onClick={() => toggle("warranty")}
        >
          <span className="text-gray-900" style={{ fontSize: '16px sm:18px', fontFamily: 'Gilroy, sans-serif' }}>10 Year Warranty</span>
          {open.warranty ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
        </button>
        {open.warranty && (
          <div className="px-4 sm:px-6 lg:px-8 pb-4" style={{ fontSize: '14px sm:16px', fontFamily: 'Gilroy, sans-serif' }}>
            <p>This mattress is backed by a 10-year limited warranty covering manufacturing defects and structural integrity.</p>
          </div>
        )}
      </div>

      {/* Sleep Component */}
      {/* <Sleep /> */}

      {/* Sleep Expert Help Section */}
      {/* <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg" style={{ fontFamily: "Gilroy, sans-serif" }}>
        <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4" style={{ color: "#1a1a1a" }}>
          Our Sleep Experts are here to help.
        </h3>
        <p className="text-xs sm:text-sm mb-4 sm:mb-6" style={{ color: "#666" }}>
          Go ahead, ask them anything.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="tel:1-844-748-0260" 
             className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors hover:bg-gray-50"
             style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}>
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.27 6.27l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="text-xs sm:text-sm">Call an Expert</span>
          </a>
          <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 rounded-lg font-semibold text-xs sm:text-sm text-white transition-colors hover:bg-blue-700">
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span className="text-xs sm:text-sm">Chat with Us</span>
          </button>
          <a href="#" 
             className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors hover:bg-gray-50"
             style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}>
            <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-xs sm:text-sm">Visit a Store</span>
          </a>
        </div>
      </div> */}

      {/* Complete Your Bedroom Section */}
      {/* <div className="mt-6 sm:mt-8 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "Gilroy, sans-serif" }}>
        <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4" style={{ color: "#1a1a1a" }}>
          Complete your bedroom
        </h3>
        <div className="space-y-2 sm:space-y-3">
          {completeBedroom.map((item, index) => (
            <a key={index} href="#" className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm font-medium" style={{ fontFamily: "Gilroy, sans-serif" }}>{item.name}</div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
              <span className="text-xs sm:text-sm font-semibold flex-shrink-0" style={{ color: "#a51c30" }}>{item.price}</span>
            </a>
          ))}
        </div>
      </div> */}

      {/* Sleep Component */}
      <Sleep />

    </div>
  );
}