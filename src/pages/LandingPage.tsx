import { useNavigate } from 'react-router-dom';
import BulletSection from '../components/sections/BulletSection.tsx';
import ChallengesAndPricing from '../components/sections/ChallengesAndPricing.tsx';
import FAQ from '../components/sections/Faq.tsx';
import Howitworks from '../components/sections/Howitworks.tsx';
import Rules from '../components/sections/Rules.tsx';
import RulesRegulations from '../components/sections/RulesRegulations.tsx';
import GradientBlinds from '../styles/background/GradientBlinds.tsx';
import CountUp from '../styles/CountUp.tsx';
  import { motion } from "framer-motion";
import HeroCTA from '../components/HeroCTA.tsx';


const LandingPage = () => {
 const navigate = useNavigate();

  return (
    <>
   <div className="relative w-screen h-screen overflow-hidden">
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
    className="absolute inset-0 w-full h-full"
  />



  
    <HeroCTA></HeroCTA>

</div>


    <BulletSection></BulletSection>
    <ChallengesAndPricing></ChallengesAndPricing>
    <Howitworks></Howitworks>
    <Rules></Rules>
    <FAQ></FAQ>
    </>
  );
};

export default LandingPage

