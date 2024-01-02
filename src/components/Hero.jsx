import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import "./component_styles/heroStyles.css";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto hero-component-section">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi! I am&nbsp;<span className="text-[#915eff]">Nihar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a fullstack developer <br className="sm:hidden" /> with a
            relentless desire <br className="sm:hidden" /> for continuous
            learning and <br className="sm:hidden" /> holistic personal and
            professional growth.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
