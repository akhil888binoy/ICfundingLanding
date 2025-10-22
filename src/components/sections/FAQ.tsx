import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const faqs = [
  {
    question: "What is The IC Funding?",
    answer: "A crypto-exclusive prop firm offering simulated funded accounts via challenges.",
  },
  {
    question: "Is it Web3?",
    answer: "Hybrid – Web2 for ease, Web3 for transparent payouts and tokens.",
  },
  {
    question: "How do challenges work?",
    answer: "Trade demos, hit targets, get funded.",
  },
  {
    question: "Real money?",
    answer: "No – simulated; rewards come from fees.",
  },
  {
    question: "Exchanges?",
    answer: "Bybit, OKX, Binance – choose yours.",
  },
  {
    question: "Why waitlist?",
    answer: "Launching soon – get discounts and priority.",
  },
  {
    question: "Payouts?",
    answer: "80-90% split; fast via crypto/wallets.",
  },
  {
    question: "Risks?",
    answer: "Drawdown breaches close accounts; follow rules.",
  },
  {
    question: "Web3 tokens?",
    answer: "Coming soon – stake for rewards/governance.",
  },
  {
    question: "Support?",
    answer: "Discord/email for queries.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="min-h-screen w-full bg-black px-6 sm:px-12 md:px-20 py-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-antic italic text-white mb-16 text-center"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            layout
            initial={{ borderRadius: 20 }}
            className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg cursor-pointer overflow-hidden"
            onClick={() => toggle(idx)}
          >
            {/* Question */}
            <motion.div
              className="flex justify-between items-center p-5"
              layout
            >
              <h3 className="text-lg sm:text-xl font-antic font-extrabold text-[#bf80f9]">
                {faq.question}
              </h3>
              <div className="text-white text-2xl">
                {openIndex === idx ? <BiChevronUp /> : <BiChevronDown />}
              </div>
            </motion.div>

            {/* Answer */}
            {openIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                className="px-5 pb-5 text-gray-300 text-sm sm:text-base font-dmsans leading-relaxed"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
