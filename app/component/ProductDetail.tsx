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

  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen" style={{ fontFamily: 'Gilroy, sans-serif' }}>

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