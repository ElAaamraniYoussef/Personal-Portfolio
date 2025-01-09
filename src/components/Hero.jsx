import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from "../assets/herobg.png"; // Background image import

// Animation variants
const textContainer = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto bg-cover bg-center"
      id="hero"
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Violet Circle */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />

          {/* Gradient Line */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Hero Text */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            variants={textItem}
          >
            Hi, I am <span className="text-[#ff4309]">Youssef</span>
          </motion.h1>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-center text-gray-100`}
            variants={textItem}
          >
            I develop web applications & <br className="sm:block hidden" />
            3D user interfaces
          </motion.p>
        </motion.div>
      </div>

      {/* 3D Canvas Component */}
      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-3 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0], // Moves up and down
              }}
              transition={{
                duration: 1.5, // 1.5 seconds for a full cycle
                repeat: Infinity, // Infinite repetition
                repeatType: "loop", // Continuous looping
              }}
              className="w-3 h-3 rounded-full bg-[#ff4309] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
