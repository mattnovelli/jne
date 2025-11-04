"use client";

import React from "react";

export default function TurbulenceFilter() {
  return (
    <svg style={{ position: "absolute", zIndex: -1, width: 0, height: 0 }}>
      <defs>
        <filter id="turbulence-filter">
          <feTurbulence
            id="turbulence-filter__turbulence"
            type="turbulence"
            baseFrequency="0.03"
            numOctaves={1}
            result="turbulence"
          >
            <animate
              attributeName="baseFrequency"
              from="0.03"
              to="0.04"
              dur="0.5s"
              calcMode="discrete"
              values="0.03;0.01;0.04"
              keyTimes="0;0.33333;0.66666"
              fill="freeze"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            id="turbulence-filter__displacement"
            in2="turbulence"
            in="SourceGraphic"
            scale={4}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
