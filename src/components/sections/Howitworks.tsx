import React from "react";
import { motion } from "framer-motion";
import { BiRocket, BiLineChart, BiWallet, BiTargetLock } from "react-icons/bi";

const steps = [
  {
    title: "Join the waitlist",
    desc: "Select your challenge and get ready to start trading.",
    icon: <BiRocket className="text-4xl sm:text-5xl text-[#A855F7]" />,
  },
  {
    title: "Trade on demo accounts",
    desc: "Use your chosen exchange (Bybit, OKX, Binance) to practice.",
    icon: <BiLineChart className="text-4xl sm:text-5xl text-[#A855F7]" />,
  },
  {
    title: "Hit targets",
    desc: "Achieve profit targets while staying within risk limits.",
    icon: <BiTargetLock className="text-4xl sm:text-5xl text-[#A855F7]" />,
  },
  {
    title: "Get funded",
    desc: "Start earning splits after successful evaluation.",
    icon: <BiWallet className="text-4xl sm:text-5xl text-[#A855F7]" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function HowItWorks() {
  return (
    <section className="min-h-screen w-full bg-black px-6 sm:px-10 md:px-20 py-16 relative flex flex-col justify-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl italic sm:text-5xl md:text-6xl font-antic text-white mb-16 text-center"
      >
        How It Works
      </motion.h2>

      {/* Steps */}
      <motion.div
        className="flex flex-col gap-12 sm:gap-14 md:gap-16 max-w-5xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={stepVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150, damping: 14 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 bg-transparent"
          >
            {/* Step Number & Text */}
            <div className="flex items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-[75%]">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#A855F7] flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                {idx + 1}
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-antic font-extrabold text-white mb-1 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base font-dmsans tracking-[1px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>

            {/* Icon (responsive alignment) */}
            <div className="hidden lg:flex flex-shrink-0 self-start lg:self-center mt-3 lg:mt-0">
            {step.icon}
            </div>
        
        </motion.div>
        ))}
    </motion.div>
    </section>
  );
}
