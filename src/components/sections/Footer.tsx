import { FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const links = ["Home", "Challenges", "Pricing", "Rules", "FAQ", "Blog", "Waitlist"];

export default function Footer() {
  return (
    <footer className="bg-black backdrop-blur-xl text-white py-16 px-6 sm:px-12 lg:px-24">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 text-center lg:text-left">
        {/* Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 lg:gap-6">
          {links.map((link, idx) => (
            <motion.a
              key={idx}
              whileHover={{ scale: 1.1, color: "#A855F7" }}
              transition={{ type: "spring", stiffness: 150 }}
              href={`#${link.toLowerCase()}`}
              className="text-white font-dmsans font-light tracking-[1px]"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center lg:items-end gap-4">
          <p className="text-gray-300 font-dmsans text-sm sm:text-base">
            Email:{" "}
            <a href="mailto:info@theicfunding.com" className="hover:text-[#A855F7]">
              info@theicfunding.com
            </a>
          </p>
          <div className="flex gap-5 text-2xl text-gray-300 justify-center">
            <a href="#" className="hover:text-[#A855F7]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#A855F7]">
              <FaDiscord />
            </a>
            <a href="#" className="hover:text-[#A855F7]">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-12 text-gray-400 text-sm max-w-3xl mx-auto text-center font-dmsans leading-relaxed px-4">
        The IC Funding is an educational platform with simulated trading. No real capital is risked.
        Results not guaranteed. Consult local regulations.
      </div>
    </footer>
  );
}
