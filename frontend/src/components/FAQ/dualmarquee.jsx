import React from "react";
import Marquee from "react-fast-marquee";

const marqueeText = "Frequently Asked Questions";

const DualMarquee = () => (
  <div style={{ width: "100%", marginTop: "0.5rem" }}>
    {/* Top Marquee */}
    <div
      style={{
        width: "100vw",
        minWidth: "500px",
        maxWidth: "20000px",
        margin: "0 auto",
        background: "#1A237E",
        borderRadius: "1px",
        boxShadow: "0 2px 8px rgba(26,35,126,0.10)",
        transform: "rotate(-3deg)",
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Marquee
        direction="right"
        gradient={false}
        speed={35}
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.1em",
          padding: "0.25rem 0",
          whiteSpace: "nowrap",
        }}
      >
        {marqueeText} &nbsp; {marqueeText}
      </Marquee>
    </div>

    {/* Bottom Marquee */}
    <div
      style={{
        width: "100vw",
        minWidth: "500px",
        maxWidth: "20000px",
        margin: "-1.5rem auto 0 auto",
        background: "#1A237E",
        borderRadius: "1px",
        boxShadow: "0 2px 8px rgba(26,35,126,0.10)",
        transform: "rotate(3deg)",
        overflow: "hidden",
        position: "relative",
        zIndex: 2,
      }}
    >
      <Marquee
        direction="right"
        gradient={false}
        speed={35}
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.1em",
          padding: "0.25rem 0",
          whiteSpace: "nowrap",
        }}
      >
        {marqueeText} &nbsp; {marqueeText}
      </Marquee>
    </div>
  </div>
);

export default DualMarquee;
