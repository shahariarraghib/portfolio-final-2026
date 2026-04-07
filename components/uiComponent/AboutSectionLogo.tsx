"use client";
import { MarqueeLogoData } from "@/content/marqueeLogoData";
import React from "react";
import Image from "next/image";
import { MarqueeLogo } from "@/types/marqueeLogo";

const Marquee = ({
  logos,
  reverse = false,
}: {
  logos: MarqueeLogo[];
  reverse?: boolean;
}) => {
  const speed = "20s";

  return (
    <div
      className="h-[600px] overflow-hidden"
      style={
        {
          "--item-gap": "10px",
          "--speed": speed,
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        } as React.CSSProperties
      }
    >
      <div
        className="flex flex-col"
        style={{
          animation: `marquee-vertical var(--speed) linear infinite ${
            reverse ? "reverse" : ""
          }`,
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={logo.name + index}
            className="flex justify-center items-center"
            style={{
              height: "100px",
              marginBottom: "var(--item-gap)",
            }}
          >
            {/* ✅ Dynamic Image */}
            <Image
              src={logo.image}
              alt={logo.name}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function AboutSectionLogo() {
  React.useEffect(() => {
    const styleSheet = document.createElement("style");

    styleSheet.innerText = `
      @keyframes marquee-vertical {
        from {
          transform: translateY(0);
        }
        to {
          transform: translateY(calc(-50% - 20px));
        }
      }
    `;

    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="flex gap-6 justify-center">
      <Marquee logos={MarqueeLogoData} reverse />
    </div>
  );
}

export default AboutSectionLogo;
