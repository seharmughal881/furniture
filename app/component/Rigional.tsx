function RatingBar({ label }: { label: string }) {
  return (
    <div className="review-metric">
      <div className="metric-label">{label}</div>
      <div className="metric-row">
        <div className="metric-bars" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="metric-score">5.0</div>
      </div>
    </div>
  );
}

export default function RegionalReviewsReplica() {
  return (
    <main className="review-page">
      <section className="review-frame" aria-label="Regional Reviews">
        <div className="top-rule" />
        <h1>Regional Reviews</h1>

        <div className="review-content">
          <article className="review-copy">
            <div className="stars" aria-label="5 star rating">★★★★★</div>
            <h2>Great mattress</h2>
            <h3>Yogagirl</h3>
            <p className="date">8 days ago</p>
            <p className="body-copy">
              I love the Kingston mattress for its comfort, Support and quality of craftsmanship. My sleep has improved on this mattress.
            </p>

            <div className="question">
              <strong>Q: How Improve?</strong>
              <p>A: Thank you for the excellent sleep experience</p>
            </div>

            <p className="read-row">
              <strong>Reviews Read</strong>
              <span>Yes</span>
            </p>
          </article>

          <aside className="ratings-panel" aria-label="Review scores">
            <RatingBar label="Value of Product" />
            <RatingBar label="Sleep Quality" />
            <RatingBar label="Initial Product Craftmanship" />
          </aside>
        </div>

        <button className="chat-button" type="button" aria-label="Chat with a Sleep Expert">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4.25c-4.35 0-7.85 2.86-7.85 6.39 0 1.8.92 3.44 2.39 4.6l-.45 3.17 3.42-1.75c.79.23 1.63.36 2.49.36 4.34 0 7.85-2.86 7.85-6.38S16.34 4.25 12 4.25Zm0 1.65c3.38 0 6.12 2.12 6.12 4.74S15.38 15.38 12 15.38c-.86 0-1.68-.14-2.42-.42l-.36-.13-1.15.59.15-1.08-.45-.35c-1.18-.91-1.89-2.13-1.89-3.35C5.88 8.02 8.62 5.9 12 5.9Z" />
          </svg>
          <span>Chat with a Sleep Expert</span>
        </button>

        <button className="scroll-top" type="button" aria-label="Back to top">⌃</button>
      </section>

      <style>{`
        .review-page {
          min-height: 100vh;
          margin: 0;
          background: #ffffff;
          color: #222222;
          font-family: "Trebuchet MS", "Gill Sans", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .review-frame {
          position: relative;
          width: 1024px;
          height: 288px;
          background: #ffffff;
          overflow: hidden;
        }

        .top-rule {
          position: absolute;
          left: 10px;
          top: 27px;
          width: 1012px;
          height: 1px;
          background: #202020;
        }

        h1 {
          position: absolute;
          left: 18px;
          top: 38px;
          margin: 0;
          font-size: 13px;
          line-height: 13px;
          font-weight: 700;
          letter-spacing: .05px;
          color: #151515;
        }

        .review-content {
          position: absolute;
          left: 27px;
          top: 90px;
          display: flex;
          gap: 37px;
        }

        .review-copy {
          width: 602px;
        }

        .stars {
          height: 14px;
          color: #b99050;
          font-family: Arial, sans-serif;
          font-size: 14px;
          line-height: 14px;
          letter-spacing: -1.2px;
          margin: 0 0 9px 0;
        }

        h2 {
          margin: 0 0 8px 0;
          font-size: 12px;
          line-height: 12px;
          font-weight: 700;
          letter-spacing: .2px;
          color: #181818;
        }

        h3 {
          margin: 0 0 11px 0;
          font-size: 11px;
          line-height: 11px;
          font-weight: 700;
          letter-spacing: .16px;
          color: #111111;
        }

        .date {
          margin: 0 0 12px 0;
          font-size: 11px;
          line-height: 11px;
          font-weight: 400;
          color: #292929;
        }

        .body-copy {
          margin: 0 0 13px 0;
          width: 600px;
          font-size: 11px;
          line-height: 13px;
          font-weight: 400;
          letter-spacing: .18px;
          color: #252525;
          white-space: nowrap;
        }

        .question {
          margin: 0 0 18px 0;
          font-size: 11px;
          line-height: 13px;
          letter-spacing: .08px;
          color: #252525;
        }

        .question strong {
          display: block;
          margin: 0 0 10px 0;
          font-size: 11px;
          line-height: 11px;
          font-weight: 700;
          color: #151515;
        }

        .question p {
          margin: 0;
          font-size: 11px;
          line-height: 12px;
          font-weight: 400;
        }

        .read-row {
          margin: 0;
          display: flex;
          align-items: baseline;
          gap: 9px;
          font-size: 11px;
          line-height: 11px;
          color: #181818;
        }

        .read-row strong {
          font-weight: 700;
        }

        .read-row span {
          font-weight: 400;
        }

        .ratings-panel {
          width: 341px;
          height: 159px;
          margin-top: -6px;
          padding: 17px 21px 0 20px;
          background: #fbfbfb;
          box-sizing: border-box;
        }

        .review-metric {
          margin: 0 0 10px 0;
        }

        .metric-label {
          margin: 0 0 9px 0;
          font-size: 11px;
          line-height: 11px;
          font-weight: 400;
          letter-spacing: .1px;
          color: #282828;
        }

        .metric-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .metric-bars {
          display: grid;
          grid-template-columns: repeat(5, 52px);
          gap: 2px;
          height: 9px;
        }

        .metric-bars span {
          display: block;
          height: 9px;
          background: #bf9b63;
        }

        .metric-score {
          margin-top: -1px;
          width: 19px;
          font-family: Arial, sans-serif;
          font-size: 10px;
          line-height: 10px;
          font-weight: 400;
          color: #222222;
        }

        .chat-button {
          position: absolute;
          left: 723px;
          top: 239px;
          width: 229px;
          height: 37px;
          border: 0;
          border-radius: 19px;
          background: #242431;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0;
          font-family: "Trebuchet MS", "Gill Sans", Arial, sans-serif;
          font-size: 13px;
          line-height: 13px;
          font-weight: 700;
          letter-spacing: .6px;
        }

        .chat-button svg {
          width: 22px;
          height: 22px;
          fill: #ffffff;
          flex: 0 0 auto;
        }

        .scroll-top {
          position: absolute;
          left: 981px;
          top: 235px;
          width: 43px;
          height: 43px;
          border: 0;
          border-radius: 50%;
          background: #909aa5;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 17px;
          line-height: 43px;
          font-weight: 700;
          text-align: center;
          padding: 1px 0 0 0;
        }
      `}</style>
    </main>
  );
}