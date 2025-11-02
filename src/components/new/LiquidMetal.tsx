import { LiquidMetal as LiquidMetal1 } from "@paper-design/shaders-react";

export default function LiquidMetal() {
  return (
    <LiquidMetal1
      image="https://workers.paper.design/file-assets/01K91Q1VENN7B714TBXKHJM7WZ/01K91QDAQ15YFXWVN2Z46A9ZVR.svg"
      speed={1.2}
      colorBack="#00000000"
      colorTint="#ffffff"
      softness={0.25}
      repetition={2.96}
      shiftRed={0.3}
      shiftBlue={0}
      distortion={0.21}
      contour={0.25}
      scale={0.67}
      rotation={0}
      shape="diamond"
      angle={70}
      style={{
        backgroundColor: "transparent",
        height: "500px", // logo height
        width: "500px",  // logo width
      }}
    />
  );
}
