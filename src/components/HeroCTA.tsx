import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeroCTA() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle email submission here (API call, etc.)
    navigate("/waitlist");
  };

  return (
    <>
   <motion.div
  className="absolute inset-0 flex flex-col items-center justify-center h-screen z-10 bottom-10  lg:px-10 text-center bg-black/40 pointer-events-none"
  initial="hidden"
  animate="visible"
  transition={{ staggerChildren: 0.3 }}
>
  {/* Headline */}
  <motion.h1
    className="text-white font-antic italic font-extralight 
               text-5xl sm:text-5xl md:text-6xl lg:text-[100px] xl:text-[120px] 
               leading-tight sm:leading-snug"
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    }}
  >
    Unlock the Inner  Circle
  </motion.h1>

  {/* Subtext */}
  <motion.p
    className="mt-3 sm:mt-5 text-white font-dmsans tracking-[1.5px] font-medium 
               text-md sm:text-md md:text-2xl lg:text-[32px] 
               leading-snug max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
    }}
  >
    Trade Crypto with Up to $200K in Simulated Funding
  </motion.p>


</motion.div>


    <form
  onSubmit={handleSubmit}
  className="absolute inset-x-0 lg:bottom-75 bottom-33 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-6 max-w-md sm:max-w-xl mx-auto text-center z-10"
>
  <input
    type="email"
    required
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full sm:flex-1 p-3 sm:p-4 px-4 rounded-xl bg-black/70 border border-white/20 text-white placeholder-gray-400 font-dmsans focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:border-transparent transition"
  />

 <button
  type="submit"
  className="w-full sm:w-auto bg-[#A855F7] text-white font-dmsans py-2 sm:py-2.5 px-6 rounded-3xl text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
>
  Join Waitlist
</button>

</form>

    </>
  );
}
