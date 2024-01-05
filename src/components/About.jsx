import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../higher_order_component";

const AboutCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a fullstack developer with experience in HTML, CSS, Javascript and
        familiarity with libraries/frameworks such as ReactJS, Three.js,
        TailWindCSS, SASS and NodeJS, along with knowledge of databases such as
        PostgreSQL, MySQL, Oracle PL/SQL and MongoDB. I am also a linux
        enthusiast with experience in containerization of my workflow using
        tools such as podman (an alternative to docker) and microk8s. I have
        leadership experience due to being the class representative for four
        consecutive years, as well as being the programming head of the CodeX
        club for one year. I am a quick learner and a team player which is
        supported by my collaborations on college as well as open source
        projects. I hope to bring a change into the world with code and keep
        growing over the years!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <AboutCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
