import { motion } from "framer-motion";
import GradientBlinds from "../../styles/background/GradientBlinds";
import ChallengeCard from "./ChallengeCard";
import { useState } from "react";

const challengeData = [
  {
    challenge: "1-Step",
    profit: "10%",
    minDays: "5",
    dailyLoss: "4%",
    totalLoss: "6% (trailing)",
    leverage: "Up to 1:100",
  },
  {
    challenge: "2-Step",
    profit: "Phase 1: 8%; Phase 2: 5%",
    minDays: "5 per phase",
    dailyLoss: "5%",
    totalLoss: "10%",
    leverage: "Up to 1:100",
  },
];

const pricingData = [
  {
    size: "$5K",
    oneStep: "$49",
    twoStep: "$39",
    split: "80% (up to 90%)",
    addOns: "Reset: $20",
  },
  {
    size: "$10K",
    oneStep: "$89",
    twoStep: "$69",
    split: "80% (up to 90%)",
    addOns: "Increased Drawdown: +15% fee",
  },
  {
    size: "$25K",
    oneStep: "$199",
    twoStep: "$149",
    split: "80% (up to 90%)",
    addOns: "-",
  },
  {
    size: "$50K",
    oneStep: "$299",
    twoStep: "$249",
    split: "80% (up to 90%)",
    addOns: "-",
  },
  {
    size: "$100K",
    oneStep: "$499",
    twoStep: "$399",
    split: "80% (up to 90%)",
    addOns: "-",
  },
  {
    size: "$200K",
    oneStep: "$899",
    twoStep: "$799",
    split: "80% (up to 90%)",
    addOns: "-",
  },
];

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
