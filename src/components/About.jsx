import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-[200px]  ">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[15px] shadow-card"
    >
      <div
        className=" rounded-[15px] py-4 px-6 min-h-[220px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-[#150833]  text-[16px] font-bold text-center hover:text-[#ff4309] ">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText }>Web Developer - Youssef Elaamrani</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white  text-[17px] max-w-3xl leading-[30px]"
      >
       Web Developer - Youssef Elaamrani

As a dedicated web developer, I specialize in building dynamic and responsive websites.
 With a strong foundation in front-end and back-end technologies, I am passionate
  about creating seamless user experiences and optimizing web performance. 
  My expertise spans across HTML, CSS, JavaScript, and frameworks like React and Node.js.
   I am committed to continuous learning and always stay up to date with the latest industry trends 
   and technologies to ensure I deliver high-quality and scalable solutions.
    I thrive in collaborative environments and aim to bring creative solutions to any challenge.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about"); 
