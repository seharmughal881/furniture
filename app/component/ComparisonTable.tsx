import { Heart, Flame, MessageCircle, ChevronUp, ChevronDown, Check } from "lucide-react";

const BLANK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='160' viewBox='0 0 200 160'%3E%3Crect fill='%23e5ddd0' width='200' height='160'/%3E%3C/svg%3E";

const products = [
  {
    id: 1,
    name: "Kingsdown Studio Caresa Mattress",
    isCurrentItem: true,
    isHotPrice: true,
    imageSrc: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop&auto=format",
    price: "$1,299", cents: ".00", wasPrice: "$1,849.00",
    rating: 4.5, reviewCount: 156, hasDropdown: true,
    size: "Queen", firmness: "Plush", compositionType: "Innerspring",
    thickness: '13.5"', hasCooling: false,
  },
  {
    id: 2,
    name: "Distinction Series Miramichi...",
    isCurrentItem: false,
    isHotPrice: false,
    imageSrc: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=300&h=200&fit=crop&auto=format",
    price: "$999", cents: ".00", wasPrice: null,
    rating: 3.7, reviewCount: 6, hasDropdown: false,
    size: "Queen", firmness: "Plush", compositionType: "Innerspring",
    thickness: '12.5"', hasCooling: false,
  },
  {
    id: 3,
    name: "Chiropractic C3 Hybrid LP...",
    isCurrentItem: false,
    isHotPrice: false,
    imageSrc: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=300&h=200&fit=crop&auto=format",
    price: "$1,599", cents: ".00", wasPrice: null,
    rating: 0.0, reviewCount: 0, hasDropdown: false,
    size: "Queen", firmness: "Plush", compositionType: "Innerspring",
    thickness: '11"', hasCooling: true,
  },
  {
    id: 4,
    name: "Serta® Perfect Sleeper® Elite...",
    isCurrentItem: false,
    isHotPrice: false,
    imageSrc: "https://images.unsplash.com/photo-1615874694520-474822394e73?w=300&h=200&fit=crop&auto=format",
    price: "$2,099", cents: ".00", wasPrice: null,
    rating: 4.5, reviewCount: 81, hasDropdown: true,
    size: "Queen", firmness: "Plush", compositionType: "Innerspring",
    thickness: '13.5"', hasCooling: false,
  },
  {
    id: 5,
    name: "Kingsdown Silent Partner X3 Mattress",
    isCurrentItem: false,
    isHotPrice: true,
    imageSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop&auto=format",
    price: "$2,199", cents: ".00", wasPrice: "$2,999.00",
    rating: 4.3, reviewCount: 106, hasDropdown: true,
    size: "Queen", firmness: "Plush", compositionType: "Innerspring",
    thickness: '12"', hasCooling: false,
  },
  {
    id: 6,
    name: "Kingsdown Duet Impresario...",
    isCurrentItem: false,
    isHotPrice: false,
    imageSrc: "https://images.unsplash.com/photo-1520080816260-1e90e3f9a4a4?w=300&h=200&fit=crop&auto=format",
    price: "$4,999", cents: ".00", wasPrice: null,
    rating: 4.2, reviewCount: 72, hasDropdown: true,
    size: "Queen", firmness: "Plush", compositionType: "Innerspring",
    thickness: '15.5"', hasCooling: false,
  },
];

const rows = [
  { label: "Price", key: "price" },
  { label: "Reviews", key: "reviews" },
  { label: "Size", key: "size" },
  { label: "Firmness", key: "firmness" },
  { label: "Composition\nType", key: "compositionType" },
  { label: "Cooling", key: "cooling" },
  { label: "Thickness", key: "thickness" },
];

