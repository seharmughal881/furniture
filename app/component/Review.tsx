export default function Reviews() {
  const ratingData = [
    { stars: 5, count: 107, total: 156 },
    { stars: 4, count: 30, total: 156 },
    { stars: 3, count: 9, total: 156 },
    { stars: 2, count: 4, total: 156 },
    { stars: 1, count: 6, total: 156 },
  ];

  const overallRating = 4.5;
  const totalReviews = 156;
  const recommendCount = 53;
  const recommendTotal = 58;
  const recommendPercent = 91;

  function StarRating({ rating, size = 20 }: { rating: number; size?: number }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = i <= Math.floor(rating);
      const partial = !filled && i === Math.ceil(rating) && rating % 1 !== 0;
      stars.push(
        <span
          key={i}
          style={{
            position: "relative",
            display: "inline-block",
            width: size,
            height: size,
            fontSize: size,
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#d4b483", opacity: 0.3 }}>★</span>
          {(filled || partial) && (
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                overflow: "hidden",
                width: partial ? "60%" : "100%",
                color: "#c9a84c",
              }}
            >
              ★
            </span>
          )}
        </span>
      );
    }
    return <span style={{ display: "inline-flex", gap: 1 }}>{stars}</span>;
  }

  return (
    <div
      style={{
        backgroundColor: "#FBFBF9",
        minHeight: "100vh",
        fontFamily: "Gilroy, sans-serif",
        color: "#2d2d2d",
        fontSize: "16px",
        marginLeft: "40px",
      }}
    >
      <div
        style={{
          maxWidth: 1000,
        //   margin: "0 auto",
        //   padding: "32px 24px",
        }}
      >
        <h2
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 20,
            fontFamily: "Gilroy, sans-serif",
            letterSpacing: 0,
          }}
        >
          Reviews
        </h2>

        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0 }}
            >
              <rect width="36" height="36" rx="4" fill="#1a3a6b" />
              <path
                d="M18 8 L22 14 L28 15 L23 20 L25 26 L18 23 L11 26 L13 20 L8 15 L14 14 Z"
                fill="white"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#1a3a6b",
                  fontFamily: "Arial, sans-serif",
                  lineHeight: 1.2,
                }}
              >
                Authentic Reviews™
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#1a3a6b",
                  fontFamily: "Arial, sans-serif",
                  letterSpacing: 0.5,
                }}
              >
                bazaarvoice
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #ccc",
            padding: "20px 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 14,
                color: "#2d2d2d",
                marginBottom: 8,
                fontFamily: "Arial, sans-serif",
              }}
            >
              Rating Snapshot
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#2d2d2d",
                marginBottom: 16,
                fontFamily: "Arial, sans-serif",
              }}
            >
              Select a row below to filter reviews.
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {ratingData.map(({ stars, count }) => {
                const maxCount = 107;
                const barWidth = (count / maxCount) * 100;
                return (
                  <div
                    key={stars}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: "#2d2d2d",
                        width: 40,
                        flexShrink: 0,
                        fontFamily: "Arial, sans-serif",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {stars === 1 ? "1 star" : `${stars} stars`}
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: 18,
                        backgroundColor: "#e0d8cc",
                        borderRadius: 2,
                        overflow: "hidden",
                        maxWidth: 300,
                      }}
                    >
                      <div
                        style={{
                          width: `${barWidth}%`,
                          height: "100%",
                          backgroundColor: "#c9a84c",
                          borderRadius: 2,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: 13,
                        color: "#2d2d2d",
                        width: 24,
                        textAlign: "right",
                        flexShrink: 0,
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: 14,
                color: "#2d2d2d",
                marginBottom: 12,
                fontFamily: "Arial, sans-serif",
              }}
            >
              Overall Rating
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <span
                style={{
                  fontSize: 52,
                  fontWeight: "300",
                  color: "#2d2d2d",
                  lineHeight: 1,
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {overallRating}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <StarRating rating={overallRating} size={22} />
                <span
                  style={{
                    fontSize: 13,
                    color: "#2d2d2d",
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {totalReviews} Reviews
                </span>
              </div>
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#2d2d2d",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {recommendCount} out of {recommendTotal} ({recommendPercent}%) reviewers recommend
              this product
            </div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <div
            style={{
              fontSize: 14,
              color: "#2d2d2d",
              marginBottom: 8,
              fontFamily: "Arial, sans-serif",
            }}
          >
            Summary of Reviews
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 6,
              marginBottom: 10,
            }}
          >
            <span style={{ color: "#c9a84c", fontSize: 14, marginTop: 1 }}>✦</span>
            <span
              style={{
                fontSize: 13,
                color: "#2d2d2d",
                fontFamily: "Arial, sans-serif",
                fontStyle: "italic",
              }}
            >
              AI-generated from customer reviews, which may include incentivized reviews.
            </span>
          </div>
          <p
            style={{
              fontSize: 13,
              color: "#2d2d2d",
              lineHeight: 1.6,
              fontFamily: "Arial, sans-serif",
              margin: 0,
            }}
          >
            The mattress is generally well-received, with many customers finding it comfortable and
            supportive. The pillow top provides a nice feel and he mattre...
          </p>
        </div>
      </div>




      
    </div>
  );
}



