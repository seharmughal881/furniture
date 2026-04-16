import { useState } from "react";

const StarIcon = ({ filled, half }: { filled: boolean; half?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5"
    fill={filled || half ? "#C9963A" : "none"} stroke="#C9963A" strokeWidth="1.5">
    {half ? (
      <>
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stopColor="#C9963A" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
          fill="url(#halfGrad)" stroke="#C9963A" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ) : (
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        fill={filled ? "#C9963A" : "none"} stroke="#C9963A" strokeWidth="1.5" strokeLinejoin="round" />
    )}
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 ml-2"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    <line x1="18" y1="2" x2="22" y2="6" /><line x1="22" y1="2" x2="18" y2="6" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const FireIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 mr-1"
    fill="white" stroke="none">
    <path d="M12 2C12 2 8 7 8 11c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.5-.8-2.8-1.5-3.8C14.5 7.2 14 7.6 14 8c0-.7-.2-1.3-.5-1.9C13.1 5.4 12.6 4 12 2z" />
    <path d="M12 22C8.13 22 5 18.87 5 15c0-3.5 2.33-6.53 5-8.5C10 8 10 9 10 9c0 1.1.9 2 2 2s2-.9 2-2c0-.4-.1-.77-.27-1.1C15.5 9.4 17 11.8 17 15c0 3.87-3.13 7-7 7z" />
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 ml-1 inline-block"
    fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 mr-2"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const MattressImage = () => (
  <div className="w-[160px] h-[140px] flex-shrink-0 rounded overflow-hidden bg-gray-100">
    <svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="160" height="140" fill="#e8e0d8" />
      <rect x="20" y="50" width="130" height="60" rx="4" fill="#b0a898" />
      <rect x="20" y="50" width="130" height="15" rx="4" fill="#d4cec6" />
      <rect x="20" y="50" width="130" height="6" rx="3" fill="#fff" opacity="0.7" />
      <ellipse cx="55" cy="50" rx="12" ry="5" fill="#c0b8b0" />
      <rect x="25" y="55" width="120" height="2" fill="#9a9088" opacity="0.5" />
      <rect x="25" y="60" width="120" height="2" fill="#9a9088" opacity="0.3" />
      <rect x="25" y="65" width="120" height="2" fill="#9a9088" opacity="0.3" />
      <ellipse cx="80" cy="50" rx="30" ry="4" fill="#c8c0b8" />
      <path d="M40 45 C40 38, 50 35, 55 35 C60 35, 65 38, 63 45" fill="#d8b090" />
      <path d="M40 45 C38 48, 35 52, 38 60" stroke="#c09870" strokeWidth="2" fill="none" />
      <path d="M55 35 C52 28, 48 25, 45 22" stroke="#c09870" strokeWidth="2" fill="none" />
      <path d="M63 45 C70 43, 72 48, 68 55" stroke="#c09870" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);

const sizes = [
  { label: "Twin",     price: "$1,049.00", disabled: false },
  { label: "Full",     price: "$1,099.00", disabled: false },
  { label: "Queen",    price: "$1,299.00", disabled: false },
  { label: "King",     price: "$1,699.00", disabled: false },
  { label: "Twin Xl",  price: "$1,079.00", disabled: false },
  { label: "Rv Queen", price: "$1,461.75", disabled: true  },
];

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("Twin");
  const [dropdownSize, setDropdownSize] = useState("Twin");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "white", fontFamily: "'Inter', sans-serif" }}>
      <div className="max-w-4xl mx-auto px-4 py-8">

        {/* Hot Price badge */}
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-bold text-white"
            style={{ backgroundColor: "#a51c30" }}>
            <FireIcon />Hot Price
          </span>
        </div>

        {/* Price + Financing row */}
        <div className="flex items-start gap-6 mb-3">
          {/* Main price */}
          <div className="flex-shrink-0">
            <div className="flex items-start leading-none mb-2">
              <span style={{ color: "#a51c30", fontSize: "22px", fontWeight: 700, lineHeight: "1", marginTop: "4px" }}>$</span>
              <span style={{ color: "#a51c30", fontSize: "52px", fontWeight: 700, lineHeight: "1", letterSpacing: "-1px" }}>1,461</span>
              <span style={{ color: "#a51c30", fontSize: "22px", fontWeight: 700, lineHeight: "1", marginTop: "4px" }}>.75</span>
            </div>
            <div className="text-sm mb-1" style={{ color: "#555" }}>
              Was <span style={{ textDecoration: "line-through", color: "#555" }}>$1,949.00</span>
            </div>
            <div className="text-sm font-semibold flex items-center" style={{ color: "#a51c30" }}>
              Save $487.25<InfoIcon />
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", backgroundColor: "#ccc", alignSelf: "stretch", margin: "0 4px" }} />

          {/* Financing */}
          <div>
            <div className="flex items-start leading-none mb-1">
              <span style={{ color: "#1a1a1a", fontSize: "14px", fontWeight: 400, marginTop: "3px" }}>From $</span>
              <span style={{ color: "#1a1a1a", fontSize: "36px", fontWeight: 700, lineHeight: "1", letterSpacing: "-0.5px" }}>40</span>
              <span style={{ color: "#1a1a1a", fontSize: "14px", fontWeight: 400, marginTop: "3px" }}>.60/mo.*</span>
            </div>
            <div className="text-sm mb-1" style={{ color: "#333" }}>
              For <strong>36 months</strong>
            </div>
            <a href="#" className="text-sm underline" style={{ color: "#1a3a6b" }}>
              *View financing plans
            </a>
          </div>
        </div>

        {/* Delivery */}
        <div className="text-sm mb-6" style={{ color: "#333" }}>
          Get it by <strong>Fri. Apr 24</strong>{" "}
          <a href="#" className="underline inline-flex items-center gap-0.5" style={{ color: "#1a3a6b" }}>
            Ontario - L6T 4N8<ChevronDownIcon />
          </a>
        </div>

        {/* Size selector */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-semibold" style={{ color: "#1a1a1a", fontSize: "16px" }}>Size:</span>
            <a href="#" className="underline font-semibold" style={{ color: "#1a3a6b", fontSize: "16px" }}>Sizing Guide</a>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {sizes.map((s) => (
              <button
                key={s.label}
                disabled={s.disabled}
                onClick={() => !s.disabled && setSelectedSize(s.label)}
                className="rounded-lg border-2 py-3 px-2 flex flex-col items-center justify-center transition-colors"
                style={{
                  borderColor: s.disabled ? "#ccc" : selectedSize === s.label ? "#2d3748" : "#ccc",
                  backgroundColor: s.disabled ? "#f0eeec" : "#fff",
                  cursor: s.disabled ? "not-allowed" : "pointer",
                  minHeight: "72px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span className="font-semibold" style={{ color: s.disabled ? "#aaa" : "#1a1a1a", fontSize: "15px" }}>
                  {s.label}
                </span>
                <span style={{ color: s.disabled ? "#aaa" : "#555", fontSize: "13px", textDecoration: s.disabled ? "line-through" : "none" }}>
                  {s.price}
                </span>
                {s.disabled && (
                  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                    viewBox="0 0 100 72" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="72" stroke="#bbb" strokeWidth="1.5" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Buy Now / Add to Cart */}
        <div className="flex gap-4 mb-8">
          <button className="flex-1 py-4 px-8 rounded-lg border-2 text-base font-semibold transition-colors hover:bg-gray-50"
            style={{ borderColor: "#2d3748", color: "#2d3748", backgroundColor: "transparent" }}>
            Buy Now
          </button>
          <button className="flex-1 py-4 px-8 rounded-lg font-semibold flex items-center justify-center transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#cc2228", color: "#ffffff", fontSize: "16px" }}>
            Add to Cart<CartIcon />
          </button>
        </div>

        {/* Complete your bedroom */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4" style={{ color: "#1a1a1a" }}>
            Complete your bedroom
          </h2>

          <div className="rounded-xl border p-5 flex gap-5"
            style={{ backgroundColor: "#ffffff", borderColor: "#ddd8d0" }}>
            <MattressImage />

            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-semibold leading-snug mb-2"
                    style={{ color: "#1a1a1a", fontSize: "16px", lineHeight: "1.3" }}>
                    Bloom Essentials Mattress<br />Protector
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <StarIcon filled={true} /><StarIcon filled={true} /><StarIcon filled={true} />
                      <StarIcon filled={true} /><StarIcon filled={false} half={true} />
                    </div>
                    <span className="text-sm flex items-center gap-1" style={{ color: "#4a5568" }}>
                      (209)<ChevronDownIcon />
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#1a1a1a" }}>
                      <span style={{ fontSize: "13px", fontWeight: 500, verticalAlign: "super" }}>$</span>
                      <span style={{ fontSize: "26px", fontWeight: 700 }}>119</span>
                      <span style={{ fontSize: "14px", fontWeight: 400 }}>.00</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between min-w-[200px]">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: "#4a5568", fontWeight: 500 }}>Size:</label>
                    <div className="relative">
                      <select value={dropdownSize} onChange={(e) => setDropdownSize(e.target.value)}
                        className="w-full appearance-none rounded border px-3 py-2.5 pr-8 text-sm focus:outline-none"
                        style={{ borderColor: "#ccc", backgroundColor: "#f9f9f9", color: "#1a1a1a" }}>
                        <option>Twin</option><option>Twin XL</option><option>Full</option>
                        <option>Queen</option><option>King</option><option>Cal King</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center" style={{ color: "#666" }}>
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-3 px-4 rounded text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#2d3a4f", color: "#ffffff" }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
           
            <div className="rounded-xl border p-5 mt-5 flex gap-5"
            style={{ backgroundColor: "#ffffff", borderColor: "#ddd8d0" }}>
            <img src="https://cdn11.bigcommerce.com/s-j35z99636s/images/stencil/320w/products/737/8217/3-02050SBPB-01280-KINGSDOWN-BASE-Ecomm-01__11488.1720191448.jpg" alt="" className="w-[166px] h-auto rounded-lg object-cover" />
    
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-semibold leading-snug mb-2"
                    style={{ color: "#1a1a1a", fontSize: "16px", lineHeight: "1.3" }}>
                    Bloom Essentials Mattress<br />Protector
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <StarIcon filled={true} /><StarIcon filled={true} /><StarIcon filled={true} />
                      <StarIcon filled={true} /><StarIcon filled={false} half={true} />
                    </div>
                    <span className="text-sm flex items-center gap-1" style={{ color: "#4a5568" }}>
                      (209)<ChevronDownIcon />
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#1a1a1a" }}>
                      <span style={{ fontSize: "13px", fontWeight: 500, verticalAlign: "super" }}>$</span>
                      <span style={{ fontSize: "26px", fontWeight: 700 }}>119</span>
                      <span style={{ fontSize: "14px", fontWeight: 400 }}>.00</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between min-w-[200px]">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: "#4a5568", fontWeight: 500 }}>Size:</label>
                    <div className="relative">
                      <select value={dropdownSize} onChange={(e) => setDropdownSize(e.target.value)}
                        className="w-full appearance-none rounded border px-3 py-2.5 pr-8 text-sm focus:outline-none"
                        style={{ borderColor: "#ccc", backgroundColor: "#f9f9f9", color: "#1a1a1a" }}>
                        <option>Twin</option><option>Twin XL</option><option>Full</option>
                        <option>Queen</option><option>King</option><option>Cal King</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center" style={{ color: "#666" }}>
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-3 px-4 rounded text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#2d3a4f", color: "#ffffff" }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
           <div className="rounded-xl border p-5 mt-5 flex gap-5"
            style={{ backgroundColor: "#ffffff", borderColor: "#ddd8d0" }}>
            <img src="https://cdn11.bigcommerce.com/s-j35z99636s/images/stencil/320w/products/983/8830/9SOAIRBK-3_NEW_SOHO_AIRSCAPE_BASE_BLACKWARM_MODERN_PD_MIX_2_4_01255__45086.1721053420.jpg" alt="" className="w-[166px] h-auto rounded-lg object-cover" />
    
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-semibold leading-snug mb-2"
                    style={{ color: "#1a1a1a", fontSize: "16px", lineHeight: "1.3" }}>
                    Bloom Essentials Mattress<br />Protector
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <StarIcon filled={true} /><StarIcon filled={true} /><StarIcon filled={true} />
                      <StarIcon filled={true} /><StarIcon filled={false} half={true} />
                    </div>
                    <span className="text-sm flex items-center gap-1" style={{ color: "#4a5568" }}>
                      (209)<ChevronDownIcon />
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#1a1a1a" }}>
                      <span style={{ fontSize: "13px", fontWeight: 500, verticalAlign: "super" }}>$</span>
                      <span style={{ fontSize: "26px", fontWeight: 700 }}>119</span>
                      <span style={{ fontSize: "14px", fontWeight: 400 }}>.00</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between min-w-[200px]">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: "#4a5568", fontWeight: 500 }}>Size:</label>
                    <div className="relative">
                      <select value={dropdownSize} onChange={(e) => setDropdownSize(e.target.value)}
                        className="w-full appearance-none rounded border px-3 py-2.5 pr-8 text-sm focus:outline-none"
                        style={{ borderColor: "#ccc", backgroundColor: "#f9f9f9", color: "#1a1a1a" }}>
                        <option>Twin</option><option>Twin XL</option><option>Full</option>
                        <option>Queen</option><option>King</option><option>Cal King</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center" style={{ color: "#666" }}>
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-3 px-4 rounded text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#2d3a4f", color: "#ffffff" }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
           {/* <div className="rounded-xl border p-5 mt-5 flex gap-5"
            style={{ backgroundColor: "#ffffff", borderColor: "#ddd8d0" }}>
            <img src="https://cdn11.bigcommerce.com/s-j35z99636s/images/stencil/320w/products/983/8830/9SOAIRBK-3_NEW_SOHO_AIRSCAPE_BASE_BLACKWARM_MODERN_PD_MIX_2_4_01255__45086.1721053420.jpg" alt="" className="w-166 h-auto rounded-lg object-cover" />
    
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="font-semibold leading-snug mb-2"
                    style={{ color: "#1a1a1a", fontSize: "16px", lineHeight: "1.3" }}>
                    Bloom Essentials Mattress<br />Protector
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <StarIcon filled={true} /><StarIcon filled={true} /><StarIcon filled={true} />
                      <StarIcon filled={true} /><StarIcon filled={false} half={true} />
                    </div>
                    <span className="text-sm flex items-center gap-1" style={{ color: "#4a5568" }}>
                      (209)<ChevronDownIcon />
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "#1a1a1a" }}>
                      <span style={{ fontSize: "13px", fontWeight: 500, verticalAlign: "super" }}>$</span>
                      <span style={{ fontSize: "26px", fontWeight: 700 }}>119</span>
                      <span style={{ fontSize: "14px", fontWeight: 400 }}>.00</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between min-w-[200px]">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: "#4a5568", fontWeight: 500 }}>Size:</label>
                    <div className="relative">
                      <select value={dropdownSize} onChange={(e) => setDropdownSize(e.target.value)}
                        className="w-full appearance-none rounded border px-3 py-2.5 pr-8 text-sm focus:outline-none"
                        style={{ borderColor: "#ccc", backgroundColor: "#f9f9f9", color: "#1a1a1a" }}>
                        <option>Twin</option><option>Twin XL</option><option>Full</option>
                        <option>Queen</option><option>King</option><option>Cal King</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center" style={{ color: "#666" }}>
                        <ChevronDownIcon />
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 w-full py-3 px-4 rounded text-sm font-semibold transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#2d3a4f", color: "#ffffff" }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Chat + Scroll Up — fixed bottom right */}
      <div className="fixed bottom-6 right-6 flex items-center gap-3" style={{ zIndex: 50 }}>
        <button className="flex items-center px-5 py-3 rounded-full font-semibold text-sm text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#1a1a2e", fontSize: "15px" }}>
          <ChatIcon />Chat with a Sleep Expert
        </button>
        <button className="flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#9ca3af", width: "42px", height: "42px", color: "#fff" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ChevronUpIcon />
        </button>
      </div>
    </div>
  );
}