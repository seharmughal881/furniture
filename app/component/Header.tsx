import { useState, useEffect } from "react";

export default function SleepCountryHeader() {
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", backgroundColor: "#fff" }}>
      {/* Top promo banner */}
      <div
        style={{
          backgroundColor: "#D32030",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 24px",
          fontSize: "12px",
          fontWeight: 400,
          minHeight: "32px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ flex: 1, textAlign: "left", display: window.innerWidth < 768 ? "none" : "block" }}>
          Sleep Easy with up to 20% off mattresses &amp; more!*
        </span>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: window.innerWidth < 768 ? "12px" : "24px", 
          color: "#fff",
          flexWrap: "wrap"
        }}>
          <a 
            href="#" 
            style={{ 
              color: "#fff", 
              textDecoration: "none", 
              fontSize: "12px", 
              whiteSpace: "nowrap",
              display: window.innerWidth < 480 ? "none" : "block"
            }}
          >
            Have Questions?
          </a>
          <a 
            href="#" 
            style={{ 
              color: "#fff", 
              textDecoration: "none", 
              fontSize: "12px", 
              whiteSpace: "nowrap",
              display: window.innerWidth < 480 ? "none" : "block"
            }}
          >
            Track My Order
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
            <span style={{ fontSize: "12px" }}>English</span>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 24px",
          borderBottom: "1px solid #e0e0e0",
          gap: "16px",
          backgroundColor: "#fff",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", minWidth: "160px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "#D32030", fontWeight: "bold", fontSize: "28px", lineHeight: 1, letterSpacing: "-0.5px" }}>
              SleepCountry
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "1px" }}>
            <span style={{ fontSize: "11px", color: "#333", fontStyle: "italic", fontWeight: 400 }}>
              Proudly Canadian
            </span>
            <span style={{ color: "#D32030", fontSize: "13px" }}>🍁</span>
          </div>
        </div>

        {/* Location selector */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer",
            padding: "6px 10px",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            minWidth: "160px",
            whiteSpace: "nowrap",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#D32030"/>
          </svg>
          <span style={{ fontSize: "13px", color: "#333", fontWeight: 400 }}>Ontario L6T 4N8</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Search bar */}
        <div style={{ flex: 1, position: "relative" }}>
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{
              width: "100%",
              padding: "9px 40px 9px 14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "14px",
              color: "#333",
              outline: "none",
              boxSizing: "border-box",
              backgroundColor: "#fff",
            }}
          />
          <button
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              bottom: "0",
              width: "40px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#666" strokeWidth="2"/>
              <path d="M16.5 16.5L21 21" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Right icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Sign In */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", color: "#333" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#333" strokeWidth="1.5"/>
              <circle cx="12" cy="9" r="3.5" stroke="#333" strokeWidth="1.5"/>
              <path d="M4.5 20C5.5 17 8.5 15 12 15s6.5 2 7.5 5" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize: "13px", color: "#333", whiteSpace: "nowrap" }}>Sign In</span>
          </div>

          {/* Wishlist / Heart */}
          <div style={{ cursor: "pointer" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#333" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>

          {/* Cart */}
          <div style={{ cursor: "pointer" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#333" strokeWidth="1.5" fill="none"/>
              <line x1="3" y1="6" x2="21" y2="6" stroke="#333" strokeWidth="1.5"/>
              <path d="M16 10a4 4 0 01-8 0" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          borderBottom: "1px solid #e0e0e0",
          backgroundColor: "#fff",
        }}
      >
        {/* Hamburger */}
        <div style={{ display: "flex", alignItems: "center", padding: "14px 16px 14px 0", cursor: "pointer" }}>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
            <line x1="0" y1="1" x2="20" y2="1" stroke="#333" strokeWidth="2"/>
            <line x1="0" y1="8" x2="20" y2="8" stroke="#333" strokeWidth="2"/>
            <line x1="0" y1="15" x2="20" y2="15" stroke="#333" strokeWidth="2"/>
          </svg>
        </div>

        <NavItem label="Mattresses" />
        <NavItem label="Pillows" />
        <NavItem label="Bedding" />
        <NavItem label="Bedroom Furniture" />
        <NavItem label="Brands" />
        <NavItem label="Specials" isRed />
        <NavItem label="Mattress Finder" />
      </div>

      {/* Breadcrumb */}
      <div
        style={{
          padding: "10px 24px",
          fontSize: "13px",
          color: "#666",
          borderBottom: "1px solid #f0f0f0",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <a href="#" style={{ color: "#666", textDecoration: "none" }}>Home</a>
        <span style={{ color: "#999" }}>&gt;</span>
        <a href="#" style={{ color: "#666", textDecoration: "none" }}>Specials</a>
        <span style={{ color: "#999" }}>&gt;</span>
        <a href="#" style={{ color: "#666", textDecoration: "none" }}>Mattress Specials</a>
        <span style={{ color: "#999" }}>&gt;</span>
        <span style={{ color: "#333", fontWeight: 400 }}>Kingsdown Studio Caresa Mattress</span>
      </div>
    </div>
  );
}

function NavItem({ label, isRed = false }: { label: string; isRed?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "14px 16px",
        fontSize: "14px",
        fontWeight: 400,
        color: isRed ? "#D32030" : "#333",
        textDecoration: "none",
        whiteSpace: "nowrap",
        borderBottom: hovered ? "2px solid #D32030" : "2px solid transparent",
        marginBottom: "-1px",
        transition: "border-color 0.15s",
      }}
    >
      {label}
    </a>
  );
}