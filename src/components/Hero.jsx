import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
// Import background image dynamically
import herobg from "../assets/herobg.png";

const Hero = () => {
  return (
    <section
              className="relative w-full h-screen mx-auto bg-cover bg-center "
              
           >
      <div
                      className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
                >
                  <div className="flex flex-col justify-center items-center mt-5">
                            {/* Violet Circle */}
                            <div className="w-5 h-5 rounded-full bg-[#915eff]" />

                            {/* Gradient Line */}
                            <div className="w-1 sm:h-80 h-40 violet-gradient " />
                  </div>

                  {/* Hero Text */}
                  <div>
                            <h1 className={`${styles.heroHeadText} text-white`}>
                              Hi , I am <span className="text-[#ff4309]">Youssef</span>
                            </h1>
                            <p className={`${styles.heroSubText} mt-2 text-center text-gray-100`}>
                              I develop web applications & <br className="sm:block hidden" />
                              3D user interfaces
                            </p>
                  </div>
      </div>
      <ComputersCanvas /> 
    
      {/* Custom Canvas Component also this one thosen't work , check that later    */}
     
      <div className="absolute xs:bottom-10 bottom-3 w-full flex justify-center items-center">
  <a href="#about">
    <div className="w-[35px] h-[60px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
      <motion.div
        animate={{
          y: [0, 24, 0], // Moves up and down
        }}
        transition={{
          duration: 0.5, // 1.5 seconds for a full cycle
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
