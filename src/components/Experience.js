import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div
style={{scaleY: scrollYProgress}}
  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
              position="Develop FullStack"
              company="Mad.net.ar"
              companyLink="https://mad.net.ar"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            />

            <Details
              position="Supervisor"
              company="FULLTIMEGROUP"
              companyLink="https://www.fulltimegroup.com.ar"
              time="Summer 2021"
              address="Menlo Park, CA."
              work="My main role is about supervising, leading teams, controlling functions and developing strategies for clients and employees that raise and maintain their performance.
              As well as the interaction with customers every day"
            />

            <Details
              position="Software Developer"
              company="Iturrarte"
              companyLink="Iturrarte"
              time="2020-2021"
              address="Seattle, WA."
              work="My task here is a technology accesor for use in this company, both in the choice of servers and security."
            />

            <Details
              position="Software Developer Intern"
              company="Iturrarte Repuestos"
              companyLink=""
              time="Actual"
              address="Redmond, WA."
              work="Assisted in teaching a course on computer programming, held office
              hours to help students with assignments, and graded exams and
              assignments"
            />

            <Details
              position="Teaching Assistant"
              company="Iturrarte Repuestos"
              companyLink=""
              time="Fall 2018"
              address="Massachusetts Ave, Cambridge, MA."
              work="Assisted in teaching a course on computer programming, held office
              hours to help students with assignments, and graded exams and
              assignments."
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
