export default function SleepExpertsSection() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#f0ede8",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          backgroundColor: "#f0ede8",
          border: "1px solid #d9d5ce",
          borderRadius: "12px",
          padding: "32px 36px",
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
            src="/expert-photo.png"
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