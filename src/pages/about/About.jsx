import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="wrapper">
      <div className="about">
        <motion.h1
          initial={{
            x: -100,
            opacity: 0.6,
          }}
          whileInView={{ x: 0, opacity: 1 }}
          className="about__title"
        >
          {t("greetings")}
        </motion.h1>
        <motion.h3
          initial={{
            x: -100,
            opacity: 0.6,
          }}
          animate={{ x: 0, opacity: 1 }}
          className="about__subtitle"
        >
          {t("fdg")}
        </motion.h3>
      </div>
    </div>
  );
};

export default About;
