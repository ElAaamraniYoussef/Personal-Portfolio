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
        <p className={styles.sectionSubText }>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white  text-[17px] max-w-3xl leading-[30px]"
      >
        Hautement motivé et apprenant rapide, capable d'acquérir rapidement de
        nouvelles compétences tant dans des environnements académiques que
        freelances. Capacité prouvée à saisir rapidement des concepts complexes,
        démontrant une approche proactive envers l'apprentissage continu.
        S'épanouit dans des environnements collaboratifs, habile à favoriser le
        travail d'équipe et la communication efficace, perfectionnée à travers
        des projets scolaires et des travaux en freelance.
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
