'use client';

export function Footer() {
  return (
    <div style={{ fontFamily: "Gilroy, sans-serif", fontSize: "16px", color: "#1a1a1a", backgroundColor: "#f2ede7", minWidth: "1024px" }}>

      {/* ── Main footer columns + contact panel ── */}
      <div style={{ display: "flex", gap: "0", padding: "36px 40px 0 40px" }}>

        {/* Our Services */}
        <div style={{ flex: "1", minWidth: "170px", paddingRight: "20px" }}>
          <p style={{ fontWeight: "700", fontSize: "18px", marginBottom: "14px", lineHeight: "1.4" }}>Our Services</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
            <li><a href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "16px" }}>100 Night Guarantee</a></li>
            <li><a href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "16px" }}>Returns &amp; Exchanges</a></li>
            <li><a href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "16px" }}>Shipping &amp; Delivery</a></li>
            <li><a href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "16px" }}>Unbeatable Price Guarantee</a></li>
          </ul>
        </div>

        {/* All About Sleep Country */}
        <div style={{ flex: "1", minWidth: "200px", paddingRight: "20px" }}>
          <p style={{ fontWeight: "700", fontSize: "18px", marginBottom: "14px", lineHeight: "1.4" }}>All About Sleep Country</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
            <li><a href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "16px" }}>About Us</a></li>
            <li><a href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "16px" }}>Supplier Partners</a></li>
            <li><a href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "16px" }}>Careers</a></li>
          </ul>
        </div>

        {/* Help & Info */}
        <div style={{ flex: "1", minWidth: "160px", paddingRight: "20px" }}>
          <p style={{ fontWeight: "700", fontSize: "18px", marginBottom: "14px", lineHeight: "1.4" }}>Help &amp; Info</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
            <li><a href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "16px" }}>Help Center/FAQ</a></li>
            <li><a href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "16px" }}>Contact Us</a></li>
            <li><a href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "16px" }}>Track My Order</a></li>
            <li><a href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "16px" }}>Find a Store</a></li>
          </ul>
        </div>

        {/* Spacer */}
        <div style={{ flex: "0.4" }} />

        {/* Have questions? panel */}
        <div style={{ width: "320px", flexShrink: 0 }}>
          <p style={{ fontWeight: "700", fontSize: "24px", lineHeight: "1.25", marginBottom: "20px", color: "#1a1a1a" }}>
            Have questions? Our Sleep Experts are here to help.
          </p>

          {/* Live Chat */}
          <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "16px", gap: "12px" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, marginTop: "1px" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "22px", height: "22px" }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <p style={{ margin: "0 0 2px", fontSize: "16px", color: "#1a1a1a" }}>Sleep Expert</p>
              <a href="tel:18447480260" style={{ color: "#1a1a1a", fontSize: "16px", textDecoration: "underline" }}>1-844-748-0260</a>
            </div>
          </div>

          {/* Customer Service */}
          <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px", gap: "12px" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, marginTop: "1px" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "22px", height: "22px" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.27 6.27l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <p style={{ margin: "0 0 2px", fontSize: "16px", color: "#1a1a1a" }}>Customer Service</p>
              <a href="tel:18885337388" style={{ color: "#1a1a1a", fontSize: "16px", textDecoration: "underline", display: "block" }}>1-888-SLEEP-88</a>
              <a href="tel:18885337388" style={{ color: "#1a1a1a", fontSize: "16px", textDecoration: "underline" }}>(1-888-753-3788)</a>
            </div>
          </div>

          {/* Chat button + up arrow */}
          {/* <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button style={{
              backgroundColor: "#1a1a1a",
              color: "#fff",
              border: "none",
              borderRadius: "24px",
              padding: "12px 22px",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              letterSpacing: "0.01em"
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", flexShrink: 0 }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Chat with a Sleep Expert
            </button>
            <button style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#c8c4bc",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px" }}>
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>

      {/* ── Badges row ── */}
      <div style={{ padding: "28px 40px 20px 40px", display: "flex", alignItems: "center", gap: "10px" }}>
        {/* BrandSpark Most Trusted badge 1 */}
        <div style={{
          width: "68px", height: "68px", borderRadius: "50%",
          border: "2px solid #7a1c6c",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          backgroundColor: "#fff", padding: "4px"
        }}>
          <p style={{ margin: 0, fontSize: "6px", fontWeight: "700", color: "#7a1c6c", textAlign: "center", lineHeight: "1.2", textTransform: "uppercase" }}>BrandSpark</p>
          <p style={{ margin: "2px 0", fontSize: "5.5px", fontWeight: "700", color: "#7a1c6c", textAlign: "center", textTransform: "uppercase" }}>Most</p>
          <p style={{ margin: 0, fontSize: "5.5px", fontWeight: "700", color: "#7a1c6c", textAlign: "center", textTransform: "uppercase" }}>Trusted</p>
          <p style={{ margin: "2px 0 0", fontSize: "4.5px", color: "#555", textAlign: "center" }}>by Canadian<br/>Shoppers</p>
        </div>
        {/* BrandSpark #1 Most Trusted badge */}
        <div style={{
          width: "68px", height: "68px", borderRadius: "50%",
          border: "2px solid #7a1c6c",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          backgroundColor: "#fff", padding: "4px"
        }}>
          <p style={{ margin: 0, fontSize: "6px", fontWeight: "700", color: "#7a1c6c", textAlign: "center", lineHeight: "1.2", textTransform: "uppercase" }}>BrandSpark</p>
          <p style={{ margin: "1px 0", fontSize: "10px", fontWeight: "900", color: "#7a1c6c", textAlign: "center" }}>#1</p>
          <p style={{ margin: 0, fontSize: "5.5px", fontWeight: "700", color: "#7a1c6c", textAlign: "center", textTransform: "uppercase" }}>Most Trusted</p>
          <p style={{ margin: "2px 0 0", fontSize: "4.5px", color: "#555", textAlign: "center" }}>by Canadian<br/>Shoppers</p>
        </div>
      </div>

      {/* ── Copyright strip ── */}
      <div style={{
        borderTop: "1px solid #d8d0c6",
        padding: "14px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        {/* Social icons */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {/* Facebook */}
          <a href="#" style={{ color: "#1a1a1a", display: "flex" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "18px", height: "18px" }}>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" style={{ color: "#1a1a1a", display: "flex" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "18px", height: "18px" }}>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p style={{ margin: 0, fontSize: "12px", color: "#555", flex: "1", textAlign: "center" }}>
          Copyright © 2026 Sleep Country Canada. All rights reserved
        </p>

        {/* Links */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a href="#" style={{ color: "#1a1a1a", fontSize: "12px", textDecoration: "none" }}>Privacy Policy</a>
          <a href="#" style={{ color: "#1a1a1a", fontSize: "12px", textDecoration: "none" }}>Terms &amp; Conditions</a>
          <a href="#" style={{ color: "#1a1a1a", fontSize: "12px", textDecoration: "none" }}>*Offers Detail Page</a>
        </div>

        {/* Payment icons */}
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {/* VISA */}
          <div style={{ background: "#1a1f71", borderRadius: "4px", padding: "3px 7px", height: "24px", display: "flex", alignItems: "center" }}>
            <span style={{ color: "#fff", fontWeight: "900", fontSize: "11px", fontStyle: "italic", letterSpacing: "0.5px" }}>VISA</span>
          </div>
          {/* Mastercard */}
          <div style={{ borderRadius: "4px", padding: "2px 4px", height: "24px", display: "flex", alignItems: "center", background: "#fff" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#eb001b" }} />
              <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#f79e1b", marginLeft: "-8px" }} />
            </div>
          </div>
          {/* AmEx */}
          <div style={{ background: "#2e77bc", borderRadius: "4px", padding: "3px 6px", height: "24px", display: "flex", alignItems: "center" }}>
            <span style={{ color: "#fff", fontWeight: "700", fontSize: "9px", letterSpacing: "0.3px" }}>AMERICAN<br/>EXPRESS</span>
          </div>
          {/* PayPal */}
          <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "4px", padding: "3px 6px", height: "24px", display: "flex", alignItems: "center" }}>
            <span style={{ color: "#253b80", fontWeight: "900", fontSize: "11px" }}>Pay</span>
            <span style={{ color: "#179bd7", fontWeight: "900", fontSize: "11px" }}>Pal</span>
          </div>
          {/* Affirm */}
          <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "4px", padding: "3px 6px", height: "24px", display: "flex", alignItems: "center" }}>
            <span style={{ color: "#000", fontWeight: "700", fontSize: "11px" }}>affirm</span>
          </div>
          {/* Flexiti */}
          <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "4px", padding: "3px 6px", height: "24px", display: "flex", alignItems: "center" }}>
            <span style={{ color: "#e85d26", fontWeight: "700", fontSize: "11px" }}>flexiti</span>
          </div>
        </div>
      </div>

      {/* ── Sticky bottom product bar ── */}
      <div style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #e0d9d0",
        padding: "10px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px"
      }}>
        {/* Product name + rating */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "13px", fontWeight: "500", color: "#1a1a1a" }}>Kingsdown Studio Cares...</span>
          {/* Stars */}
          <span style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            {[1, 2, 3, 4].map(i => (
              <svg key={i} viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }} fill="#f5a623">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
            {/* Half star */}
            <svg viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}>
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#f5a623" />
                  <stop offset="50%" stopColor="#d8d0c6" />
                </linearGradient>
              </defs>
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="url(#half)" />
            </svg>
          </span>
          <span style={{ fontSize: "13px", color: "#1a1a1a" }}>4.5 (156)</span>
          <span style={{ fontSize: "13px", color: "#1a1a1a", cursor: "pointer" }}>▾</span>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px" }}>
          <button style={{
            border: "1px solid #1a1a1a",
            background: "#fff",
            color: "#1a1a1a",
            borderRadius: "4px",
            padding: "10px 40px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            minWidth: "160px"
          }}>
            Buy Now
          </button>
          <button style={{
            border: "1px solid #ccc",
            background: "#e8e3dc",
            color: "#1a1a1a",
            borderRadius: "4px",
            padding: "10px 30px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            minWidth: "160px",
            justifyContent: "center"
          }}>
            Add to Cart
            <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px" }}>
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}


  