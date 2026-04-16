export default function ProductOverview() {
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
    <div className="min-h-screen bg-white  sm:px-8">
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
    </div>
  );
}