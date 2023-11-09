import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#250657', color: '#FFF', 
    }}
    contentArrowStyle={{ borderRight: '5px solid ##250657' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon}
          alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain " />
      </div>
    }
    // iconClassName={"blue-pink-gradient"}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {experience.title}</h3>
      <p className=" text-secondary  pb-1 text-[16px] font-semibold" style={{margin: 0}}>
        {experience.company_name}
      </p>

      <ul className="mt-2 list-disc ml-5 space-y-1">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
          className="text-indigo-300 text-[12px] pl-1 tracking-tight">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        What I have done so far
      </p>
      <h2 className={styles.sectionHeadText}>
        Work Experience.
      </h2>

      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>

      </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Experience, "work")