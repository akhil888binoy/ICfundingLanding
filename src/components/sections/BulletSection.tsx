import { motion } from "framer-motion";
import { FaCogs } from "react-icons/fa";
import { FaBitcoin, FaLayerGroup, FaUsers, FaChartLine } from "react-icons/fa6";

const bullets = [
  {
    title: "Crypto-Exclusive Focus",
    desc: "Trade over 500 pairs including BTC, ETH, altcoins, futures, and perpetuals – with no distractions from forex or indices.",
    icon: <FaBitcoin className="text-4xl sm:text-5xl text-[#A855F7]" />,
  },
  {
    title: "Flexible Challenges",
    desc: "Choose 1-Step or 2-Step evaluations with realistic rules, crafted for true crypto volatility.",
    icon: <FaLayerGroup className="text-4xl sm:text-5xl text-[#A855F7]" />,
  },
  {
    title: "Hybrid Tech",
    desc: "Web2 ease for onboarding and dashboards meets Web3 features like smart contract payouts and governance tokens (coming soon).",
    icon: <FaCogs className="text-4xl sm:text-5xl text-[#A855F7]" />,
  },
  {
    title: "Community & Education",
    desc: "Join our Discord for tips, webinars, and trader networking — build your inner circle of crypto pros.",
    icon: <FaUsers className="text-4xl sm:text-5xl text-[#A855F7]" />,
  },
  {
    title: "Scalable Funding",
    desc: "Start with $5K accounts and double your capital at milestones, scaling up to $1M+.",
    icon: <FaChartLine className="text-4xl sm:text-5xl text-[#A855F7]" />,
  },
  {
    title: "Scalable Funding",
    desc: "Start with $5K accounts and double your capital at milestones, scaling up to $1M+.",
    icon: <FaChartLine className="text-4xl sm:text-5xl text-[#A855F7]" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function BulletSection() {
  return (
    <section className="min-h-screen w-full bg-black flex flex-col justify-center items-center px-4 sm:px-10 md:px-20 py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl italic md:text-6xl lg:text-7xl font-antic mb-16 text-white text-center"
      >
        Why Choose IC Funding?
      </motion.h1>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {bullets.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              y: -5,
              scale: 1.02,
              boxShadow: "0px 0px 25px rgba(168,85,247,0.25)",
            }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="relative group p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-800 hover:from-[#1C1C1C] hover:to-[#161616] transition-all duration-500 overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#A855F7]/10 via-[#7C3AED]/5 to-transparent blur-2xl pointer-events-none" />

            {/* Icon */}
            <div className="mb-3 sm:mb-4 flex justify-start">{item.icon}</div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-antic text-[#b579ed] font-extrabold mb-2 sm:mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 font-dmsans text-sm sm:text-base tracking-[0.5px]">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
