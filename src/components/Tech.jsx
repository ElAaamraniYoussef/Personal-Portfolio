import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      {/* Add an id to match the navbar link */}
      <div id="tech">
        {/* Title Section */}
        <motion.div variants={textVariant()}>
          <h1 className="flex justify-center text-white text-[32px] font-bold mb-10">
            Skills
          </h1>
        </motion.div>

        {/* Technology Icons */}
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div
              className="flex flex-col items-center"
              key={technology.name}
            >
              <div className="w-28 h-28 flex justify-center items-center">
                <BallCanvas icon={technology.icon} />
              </div>
              <p className="text-center text-white mt-2 text-[14px]">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
