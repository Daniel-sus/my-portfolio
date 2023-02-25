import { Link, Typography } from "@mui/material";
import React from "react";
import "./Experience.scss";
import reactIcon from "../../assets/react.png";
import javascriptIcon from "../../assets/javascript.png";
import reduxIcon from "../../assets/redux.png";
import muiIcon from "../../assets/mui.png";
import next from "../../assets/next.png";
import node from "../../assets/node.png";
import ts from "../../assets/typescript.png";
import si from "../../assets/socketio.png";
import mobX from "../../assets/mobx.png";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const iconsArray1 = [reactIcon, javascriptIcon, reduxIcon, muiIcon];
const iconsArray2 = [next, node, ts, si];
const iconsArray3 = [reactIcon, ts, node, mobX];

const worksArray = [
  { year: "2023", name: "Frontend developer", subname: "Kindle" },
  { year: "2022", name: "Backend developer", subname: "Shopify" },
  { year: "2021", name: "Fullstack developer", subname: "Amazon" },
];

const jobInfo = [
  {
    title: "Frontend developer",
    info: "Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation. ",
    link: "shorturl.at/eioQ5",
    arr: iconsArray1,
  },
  {
    title: "Backend developer",
    info: "Horizontal steppers are ideal when the contents of one step depend on an earlier step Avoid using long step names in horizontal steppers.",
    link: "https://github.com/Daniel-sus",
    arr: iconsArray2,
  },
  {
    title: "Fullstack developer",
    info: "Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions.",
    link: "https://www.linkedin.com/feed/",
    arr: iconsArray3,
  },
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const secondContainer = {
  hidden: {
    // opacity: 1, scale: 0,
    y: -2,
  },
  visible: {
    // opacity: 1,
    // scale: 1,
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Experience = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = React.useState(0);

  const changeSelected = (index) => {
    setSelected(index);
  };

  return (
    <div className="wrapper">
      <div className="experience">
        <Typography
          variant="h1"
          fontSize="50px"
          fontWeight="800"
          className="experience__title"
        >
          {t("experience")}
        </Typography>
        <div className="experience__block">
          <div className="left__side">
            <div className="lines">
              <div className="line"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="companies__wrapper">
              {worksArray.map((item, index) => (
                <div
                  key={index}
                  className={
                    index === selected ? "company__info" : "company__info__gray"
                  }
                >
                  <div className="years" onClick={() => changeSelected(index)}>
                    {item.year}
                  </div>
                  <div
                    className="company"
                    onClick={() => changeSelected(index)}
                  >
                    <div className="work__name">{item.name}</div>
                    <div className="work__subname">{item.subname}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {jobInfo.map(
            (job, index) =>
              index === selected && (
                <motion.div
                  key={index}
                  className="work__info"
                  initial="hidden"
                  animate="visible"
                  variants={container}
                >
                  <motion.h3 className="work__title" variants={item}>
                    {job.title}
                  </motion.h3>
                  <motion.p className="work__description" variants={item}>
                    {job.info}
                  </motion.p>
                  <motion.div variants={item}>
                    <Link
                      sx={{
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                      color="secondary.link"
                      className="work__link"
                      href={job.link}
                    >
                      {job.link}
                    </Link>
                  </motion.div>

                  <motion.h6 className="tech__title" variants={item}>
                    tech:
                  </motion.h6>
                  <motion.div
                    className="tech__array"
                    variants={secondContainer}
                  >
                    {job.arr.map((icon__img, index) => (
                      <motion.div
                        key={index}
                        className="tech__wrapper"
                        variants={item}
                      >
                        <img className="tech__icon" src={icon__img} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
