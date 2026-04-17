import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, MessageCircle, Video } from "lucide-react";
import Sleep from "./Sleep";

type SectionKey = "features" | "aboutBrand" | "warranty";

const specs = [
  {
    label: "Dimensions",
    value: (
      <ul className="list-disc list-inside space-y-0.5 text-sm">
        <li>Twin: 38" x 75" x 13.5"H</li>
        <li>Twin XL: 38" x 80" x 13.5"H</li>
        <li>Full: 54" x 75" x 13.5"H</li>
        <li>Queen: 60" x 80" x 13.5"H</li>
        <li>King: 76" x 80" x 13.5"H</li>
        <li>CA King: 72" x 84" x 13.5"H</li>
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
    <div className="max-w-2xl mx-auto bg-white min-h-screen" style={{ fontFamily: 'Gilroy, sans-serif' }}>
 <div className="max-w-4xl mx-auto">
        {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h1> */}

        <div
          className="bg-white rounded-2xl border border-black p-8"
          style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
        >
          <h2 className="text-lg font-bold text-gray-800 mb-8">Mattress Highlights:</h2>

          <div className="grid grid-cols-3 gap-x-6 gap-y-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#2d5f8a] flex-shrink-0 mt-0.5">{item.icon}</span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#2d5f8a] leading-snug">{item.label}</p>
                  {item.value && (
                    <p className="text-sm text-[#2d5f8a] leading-snug">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 pt-5 pb-3 border-b border-gray-200" style={{ fontFamily: 'Gilroy, sans-serif' }}>
        <h2 className="text-gray-900 mb-2" style={{ fontSize: '18px', fontFamily: 'Gilroy, sans-serif' }}>Description</h2>
        <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px', fontFamily: 'Gilroy, sans-serif' }}>
          The Studio Convo Euro Top Mattress offers a plush, conforming feel designed to gently
          contour your body's pressure points for a more informed sleep experience. Ideal for sleepers
        </p>
        <button className="flex items-center gap-1 mt-1 text-blue-700 font-medium hover:underline" style={{ fontSize: '16px', fontFamily: 'Gilroy, sans-serif' }}>
          <span className="text-blue-600 mr-0.5 text-base leading-none">&#x25B6;</span>
          Read More
        </button>
      </div>

      {/* Features & Specifications */}
      <div className="border-b border-gray-200" style={{ fontFamily: 'Gilroy, sans-serif' }}>
        <button
          className="w-full flex items-center justify-between px-4 py-4 text-left"
          onClick={() => toggle("features")}
        >
          <span className="text-gray-900" style={{ fontSize: '18px', fontFamily: 'Gilroy, sans-serif' }}>Features & Specifications</span>
          {open.features ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
        </button>

        {open.features && (
          <div className="px-4 pb-4">
            <table className="w-full border-collapse" style={{ fontSize: '16px', fontFamily: 'Gilroy, sans-serif' }}>
              <tbody>
                {specs.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-2 pr-4 pl-2 text-gray-800 font-medium w-1/2 align-top border border-gray-200" style={{ fontSize: '16px', fontFamily: 'Gilroy, sans-serif' }}>
                      {row.label}
                    </td>
                    <td className="py-2 px-2 text-gray-700 w-1/2 align-top border border-gray-200" style={{ fontSize: '16px', fontFamily: 'Gilroy, sans-serif' }}>
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* About This Brand */}
      <div className="border-b border-gray-200" style={{ fontFamily: 'Gilroy, sans-serif' }}>
        <button
          className="w-full flex items-center justify-between px-4 py-4 text-left"
          onClick={() => toggle("aboutBrand")}
        >
          <span className="text-gray-900" style={{ fontSize: '18px', fontFamily: 'Gilroy, sans-serif' }}>About This Brand</span>
          {open.aboutBrand ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
        </button>
        {open.aboutBrand && (
          <div className="px-4 pb-4" style={{ fontSize: '16px', fontFamily: 'Gilroy, sans-serif' }}>
            <p>This brand is dedicated to creating high-quality sleep products designed to deliver lasting comfort and support.</p>
          </div>
        )}
      </div>

      {/* 10 Year Warranty */}
      <div className="border-b border-gray-200" style={{ fontFamily: 'Gilroy, sans-serif' }}>
        <button
          className="w-full flex items-center justify-between px-4 py-4 text-left"
          onClick={() => toggle("warranty")}
        >
          <span className="text-gray-900" style={{ fontSize: '18px', fontFamily: 'Gilroy, sans-serif' }}>10 Year Warranty</span>
          {open.warranty ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
        </button>
        {open.warranty && (
          <div className="px-4 pb-4" style={{ fontSize: '16px', fontFamily: 'Gilroy, sans-serif' }}>
            <p>This mattress is backed by a 10-year limited warranty covering manufacturing defects and structural integrity.</p>
          </div>
        )}
      </div>

    
      {/* <Sleep/> */}
<div
      style={{
        // minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#f0ede8",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        // padding: "24px",
      }}
    >
      <div
        style={{
          backgroundColor: "#f0ede8",
          border: "1px solid #d9d5ce",
          borderRadius: "12px",
          padding: "24px 32px",
          maxWidth: "760px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "28px",
          }}
        >
          <img
            src="https://s7d9.scene7.com/is/image/sleepcountry/23_SLP_RedCouch_3516_GF_grac13:1-1"
            alt="Sleep Expert"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "top center",
              flexShrink: 0,
            }}
          />
          <div>
            <p
              style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: "700",
                color: "#1a1a1a",
                lineHeight: "1.3",
                fontFamily: "'Georgia', 'Times New Roman', serif",
              }}
            >
              Our Sleep Experts are here to help.
            </p>
            <p
              style={{
                margin: "6px 0 0 0",
                fontSize: "15px",
                color: "#3d3d3d",
                fontWeight: "400",
                fontFamily: "'Georgia', 'Times New Roman', serif",
              }}
            >
              Go ahead, ask them anything.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <button
            style={{
              flex: "1",
              minWidth: "180px",
              // padding: "14px 20px",
              border: "1.5px solid #2d2d2d",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              color: "#1a1a1a",
              fontSize: "15px",
              fontWeight: "600",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
          >
            Call an Expert
            <HeadsetIcon />
          </button>
          <button
            style={{
              flex: "1",
              minWidth: "180px",
              padding: "14px 20px",
              border: "1.5px solid #2d2d2d",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              color: "#1a1a1a",
              fontSize: "15px",
              fontWeight: "600",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
          >
            Chat with Us
            <ChatIcon />
          </button>
          <button
            style={{
              flex: "1",
              minWidth: "180px",
              padding: "14px 20px",
              border: "1.5px solid #2d2d2d",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              color: "#1a1a1a",
              fontSize: "15px",
              fontWeight: "600",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
          >
            Visit a Store
            <StoreIcon />
          </button>
        </div>
      </div>
    </div>

    </div>
  );
}

function HeadsetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}