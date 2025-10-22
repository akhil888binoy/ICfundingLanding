import GradientBlinds from "../../styles/background/GradientBlinds";
import ChallengeCard from "./ChallengeCard";
import { useState } from "react";




export default function ChallengesAndPricing() {
  const [selectedPlan, setSelectedPlan] = useState('2 step');
  const [selectedSize, setSelectedSize] = useState('$100K');

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
        <ChallengeCard
          selectedPlan={selectedPlan}
          selectedSize={selectedSize}
          onPlanChange={setSelectedPlan}
          onSizeChange={setSelectedSize}
        />
      </div>
    </div>
  );
}
