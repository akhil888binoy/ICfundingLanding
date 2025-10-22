import { motion } from "framer-motion";
import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    alert(`Thanks for joining the waitlist: ${email}`);
    setEmail("");
  };

  return (
    <section className="w-full py-20 px-6 sm:px-12 lg:px-24 bg-black/30 backdrop-blur-xl flex flex-col items-center justify-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-antic italic text-white mb-8 text-center"
      >
        Join the Waitlist
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl text-center mb-12 font-dmsans"
      >
        Be among the first to access The IC Funding platform, get early discounts, and priority updates on new challenges and Web3 features.
      </motion.p>

      {/* Email Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full sm:w-[500px] flex flex-col sm:flex-row gap-4"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 p-3 rounded-xl border border-white/20 bg-black/50 text-white font-dmsans placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:border-transparent transition"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="bg-[#A855F7] bg-gradient-to-tr text-white p-3 px-6 rounded-xl font-dmsans tracking-[2px] text-sm sm:text-base md:text-lg transition-transform duration-300"
        >
          Join Waitlist
        </motion.button>
      </motion.form>

      {/* Disclaimer */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 text-gray-400 text-sm sm:text-base max-w-2xl text-center font-dmsans"
      >
        By joining, you agree to receive updates and promotions from The IC Funding. We respect your privacy.
      </motion.p>
    </section>
  );
}
