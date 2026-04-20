'use client';

import { useState, useEffect } from "react";

export default function SleepCountryHeader() {
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768);
    setIsSmallScreen(typeof window !== 'undefined' && window.innerWidth < 480);
    
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
        setIsSmallScreen(window.innerWidth < 480);
        if (window.innerWidth < 768 && isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
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
          padding: isMobile ? "4px 12px" : "6px 24px",
          fontSize: isMobile ? "10px" : "12px",
          fontWeight: 400,
          minHeight: isMobile ? "28px" : "32px",
          flexWrap: "wrap",
        }}
      >
        {/* Mobile: Centered text */}
        {isMobile ? (
          <span style={{ textAlign: "center", flex: 1, fontSize: "10px" }}>
            20% off mattresses &amp; more!*
          </span>
        ) : (
          <span style={{ flex: 1, textAlign: "left" }}>
            Sleep Easy with up to 20% off mattresses &amp; more!*
          </span>
        )}
        
        {/* Desktop: Full right section */}
        {!isMobile && (
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "24px", 
            color: "#fff",
            flexWrap: "wrap"
          }}>
            <a 
              href="#" 
              style={{ 
                color: "#fff", 
                textDecoration: "none", 
                fontSize: "12px", 
                whiteSpace: "nowrap"
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
                whiteSpace: "nowrap"
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
        )}
        
        {/* Mobile: Only language selector */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
            <span style={{ fontSize: "10px" }}>EN</span>
            <svg width="8" height="5" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>

      {/* Main header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: isMobile ? "8px 12px" : "10px 24px",
          borderBottom: "1px solid #e0e0e0",
          gap: isMobile ? "8px" : "16px",
          backgroundColor: "#fff",
          flexWrap: isMobile ? "wrap" : "nowrap",
        }}
      >
        {/* Mobile: Hamburger menu */}
        {isMobile && (
          <div 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              padding: "8px", 
              cursor: "pointer",
              order: 1
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <line x1="0" y1="1" x2="20" y2="1" stroke="#333" strokeWidth="2"/>
              <line x1="0" y1="8" x2="20" y2="8" stroke="#333" strokeWidth="2"/>
              <line x1="0" y1="15" x2="20" y2="15" stroke="#333" strokeWidth="2"/>
            </svg>
          </div>
        )}
        
        {/* Logo */}
        <div 
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            minWidth: isMobile ? "120px" : "160px",
            order: isMobile ? 2 : 1
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ 
              color: "#D32030", 
              fontWeight: "bold", 
              fontSize: isMobile ? "20px" : "28px", 
              lineHeight: 1, 
              letterSpacing: "-0.5px" 
            }}>
              SleepCountry
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "1px" }}>
            <span style={{ 
              fontSize: isMobile ? "9px" : "11px", 
              color: "#333", 
              fontStyle: "italic", 
              fontWeight: 400 
            }}>
              Proudly Canadian
            </span>
            <span style={{ color: "#D32030", fontSize: isMobile ? "11px" : "13px" }}>🍁</span>
          </div>
        </div>

        {/* Desktop: Location selector */}
        {!isMobile && (
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
              order: 2
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
        )}

        {/* Search bar */}
        <div 
          style={{ 
            flex: 1, 
            position: "relative",
            order: isMobile ? 4 : 3
          }}
        >
          <input
            type="text"
            placeholder={isMobile ? "Search..." : "What are you looking for?"}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{
              width: "100%",
              padding: isMobile ? "6px 35px 6px 10px" : "9px 40px 9px 14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: isMobile ? "12px" : "14px",
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
              width: isMobile ? "35px" : "40px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width={isMobile ? "16" : "18"} height={isMobile ? "16" : "18"} viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#666" strokeWidth="2"/>
              <path d="M16.5 16.5L21 21" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Right icons */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: isMobile ? "12px" : "20px",
            order: isMobile ? 3 : 4
          }}
        >
          {/* Mobile: Icon-only */}
          {isMobile ? (
            <>
              <div style={{ cursor: "pointer" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#333" strokeWidth="1.5"/>
                  <circle cx="12" cy="9" r="3.5" stroke="#333" strokeWidth="1.5"/>
                  <path d="M4.5 20C5.5 17 8.5 15 12 15s6.5 2 7.5 5" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div style={{ cursor: "pointer" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#333" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div style={{ cursor: "pointer" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="#333" strokeWidth="1.5" fill="none"/>
                  <line x1="3" y1="6" x2="21" y2="6" stroke="#333" strokeWidth="1.5"/>
                  <path d="M16 10a4 4 0 0 1-8 0" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </>
          ) : (
            /* Desktop: Full icons with text */
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", color: "#333" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#333" strokeWidth="1.5"/>
                  <circle cx="12" cy="9" r="3.5" stroke="#333" strokeWidth="1.5"/>
                  <path d="M4.5 20C5.5 17 8.5 15 12 15s6.5 2 7.5 5" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span style={{ fontSize: "13px", color: "#333", whiteSpace: "nowrap" }}>Sign In</span>
              </div>
              <div style={{ cursor: "pointer" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#333" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div style={{ cursor: "pointer" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="#333" strokeWidth="1.5" fill="none"/>
                  <line x1="3" y1="6" x2="21" y2="6" stroke="#333" strokeWidth="1.5"/>
                  <path d="M16 10a4 4 0 0 1-8 0" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Navigation bar - Desktop only */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            borderBottom: "1px solid #e0e0e0",
            backgroundColor: "#fff",
          }}
        >
          <NavItem label="Mattresses" />
          <NavItem label="Pillows" />
          <NavItem label="Bedding" />
          <NavItem label="Bedroom Furniture" />
          <NavItem label="Brands" />
          <NavItem label="Specials" isRed />
          <NavItem label="Mattress Finder" />
        </div>
      )}
      
      {/* Mobile Navigation Menu */}
      {isMobile && isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "280px",
              height: "100%",
              backgroundColor: "#fff",
              padding: "20px",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>Menu</span>
              <div 
                style={{ cursor: "pointer", padding: "5px" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <line x1="18" y1="6" x2="6" y2="18" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="6" y1="6" x2="18" y2="18" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <a href="#" style={{ fontSize: "16px", color: "#333", textDecoration: "none", padding: "10px 0", borderBottom: "1px solid #eee" }}>Mattresses</a>
              <a href="#" style={{ fontSize: "16px", color: "#333", textDecoration: "none", padding: "10px 0", borderBottom: "1px solid #eee" }}>Pillows</a>
              <a href="#" style={{ fontSize: "16px", color: "#333", textDecoration: "none", padding: "10px 0", borderBottom: "1px solid #eee" }}>Bedding</a>
              <a href="#" style={{ fontSize: "16px", color: "#333", textDecoration: "none", padding: "10px 0", borderBottom: "1px solid #eee" }}>Bedroom Furniture</a>
              <a href="#" style={{ fontSize: "16px", color: "#333", textDecoration: "none", padding: "10px 0", borderBottom: "1px solid #eee" }}>Brands</a>
              <a href="#" style={{ fontSize: "16px", color: "#D32030", textDecoration: "none", padding: "10px 0", borderBottom: "1px solid #eee", fontWeight: "bold" }}>Specials</a>
              <a href="#" style={{ fontSize: "16px", color: "#333", textDecoration: "none", padding: "10px 0", borderBottom: "1px solid #eee" }}>Mattress Finder</a>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div
        style={{
          padding: isMobile ? "8px 12px" : "10px 24px",
          fontSize: isMobile ? "11px" : "13px",
          color: "#666",
          borderBottom: "1px solid #f0f0f0",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          flexWrap: "wrap",
        }}
      >
        <a href="#" style={{ color: "#666", textDecoration: "none" }}>Home</a>
        <span style={{ color: "#999" }}>&gt;</span>
        <a href="#" style={{ color: "#666", textDecoration: "none" }}>Specials</a>
        <span style={{ color: "#999" }}>&gt;</span>
        <a href="#" style={{ color: "#666", textDecoration: "none" }}>Mattress Specials</a>
        <span style={{ color: "#999" }}>&gt;</span>
        <span style={{ 
          color: "#333", 
          fontWeight: 400,
          display: isMobile ? "none" : "inline"
        }}>Kingsdown Studio Caresa Mattress</span>
        {isMobile && (
          <span style={{ color: "#333", fontWeight: 400, fontSize: "10px" }}>Kingsdown Studio...</span>
        )}
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