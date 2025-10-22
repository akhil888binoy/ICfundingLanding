import { motion } from "framer-motion";
import GradientBlinds from "../../styles/background/GradientBlinds";
import ChallengeCard from "./ChallengeCard";
import { useState } from "react";
import RulesRegulations from "./RulesRegulations";



export default function Rules() {
  
  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10  bg-black/30">
       <RulesRegulations></RulesRegulations>
      </div>
    </div>
  );
}
