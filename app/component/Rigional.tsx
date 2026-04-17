import type { NextPage } from "next";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill={i <= rating ? "#c8a94a" : "none"}
          stroke={i <= rating ? "#c8a94a" : "#ccc"}
          strokeWidth="1.5"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

function RatingBar({ label, value }: { label: string; value: number }) {
  const total = 10;
  const filled = Math.round((value / 5) * total);

  return (
    <div className="mb-3 last:mb-0">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 20,
                height: 12,
                backgroundColor: i < filled ? "#c8a94a" : "#e8dcc0",
              }}
            />
          ))}
        </div>
        <span className="text-xs text-gray-700 font-medium">{value.toFixed(1)}</span>
      </div>
    </div>
  );
}

const RegionalReviews: NextPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans">
      <style jsx>{`
        .touch-manipulation {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        
        @media (hover: none) and (pointer: coarse) {
          .touch-manipulation {
            padding: 16px;
          }
          
          .touch-manipulation * {
            min-height: 44px;
            display: flex;
            align-items: center;
          }
          
          .touch-manipulation p {
            min-height: auto;
            display: block;
          }
        }
        
        @media (max-width: 768px) {
          .touch-manipulation {
            margin: 0 -16px;
            border-radius: 0;
          }
        }
      `}</style>
      <div className="w-max-w-5xl px-6 py-6" 
      style={{
         marginLeft: "20px",
      }}>

        {/* Section heading */}
        <div className="border-b border-gray-200 pb-3 mb-6">
          <h2 className="text-sm font-bold text-gray-900">Regional Reviews</h2>
        </div>

        {/* Review layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Left: Review content */}
          <div className="flex-1 lg:w-auto">
            <div className="mb-4 lg:mb-3">
              <StarRating rating={5} />
            </div>

            <h3 className="text-base lg:text-sm font-bold text-gray-900 mb-2 lg:mb-2">Great mattress</h3>
            <p className="text-base lg:text-sm font-semibold text-gray-800 mb-1 lg:mb-0.5">Yogagirl</p>
            <p className="text-sm lg:text-xs text-gray-500 mb-4 lg:mb-4">9 days ago</p>

            <p className="text-base lg:text-sm text-gray-700 leading-relaxed mb-5 lg:mb-5">
              I love the Kingstown mattress for its comfort, Support and quality of craftsmanship.
              My sleep has improved on this mattress.
            </p>

            {/* Q&A */}
            <div className="mb-5 lg:mb-5">
              <p className="text-base lg:text-sm font-bold text-gray-900 mb-2 lg:mb-1">Q: How Improve?</p>
              <p className="text-base lg:text-sm text-gray-700">A: Thank you for the excellent sleep experience</p>
            </div>

            {/* Reviews Read */}
            <p className="text-base lg:text-sm mb-4 lg:mb-4">
              <span className="font-semibold text-gray-900">Reviews Read </span>
              <span className="text-gray-700">Yes</span>
            </p>

            {/* Recommend */}
            <div className="flex items-center gap-3 lg:gap-2 mb-5 lg:mb-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-4 lg:h-4"
              >
                <circle cx="12" cy="12" r="10" fill="#16a34a" />
                <polyline
                  points="9,12 11,14 15,10"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base lg:text-sm text-gray-700">Yes, I recommend this product.</span>
            </div>

            <p className="text-base lg:text-sm text-gray-500">0 Comments</p>
          </div>

          {/* Right: Rating bars */}
          <div className="w-full lg:w-72 lg:flex-shrink-0 lg:mr-20">
            <div className="border border-gray-200 rounded-lg p-4 lg:p-4 bg-gray-50 touch-manipulation">
              <RatingBar label="Value of Product" value={5.0} />
              <RatingBar label="Sleep Quality" value={5.0} />
              <RatingBar label="Initial Product Craftmanship" value={5.0} />
            </div>
          </div>

        </div>
      </div> 
       <div className="w-max-w-5xl px-6 py-6" 
      style={{
         marginLeft: "20px",
      }}>

        {/* Section heading */}
        <div className="border-b border-gray-200 pb-3 mb-6">
          <h2 className="text-sm font-bold text-gray-900">Regional Reviews</h2>
        </div>

        {/* Review layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Left: Review content */}
          <div className="flex-1 lg:w-auto">
            <div className="mb-4 lg:mb-3">
              <StarRating rating={5} />
            </div>

            <h3 className="text-base lg:text-sm font-bold text-gray-900 mb-2 lg:mb-2">Great mattress</h3>
            <p className="text-base lg:text-sm font-semibold text-gray-800 mb-1 lg:mb-0.5">Yogagirl</p>
            <p className="text-sm lg:text-xs text-gray-500 mb-4 lg:mb-4">9 days ago</p>

            <p className="text-base lg:text-sm text-gray-700 leading-relaxed mb-5 lg:mb-5">
              I love the Kingstown mattress for its comfort, Support and quality of craftsmanship.
              My sleep has improved on this mattress.
            </p>

            {/* Q&A */}
            <div className="mb-5 lg:mb-5">
              <p className="text-base lg:text-sm font-bold text-gray-900 mb-2 lg:mb-1">Q: How Improve?</p>
              <p className="text-base lg:text-sm text-gray-700">A: Thank you for the excellent sleep experience</p>
            </div>

            {/* Reviews Read */}
            <p className="text-base lg:text-sm mb-4 lg:mb-4">
              <span className="font-semibold text-gray-900">Reviews Read </span>
              <span className="text-gray-700">Yes</span>
            </p>

            {/* Recommend */}
            <div className="flex items-center gap-3 lg:gap-2 mb-5 lg:mb-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-4 lg:h-4"
              >
                <circle cx="12" cy="12" r="10" fill="#16a34a" />
                <polyline
                  points="9,12 11,14 15,10"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base lg:text-sm text-gray-700">Yes, I recommend this product.</span>
            </div>

            <p className="text-base lg:text-sm text-gray-500">0 Comments</p>
          </div>

          {/* Right: Rating bars */}
          <div className="w-full lg:w-72 lg:flex-shrink-0 lg:mr-20">
            <div className="border border-gray-200 rounded-lg p-4 lg:p-4 bg-gray-50 touch-manipulation">
              <RatingBar label="Value of Product" value={5.0} />
              <RatingBar label="Sleep Quality" value={5.0} />
              <RatingBar label="Initial Product Craftmanship" value={5.0} />
            </div>
          </div>

        </div>
      </div> 
       <div className="w-max-w-5xl px-6 py-6" 
      style={{
         marginLeft: "20px",
      }}>

        {/* Section heading */}
        <div className="border-b border-gray-200 pb-3 mb-6">
          <h2 className="text-sm font-bold text-gray-900">Regional Reviews</h2>
        </div>

        {/* Review layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Left: Review content */}
          <div className="flex-1 lg:w-auto">
            <div className="mb-4 lg:mb-3">
              <StarRating rating={5} />
            </div>

            <h3 className="text-base lg:text-sm font-bold text-gray-900 mb-2 lg:mb-2">Great mattress</h3>
            <p className="text-base lg:text-sm font-semibold text-gray-800 mb-1 lg:mb-0.5">Yogagirl</p>
            <p className="text-sm lg:text-xs text-gray-500 mb-4 lg:mb-4">9 days ago</p>

            <p className="text-base lg:text-sm text-gray-700 leading-relaxed mb-5 lg:mb-5">
              I love the Kingstown mattress for its comfort, Support and quality of craftsmanship.
              My sleep has improved on this mattress.
            </p>

            {/* Q&A */}
            <div className="mb-5 lg:mb-5">
              <p className="text-base lg:text-sm font-bold text-gray-900 mb-2 lg:mb-1">Q: How Improve?</p>
              <p className="text-base lg:text-sm text-gray-700">A: Thank you for the excellent sleep experience</p>
            </div>

            {/* Reviews Read */}
            <p className="text-base lg:text-sm mb-4 lg:mb-4">
              <span className="font-semibold text-gray-900">Reviews Read </span>
              <span className="text-gray-700">Yes</span>
            </p>

            {/* Recommend */}
            <div className="flex items-center gap-3 lg:gap-2 mb-5 lg:mb-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="lg:w-4 lg:h-4"
              >
                <circle cx="12" cy="12" r="10" fill="#16a34a" />
                <polyline
                  points="9,12 11,14 15,10"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base lg:text-sm text-gray-700">Yes, I recommend this product.</span>
            </div>

            <p className="text-base lg:text-sm text-gray-500">0 Comments</p>
          </div>

          {/* Right: Rating bars */}
          <div className="w-full lg:w-72 lg:flex-shrink-0 lg:mr-20">
            <div className="border border-gray-200 rounded-lg p-4 lg:p-4 bg-gray-50 touch-manipulation">
              <RatingBar label="Value of Product" value={5.0} />
              <RatingBar label="Sleep Quality" value={5.0} />
              <RatingBar label="Initial Product Craftmanship" value={5.0} />
            </div>
          </div>

        </div>
      </div>    
    </main>
  );
};

export default RegionalReviews;