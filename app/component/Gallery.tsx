// import { useState, useRef } from "react";

// const images = [
//   "https://cdn11.bigcommerce.com/s-j35z99636s/images/stencil/960w/products/1761/10924/02633M-KINGSDOWN-STUDIO-CARESA-Ecomm-02__85992.1771965555.jpg?c=1",
//   "/mattress-main.png",
//   "/mattress-main.png",
//   "/mattress-main.png",
//   "/mattress-main.png",
// ];

// export default function Gallery() {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [zoomed, setZoomed] = useState(false);
//   const stripRef = useRef<HTMLDivElement>(null);

//   const goLeft = () => {
//     setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const goRight = () => {
//     setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="gallery-root">
//       <div className="main-image-wrapper">
//         <img src={images[selectedIndex]} alt="Mattress" className="main-image" />
//         <button className="zoom-btn" onClick={() => setZoomed(true)} aria-label="Zoom in">
//           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
//             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <circle cx="11" cy="11" r="8" />
//             <line x1="21" y1="21" x2="16.65" y2="16.65" />
//             <line x1="11" y1="8" x2="11" y2="14" />
//             <line x1="8" y1="11" x2="14" y2="11" />
//           </svg>
//         </button>
//       </div>

//       <div className="thumbnail-strip">
//         <button className="arrow-btn" onClick={goLeft} aria-label="Previous">
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
//             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <polyline points="15 18 9 12 15 6" />
//           </svg>
//         </button>

//         <div className="thumbnails" ref={stripRef}>
//           {images.map((src, i) => (
//             <button
//               key={i}
//               className={`thumb-btn${selectedIndex === i ? " selected" : ""}`}
//               onClick={() => setSelectedIndex(i)}
//               aria-label={`Image ${i + 1}`}
//             >
//               <img src={src} alt={`Mattress thumbnail ${i + 1}`} />
//               <span className="thumb-num">{i + 1}</span>
//             </button>
//           ))}
//         </div>

//         <button className="arrow-btn" onClick={goRight} aria-label="Next">
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
//             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <polyline points="9 18 15 12 9 6" />
//           </svg>
//         </button>
//       </div>

//       {zoomed && (
//         <div className="zoom-overlay" onClick={() => setZoomed(false)}>
//           <img src={images[selectedIndex]} alt="Mattress zoomed" className="zoom-img" />
//         </div>
//       )}
//     </div>
//   );
// }



import { useState } from "react";

const images = [
  "https://cdn11.bigcommerce.com/s-j35z99636s/images/stencil/960w/products/1761/10924/02633M-KINGSDOWN-STUDIO-CARESA-Ecomm-02__85992.1771965555.jpg?c=1",
  "https://cdn11.bigcommerce.com/s-j35z99636s/images/stencil/960w/products/1761/10925/02633M-KINGSDOWN-STUDIO-CARESA-Inroom-06__16657.1771965555.jpg?c=1",
  "https://cdn11.bigcommerce.com/s-j35z99636s/images/stencil/960w/products/1761/10923/02633M-KINGSDOWN-STUDIO-CARESA-Ecomm-01__87045.1771965555.jpg?c=1",
  "https://cdn11.bigcommerce.com/s-j35z99636s/images/stencil/960w/products/1761/10922/02633M-KINGSDOWN-STUDIO-CARESA-Ecomm-03__00249.1771965555.jpg?c=1",
  "https://cdn11.bigcommerce.com/s-j35z99636s/images/stencil/960w/products/1761/10906/230518_Shot3_StopMotion_Firmness_Soft_03797__45342.1771965555.gif?c=1",
];

const THUMB_W = 110;
const THUMB_H = 88;

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const prev = () => setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActive((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div style={{ background: "#f0ebe4", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", }}>

        {/* Main image */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "#f0ebe4", borderRadius: 12, overflow: "hidden" }}>
          <img key={active} src={images[active]} alt={`Product view ${active + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />

          {/* Slide counter */}
          <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(0,0,0,0.38)", color: "#fff", fontSize: 13, fontWeight: 600, fontFamily: "sans-serif", borderRadius: 20, padding: "3px 10px" }}>
            {active + 1} / {images.length}
          </div>

          {/* Zoom button */}
          <button onClick={() => setZoomed(true)} style={{ position: "absolute", bottom: 16, right: 16, width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.9)", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.18)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </button>
        </div>

        {/* Thumbnail row */}
        <div style={{ display: "flex", alignItems: "center", marginTop: 14, padding: "0 4px" }}>

          {/* Left arrow */}
          <button onClick={prev} style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.07)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#333" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Thumbnails */}
          <div style={{ display: "flex", flex: 1, gap: 8, overflowX: "auto", padding: "4px 6px", scrollbarWidth: "none" }}>
            {images.map((src, i) => {
              const isActive = i === active;
              return (
                <button key={i} onClick={() => setActive(i)} style={{ flexShrink: 0, width: THUMB_W, height: THUMB_H, padding: 0, border: isActive ? "2.5px solid #222" : "2.5px solid transparent", borderRadius: 8, overflow: "hidden", cursor: "pointer", background: "#fff", position: "relative", outline: "none", boxShadow: isActive ? "0 0 0 1px #222" : "none" }}>
                  <img src={src} alt={`View ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <span style={{ position: "absolute", bottom: 4, left: 6, fontSize: 11, fontWeight: 700, color: "#fff", background: "rgba(0,0,0,0.48)", borderRadius: 3, padding: "1px 5px", lineHeight: 1.5, fontFamily: "sans-serif", pointerEvents: "none" }}>
                    {i + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right arrow */}
          <button onClick={next} style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", background: "rgba(0,0,0,0.07)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#333" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Zoom overlay */}
      {zoomed && (
        <div onClick={() => setZoomed(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, cursor: "zoom-out" }}>
          <img src={images[active]} alt="Zoomed view" style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", borderRadius: 8 }} />
        </div>
      )}
    </div>
  );
}