function StarRating({ rating, hasDropdown }: { rating: number; hasDropdown: boolean }) {
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;
  const emptyStars = 5 - Math.ceil(rating);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg key={`f${i}`} width="18" height="18" viewBox="0 0 20 20">
          <polygon points="10,1 12.9,7.3 20,8.3 15,13 16.2,20 10,16.5 3.8,20 5,13 0,8.3 7.1,7.3" fill="#c9a96e" />
        </svg>
      ))}
      {partial > 0 && (
        <svg width="18" height="18" viewBox="0 0 20 20">
          <defs>
            <linearGradient id={`pg-${rating}`} x1="0" x2="1" y1="0" y2="0">
              <stop offset={`${partial * 100}%`} stopColor="#c9a96e" />
              <stop offset={`${partial * 100}%`} stopColor="#d9cfc0" />
            </linearGradient>
          </defs>
          <polygon points="10,1 12.9,7.3 20,8.3 15,13 16.2,20 10,16.5 3.8,20 5,13 0,8.3 7.1,7.3" fill={`url(#pg-${rating})`} />
        </svg>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <svg key={`e${i}`} width="18" height="18" viewBox="0 0 20 20">
          <polygon points="10,1 12.9,7.3 20,8.3 15,13 16.2,20 10,16.5 3.8,20 5,13 0,8.3 7.1,7.3" fill="#d9cfc0" />
        </svg>
      ))}
      {hasDropdown && <ChevronDown size={14} color="#888" style={{ marginLeft: "2px" }} />}
    </div>
  );
}

function ZeroStarRating() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 20 20">
          <polygon points="10,1 12.9,7.3 20,8.3 15,13 16.2,20 10,16.5 3.8,20 5,13 0,8.3 7.1,7.3" fill="#e8e0d5" />
        </svg>
      ))}
    </div>
  );
}

const COL_W = 158;
const COL_GAP = 16;
const LABEL_W = 130;
const PAD_X = 24;

