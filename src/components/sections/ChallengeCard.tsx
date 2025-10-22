import { motion } from "framer-motion";
import { useState } from "react";
import { BiCheck, BiInfoCircle, BiMinus, BiPlus } from "react-icons/bi";

interface ChallengeCardProps {
  selectedPlan: string;
  selectedSize: string;
  onPlanChange: (plan: string) => void;
  onSizeChange: (size: string) => void;
}

export default function ChallengeCard({
  selectedPlan,
  selectedSize,
  onPlanChange,
  onSizeChange,
}: ChallengeCardProps) {
  const planOptions = ["Bronze", "Silver", "Gold"];
  const sizeOptions = ["$5K", "$10K", "$25K", "$50K", "$100K"];

  const stageData = [
    { stage: 1, title: "Student", profitTarget: "$8,000 (8%)", maxLoss: "10%", maxDailyLoss: "5%", minDays: "3 days", leverage: "1:100" },
    { stage: 2, title: "Practitioner", profitTarget: "$5,000 (5%)", maxLoss: "10%", maxDailyLoss: "5%", minDays: "3 days", leverage: "1:100" },
    { stage: 3, title: "Master", profitTarget: "-", maxLoss: "10%", maxDailyLoss: "5%", minDays: "-", leverage: "1:100" },
  ];

  const rewardCycles = [
    { icon: BiCheck, label: "Tuesday 60%" },
    { icon: BiCheck, label: "Bi-weekly 80%" },
    { icon: BiCheck, label: "On Demand 90%" },
    { icon: BiCheck, label: "Monthly 100%" },
  ];

  const tableRows = [
    { label: "Profit Target", values: ["$8,000 (8%)", "$5,000 (5%)", "-"], hasControls: true },
    { label: "Maximum Loss", values: ["10%", "10%", "10%"] },
    { label: "Maximum Daily Loss", values: ["5%", "5%", "5%"] },
    { label: "Minimum Trading Days", values: ["3 days", "3 days", "-"] },
    { label: "Leverage", values: ["1:100", "1:100", "1:100"] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 text-white relative"
    >
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl italic lg:text-6xl font-antic mb-4  text-white">
          Buckle Up, Your Journey Starts Here 
        </h1>
        <p className=" text-gray-300 text-lg sm:text-xl font-dmsans font-light max-w-3xl mx-auto leading-relaxed">
          Choose your challenge. Trade confidently. Earn your funding.  
          Designed for all traders beginners to pros across 195+ countries.
        </p>
      </div>

      {/* Evaluation Section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black/50 border border-white/10 rounded-3xl p-8 sm:p-10 lg:p-14 shadow-lg backdrop-blur-xl"
      >
        <h3 className="text-2xl sm:text-3xl font-antic text-center mb-8 ">
          Evaluation Stages
        </h3>

    <div className="flex flex-wrap justify-center gap-3 mb-6">
        {planOptions.map((plan) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            key={plan}
            onClick={() => onPlanChange(plan)}
            className={`px-6 py-3 rounded-full font-dmsans text-sm sm:text-base tracking-wide transition-all shadow-md ${
              selectedPlan === plan
                ? "bg-gradient-to-tr from-[#A855F7] to-[#7B2FF7] text-white shadow-[#A855F7]/50"
                : "bg-white/10 hover:bg-white/20 text-white/80"
            }`}
          >
            {plan}
          </motion.button>
        ))}
      </div>
        {/* Reward Cycles */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {rewardCycles.map((cycle, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#A855F7] to-[#7B2FF7] flex items-center justify-center">
                <cycle.icon className="text-white w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-dmsans text-white/90">{cycle.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[500px]">
            <div className="grid grid-cols-4 text-center font-dmsans text-white/70  pb-3 mb-4">
              <div></div>
              {stageData.map((stage) => (
                <div key={stage.stage} className="font-semibold text-white">
                  {stage.title}
                </div>
              ))}
            </div>

            {tableRows.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-4 items-center text-center py-3 "
              >
                <div className="flex items-center justify-start gap-2 font-dmsans text-white/70 pl-2">
                  {row.label}
                </div>

                {row.values.map((value, idx) => (
                  <div key={idx}>
                    {row.hasControls && idx === 0 ? (
                      <div className="flex items-center justify-center gap-3">
                        <button className="p-1.5 rounded-full bg-white/10 hover:bg-white/20">
                          <BiMinus className="w-4 h-4 text-white" />
                        </button>
                        <span className="font-medium text-white">{value}</span>
                        <button className="p-1.5 rounded-full bg-white/10 hover:bg-white/20">
                          <BiPlus className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-white font-medium">{value}</span>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Purchase Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-tr from-[#A855F7]/10 to-[#7B2FF7]/10 border border-white/10 rounded-2xl mt-12 p-6 sm:p-8  items-center justify-between gap-6 backdrop-blur-xl"
      >
         <div className="flex flex-wrap  gap-3 mb-12">

        {sizeOptions.map((size) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            key={size}
            onClick={() => onSizeChange(size)}
            className={`px-6 py-3 rounded-full font-dmsans text-sm sm:text-base tracking-wide transition-all ${
              selectedSize === size
                ? "bg-gradient-to-tr from-[#A855F7] to-[#7B2FF7] text-white shadow-[#A855F7]/50"
                : "bg-white/10 hover:bg-white/20 text-white/80"
            }`}
          >
            {size}
          </motion.button>
        ))}
      </div>

       <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
  {/* Buy Button on the left */}
 

  {/* Account Size & Price on the right */}
  <div className="flex flex-wrap justify-center md:justify-end gap-8 w-full md:w-auto">
  <div className="flex items-center gap-2">
    <p className="text-white/70 font-dmsans text-sm tracking-wide">Account Size:</p>
    <p className="text-3xl font-semibold font-dmsans">100K</p>
  </div>
  <div className="flex items-center gap-2">
    <p className="text-white/70 font-dmsans text-sm tracking-wide">Price:</p>
    <p className="text-3xl font-semibold font-dmsans">$529</p>
  </div>
</div>


   <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="bg-gradient-to-tr from-[#A855F7] to-[#7B2FF7] px-10 py-3 rounded-xl font-dmsans text-lg font-semibold shadow-lg hover:shadow-[#A855F7]/40 w-full md:w-auto"
  >
    Buy Challenge
  </motion.button>
</div>

       
      </motion.div>
    </motion.div>
  );
}
