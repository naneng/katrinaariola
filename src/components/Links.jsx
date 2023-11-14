import React from "react";
import { github, linkedin } from '../assets'; 
// import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";
// import { projects } from '../constants';
// import { fadeIn, textVariant } from '../utils/motion';



const Links = () => {
  return (
    <div className={`${styles.paddingX} w-full flex flex-col items-center pb-3   bg-transparent`}>
      <div className="flex items-center justify-center mb-1 flex-1">
        <a href="https://www.linkedin.com/in/katrina-ariola" target="_blank" rel="noopener noreferrer" className="text-white mx-1">
          <img src={linkedin} alt="logo" className="w-7 h-7 sm:w-6 sm:h-6 hover:bg-primary hover:opacity-50" />
        </a>
        <a href="https://github.com/naneng" target="_blank" rel="noopener noreferrer" className="text-white mx-1">
          <img src={github} alt="logo" className="w-7 h-7 sm:w-6 sm:h-6 hover:bg-primary hover:opacity-50" />
        </a>
    
      </div>
      <p className="text-white text-[12px] sm:text-[10px] font-normal">Copyrights 2023 Katrina Ariola. All rights reserved</p>
     
    </div>
  )
}

export default Links;