export function ComparisonTable() {
  return (
    <div style={{ backgroundColor: "#F4F2EE", minHeight: "100vh", fontFamily: "Arial, Helvetica, sans-serif", paddingBottom: "50px"}}>

      {/* Section header */}
      <div style={{ padding: `20px ${PAD_X}px 10px`, display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "13px", fontWeight: "700", color: "#1a1a1a", whiteSpace: "nowrap" }}>This Item</span>
          <div style={{ height: "1px", width: "50px", backgroundColor: "#bbb" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "20px" }}>
          <span style={{ fontSize: "13px", fontWeight: "700", color: "#1a1a1a", whiteSpace: "nowrap" }}>Similar Products</span>
          <div style={{ height: "1px", width: "220px", backgroundColor: "#bbb" }} />
        </div>
      </div>

      {/* Scrollable layout */}
      <div style={{ overflowX: "auto" }}>
        <div style={{ minWidth: `${LABEL_W + (COL_W + COL_GAP) * products.length + PAD_X * 2}px`, padding: `0 ${PAD_X}px` }}>

          {/* Product cards */}
          <div style={{ display: "flex", gap: `${COL_GAP}px`, paddingLeft: `${LABEL_W}px` }}>
            {products.map((p) => (
              <div key={p.id} style={{ width: `${COL_W}px`, flexShrink: 0, display: "flex", flexDirection: "column" }}>
                {/* Image */}
                <div style={{ position: "relative", backgroundColor: "#ede8e0", borderRadius: "8px", overflow: "hidden", width: `${COL_W}px`, height: "120px", marginBottom: "8px" }}>
                  <img
                    src={p.imageSrc}
                    alt={p.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => { (e.target as HTMLImageElement).src = BLANK_IMAGE; }}
                  />
                  <button aria-label="Wishlist" style={{ position: "absolute", top: "6px", right: "6px", background: "white", border: "none", borderRadius: "50%", width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.18)", padding: 0 }}>
                    <Heart size={13} strokeWidth={1.5} color="#888" />
                  </button>
                  {p.isHotPrice && (
                    <div style={{ position: "absolute", bottom: "6px", left: "6px", backgroundColor: "#cc1f1f", color: "white", fontSize: "10px", fontWeight: "700", padding: "2px 5px", borderRadius: "3px", display: "flex", alignItems: "center", gap: "3px" }}>
                      <Flame size={10} fill="white" color="white" /> Hot Price
                    </div>
                  )}
                </div>
                {/* Name */}
                <div style={{ fontSize: "12px", color: "#1a1a1a", lineHeight: "1.35", marginBottom: "6px", minHeight: "34px" }}>{p.name}</div>
                {/* Current Item badge */}
                {p.isCurrentItem && (
                  <div style={{ display: "inline-flex", alignSelf: "flex-start", border: "1px solid #999", borderRadius: "4px", padding: "2px 7px", fontSize: "10px", color: "#444", marginBottom: "7px" }}>
                    Current Item
                  </div>
                )}
                {/* Add to Cart */}
                <button style={{ backgroundColor: "#1e2433", color: "white", border: "none", borderRadius: "5px", padding: "8px 10px", fontSize: "12px", fontWeight: "700", cursor: "pointer", width: "100%", marginBottom: "7px" }}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Comparison rows */}
          {rows.map((row) => (
            <div key={row.key} style={{ display: "flex", gap: `${COL_GAP}px`, borderTop: "1px solid #d6cfc5", paddingTop: "14px", paddingBottom: "14px", alignItems: "flex-start" }}>
              {/* Label */}
              <div style={{ width: `${LABEL_W}px`, flexShrink: 0, fontSize: "13px", color: "#5a5248", whiteSpace: "pre-line", lineHeight: "1.4", paddingTop: "2px", fontFamily: "Georgia, serif" }}>
                {row.label}
              </div>
              {/* Cells */}
              {products.map((p, ci) => (
                <div key={ci} style={{ width: `${COL_W}px`, flexShrink: 0, fontSize: "14px", color: "#3d3530", fontFamily: "sans-serif" }}>
                  {row.key === "price" && (
                    <div>
                      <div style={{ color: "#c0392b" }}>
                        <span style={{ fontWeight: "700", fontSize: "15px" }}>{p.price}</span>
                        <sup style={{ fontSize: "10px" }}>{p.cents}</sup>
                      </div>
                      {p.wasPrice && (
                        <div style={{ fontSize: "11px", color: "#888", marginTop: "2px" }}>
                          Was <span style={{ textDecoration: "line-through" }}>{p.wasPrice}</span>
                        </div>
                      )}
                    </div>
                  )}
                  {row.key === "reviews" && (
                    <div>
                      {p.rating === 0 ? <ZeroStarRating /> : <StarRating rating={p.rating} hasDropdown={p.hasDropdown} />}
                      <div style={{ fontSize: "12px", color: "#5a5248", marginTop: "3px" }}>
                        {p.rating.toFixed(1)} ({p.reviewCount})
                      </div>
                    </div>
                  )}
                  {row.key === "size" && <span>{p.size}</span>}
                  {row.key === "firmness" && <span>{p.firmness}</span>}
                  {row.key === "compositionType" && <span>{p.compositionType}</span>}
                  {row.key === "cooling" && (
                    p.hasCooling
                      ? <Check size={16} color="#555" strokeWidth={2.5} />
                      : <span style={{ color: "#aaa", fontSize: "16px" }}>–</span>
                  )}
                  {row.key === "thickness" && <span>{p.thickness}</span>}
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>

      {/* Floating: Chat with a Sleep Expert */}
      {/* <div style={{ position: "fixed", bottom: "20px", right: "64px", backgroundColor: "#1e2433", color: "white", borderRadius: "30px", padding: "12px 20px", display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", fontWeight: "700", cursor: "pointer", boxShadow: "0 4px 14px rgba(0,0,0,0.3)" }}>
        <MessageCircle size={18} />
        Chat with a Sleep Expert
      </div> */}

      {/* Floating: Scroll to top */}
      {/* <button style={{ position: "fixed", bottom: "20px", right: "20px", backgroundColor: "#666", color: "white", borderRadius: "50%", width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }} aria-label="Scroll to top">
        <ChevronUp size={18} />
      </button> */}
    </div>
  );
}
// import { ChevronDown, Check } from "lucide-react";

// const products = [
//   {
//     price: "$1,299", cents: ".00", wasPrice: "$1,849.00",
//     rating: 4.5, reviewCount: 156, hasDropdown: true,
//     size: "Queen", firmness: "Plush", compositionType: "Innerspring",
//     thickness: '13.5"', hasCooling: false,
//   },
//   {
//     price: "$999", cents: ".00", wasPrice: null,
//     rating: 3.7, reviewCount: 6, hasDropdown: false,
//     size: "Queen", firmness: "Plush", compositionType: "Innerspring",
//     thickness: '12.5"', hasCooling: false,
//   },
//   {
//     price: "$1,599", cents: ".00", wasPrice: null,
//     rating: 0.0, reviewCount: 0, hasDropdown: false,
//     size: "Queen", firmness: "Plush", compositionType: "Innerspring",
//     thickness: '11"', hasCooling: true,
//   },
//   {
//     price: "$2,099", cents: ".00", wasPrice: null,
//     rating: 4.5, reviewCount: 81, hasDropdown: true,
//     size: "Queen", firmness: "Plush", compositionType: "Innerspring",
//     thickness: '13.5"', hasCooling: false,
//   },
//   {
//     price: "$2,199", cents: ".00", wasPrice: "$2,999.00",
//     rating: 4.3, reviewCount: 106, hasDropdown: true,
//     size: "Queen", firmness: "Plush", compositionType: "Innerspring",
//     thickness: '12"', hasCooling: false,
//   },
//   {
//     price: "$4,999", cents: ".00", wasPrice: null,
//     rating: 4.2, reviewCount: 72, hasDropdown: true,
//     size: "Queen", firmness: "Plush", compositionType: "Innerspring",
//     thickness: '15.5"', hasCooling: false,
//   },
// ];

// function StarRating({ rating, hasDropdown }: { rating: number; hasDropdown: boolean }) {
//   const fullStars = Math.floor(rating);
//   const partial = rating - fullStars;
//   const emptyStars = 5 - Math.ceil(rating);

//   return (
//     <div className="flex items-center gap-1">
//       <div className="flex items-center">
//         {Array.from({ length: fullStars }).map((_, i) => (
//           <svg key={`full-${i}`} className="w-5 h-5" viewBox="0 0 20 20">
//             <polygon points="10,1 12.9,7.3 20,8.3 15,13 16.2,20 10,16.5 3.8,20 5,13 0,8.3 7.1,7.3" fill="#c9a96e" />
//           </svg>
//         ))}
//         {partial > 0 && (
//           <svg className="w-5 h-5" viewBox="0 0 20 20">
//             <defs>
//               <linearGradient id={`partial-${rating}`} x1="0" x2="1" y1="0" y2="0">
//                 <stop offset={`${partial * 100}%`} stopColor="#c9a96e" />
//                 <stop offset={`${partial * 100}%`} stopColor="#d9cfc0" />
//               </linearGradient>
//             </defs>
//             <polygon points="10,1 12.9,7.3 20,8.3 15,13 16.2,20 10,16.5 3.8,20 5,13 0,8.3 7.1,7.3" fill={`url(#partial-${rating})`} />
//           </svg>
//         )}
//         {Array.from({ length: emptyStars }).map((_, i) => (
//           <svg key={`empty-${i}`} className="w-5 h-5" viewBox="0 0 20 20">
//             <polygon points="10,1 12.9,7.3 20,8.3 15,13 16.2,20 10,16.5 3.8,20 5,13 0,8.3 7.1,7.3" fill="#d9cfc0" />
//           </svg>
//         ))}
//       </div>
//       {hasDropdown && <ChevronDown className="w-4 h-4 text-gray-500 ml-0.5" />}
//     </div>
//   );
// }

// function ZeroStarRating() {
//   return (
//     <div className="flex items-center gap-0.5">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <svg key={i} className="w-5 h-5" viewBox="0 0 20 20">
//           <polygon points="10,1 12.9,7.3 20,8.3 15,13 16.2,20 10,16.5 3.8,20 5,13 0,8.3 7.1,7.3" fill="#e8e0d5" />
//         </svg>
//       ))}
//     </div>
//   );
// }

// const rows = [
//   { label: "Price", key: "price" },
//   { label: "Reviews", key: "reviews" },
//   { label: "Size", key: "size" },
//   { label: "Firmness", key: "firmness" },
//   { label: "Composition\nType", key: "compositionType" },
//   { label: "Cooling", key: "cooling" },
//   { label: "Thickness", key: "thickness" },
// ];

// export function ComparisonTable() {
//   return (
//     <div className="min-h-screen w-full" style={{ backgroundColor: "#f0ece6", fontFamily: "'Georgia', serif" }}>
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse" style={{ minWidth: "900px" }}>
//           <tbody>
//             {rows.map((row, rowIdx) => (
//               <tr key={row.key} style={{ borderTop: rowIdx === 0 ? "none" : "1px solid #d6cfc5" }}>
//                 <td style={{ padding: "18px 16px 18px 20px", width: "120px", fontSize: "13px", color: "#5a5248", whiteSpace: "pre-line", verticalAlign: "top", lineHeight: "1.4" }}>
//                   {row.label}
//                 </td>
//                 {products.map((product, colIdx) => (
//                   <td key={colIdx} style={{ padding: "18px 16px", borderLeft: "1px solid #d6cfc5", verticalAlign: "top" }}>
//                     {row.key === "price" && (
//                       <div>
//                         <div style={{ fontSize: "15px", color: "#c0392b", fontFamily: "sans-serif" }}>
//                           <span style={{ fontWeight: "600" }}>{product.price}</span>
//                           <sup style={{ fontSize: "10px" }}>{product.cents}</sup>
//                         </div>
//                         {product.wasPrice && (
//                           <div style={{ fontSize: "11.5px", color: "#888", textDecoration: "line-through", fontFamily: "sans-serif", marginTop: "2px" }}>
//                             Was {product.wasPrice}
//                           </div>
//                         )}
//                       </div>
//                     )}
//                     {row.key === "reviews" && (
//                       <div>
//                         {product.rating === 0 ? <ZeroStarRating /> : <StarRating rating={product.rating} hasDropdown={product.hasDropdown} />}
//                         <div style={{ fontSize: "12px", color: "#5a5248", fontFamily: "sans-serif", marginTop: "3px" }}>
//                           {product.rating.toFixed(1)} ({product.reviewCount})
//                         </div>
//                       </div>
//                     )}
//                     {row.key === "size" && <div style={{ fontSize: "14px", color: "#3d3530", fontFamily: "sans-serif" }}>{product.size}</div>}
//                     {row.key === "firmness" && <div style={{ fontSize: "14px", color: "#3d3530", fontFamily: "sans-serif" }}>{product.firmness}</div>}
//                     {row.key === "compositionType" && <div style={{ fontSize: "14px", color: "#3d3530", fontFamily: "sans-serif" }}>{product.compositionType}</div>}
//                     {row.key === "cooling" && (
//                       <div style={{ fontSize: "14px", color: "#3d3530", fontFamily: "sans-serif" }}>
//                         {product.hasCooling ? <Check className="w-4 h-4 text-gray-600" strokeWidth={2.5} /> : <span style={{ color: "#999" }}>-</span>}
//                       </div>
//                     )}
//                     {row.key === "thickness" && <div style={{ fontSize: "14px", color: "#3d3530", fontFamily: "sans-serif" }}>{product.thickness}</div>}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Chat with a Sleep Expert button */}
//       <div className="fixed bottom-6 right-6">
//         <button style={{ backgroundColor: "#1a1a1a", color: "white", borderRadius: "999px", padding: "12px 20px", fontSize: "14px", fontFamily: "sans-serif", display: "flex", alignItems: "center", gap: "8px", border: "none", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
//             <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.06L2 22l4.94-1.37C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.67 0-3.23-.47-4.56-1.28L4 20l1.28-3.44C4.47 15.23 4 13.67 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
//           </svg>
//           Chat with a Sleep Expert
//         </button>
//       </div>

//       {/* Scroll to top button */}
//       <div className="fixed bottom-6" style={{ right: "240px" }}>
//         <button style={{ backgroundColor: "#b0a99e", color: "white", borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer" }}>
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
//             <path d="M7 14l5-5 5 5z"/>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }