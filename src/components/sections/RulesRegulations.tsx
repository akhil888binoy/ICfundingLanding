import { motion } from "framer-motion";
import {
  BiErrorCircle,
  BiTime,
  BiShield,
  BiDollarCircle,
  BiWorld,
  BiCheckCircle,
  BiInfoCircle,
} from "react-icons/bi";

const rules = [
  {
    title: "Drawdowns",
    desc: "4–5% daily max; 6–10% overall (trailing to lock profits).",
    icon: <BiErrorCircle className="text-white w-10 h-10" />,
  },
  {
    title: "Trading Guidelines",
    desc: "Minimum 5 trading days. Allowed: Scalping, hedging, EAs. Forbidden: Martingale, arbitrage exploits.",
    icon: <BiTime className="text-white w-10 h-10" />,
  },
  {
    title: "Positions",
    desc: "Overnight and weekend positions allowed. No news trading restrictions.",
    icon: <BiShield className="text-white w-10 h-10" />,
  },
  {
    title: "Payouts",
    desc: "Bi-weekly payouts with a minimum of $50. 80–90% profit split, processed via Web3 or bank/crypto.",
    icon: <BiDollarCircle className="text-white w-10 h-10" />,
  },
  {
    title: "Regulations",
    desc: "Educational platform only – no brokerage. AML/KYC required. Restricted in certain regions (e.g., US CFD bans).",
    icon: <BiWorld className="text-white w-10 h-10" />,
  },
  {
    title: "Web3 Features",
    desc: "Smart contracts enforce all rules automatically. View them transparently on Etherscan.",
    icon: <BiCheckCircle className="text-white w-10 h-10" />,
  },
  {
    title: "Disclaimer",
    desc: "Trading involves risk. Past performance is not indicative of future results.",
    icon: <BiInfoCircle className="text-white w-10 h-10" />,
  },
];

export default function RulesRegulations() {
  return (
    <section className="text-white px-6 sm:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-antic italic mb-6 text-center"
        >
          Clear Rules for Fair Trading
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-16 font-dmsans leading-relaxed text-center"
        >
          Our rules promote sustainable trading strategies in crypto markets. 
          We're compliant and transparent – a hybrid Web2/Web3 model built for trust.
        </motion.p>

        {/* Glassmorphism Container */}
        <div className="bg-black/50 backdrop-blur-xl shadow-xl rounded-3xl p-10 flex flex-col gap-10">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row lg:items-center gap-5"
            >
              
              {/* Text */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-2xl font-extrabold text-white font-antic drop-shadow-lg mb-1">
                  {rule.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base lg:text-md font-dmsans tracking-[1px]">
                  {rule.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
