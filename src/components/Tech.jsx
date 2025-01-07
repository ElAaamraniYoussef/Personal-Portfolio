import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {  textVariant } from '../utils/motion';
import { motion } from "framer-motion";


const Tech = () => {
  return (
  
 <>
   <motion.div variants={textVariant()}>
   <h1 className='flex justify-center text-white text-[32px] font-bold mb-10 '>
      Skills  
  </h1>
      </motion.div> 

     <div className='flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((technology) => (
      <div className='w-28 h-28' key={technology.name}>
        <BallCanvas icon={technology.icon} />
      </div>

    ))}
  </div>

 </>
   

  );
};

export default SectionWrapper(Tech, "");
