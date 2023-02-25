import React from "react";
import { useTranslation } from "react-i18next";
import "./Projects.scss";
import pizzaImg from "../../assets/pizza.png";
import sneakersImg from "../../assets/sneakers.png";
import chessImg from "../../assets/chess.png";
import blogImg from "../../assets/cat.png";
import todoImg from "../../assets/todo.png";
import findGitHubUserImg from "../../assets/find-user.png";
import onlineChatImg from "../../assets/online-chat.png";
import { AnimatePresence, motion } from "framer-motion";
import reactIcon from "../../assets/react.png";
import javascriptIcon from "../../assets/javascript.png";
import reduxIcon from "../../assets/redux.png";
import muiIcon from "../../assets/mui.png";
import next from "../../assets/next.png";
import node from "../../assets/node.png";
import ts from "../../assets/typescript.png";
import si from "../../assets/socketio.png";
import mobX from "../../assets/mobx.png";
import { Typography } from "@mui/material";
import { GitHub, VisibilityOutlined } from "@mui/icons-material";
// import { AiFillEye, AiFillGithub } from "react-icons/ai";

const iconsArray1 = [reactIcon, javascriptIcon, reduxIcon, muiIcon];
const iconsArray2 = [next, node, ts, si];
const iconsArray3 = [reactIcon, javascriptIcon, node, mobX];

const filters = ["All", "React", "Java", "OOP", "TypeScript"];

const projects = [
  {
    title: "React pizza",
    imgUrl: pizzaImg,
    description: "",
    linkToGitHub: "https://github.com/Daniel-sus/react-pizza-v2",
    linkToSite: "https://daniel-sus.github.io/react-pizza-v2/",
    tech: iconsArray1,
  },
  {
    title: "MERN Blog",
    imgUrl: blogImg,
    description: "",
    linkToGitHub: "",
    linkToSite: "",
    tech: iconsArray2,
  },
  {
    title: "React chess",
    imgUrl: chessImg,
    description: "",
    linkToGitHub: "https://github.com/Daniel-sus/react-chess",
    linkToSite: "",
    tech: iconsArray3,
  },
  {
    title: "React sneakers",
    imgUrl: sneakersImg,
    description: "",
    linkToGitHub: "https://github.com/Daniel-sus/react-shop",
    linkToSite: "https://daniel-sus.github.io/react-shop/#/react-shop/",
    tech: iconsArray1,
  },
  {
    title: "Online chat",
    imgUrl: onlineChatImg,
    description: "",
    linkToGitHub: "",
    linkToSite: "",
    tech: iconsArray2,
  },
  {
    title: "Find GitHub user",
    imgUrl: findGitHubUserImg,
    description: "",
    linkToGitHub: "https://github.com/Daniel-sus/React-find-git-user",
    linkToSite: "https://daniel-sus.github.io/React-find-git-user/",
    tech: iconsArray3,
  },
  {
    title: "React todo",
    imgUrl: todoImg,
    description: "",
    linkToGitHub: "https://github.com/Daniel-sus/TS-React-Reduxv",
    linkToSite: "https://daniel-sus.github.io/TS-React-Redux/",
    tech: iconsArray1,
  },
  {
    title: "React admin pannel",
    imgUrl: sneakersImg,
    description: "",
    linkToGitHub: "",
    linkToSite: "",
    tech: iconsArray2,
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
  initial: {
    // opacity: 1, scale: 0,
    y: -2,
  },
  whileInView: {
    // opacity: 1,
    // scale: 1,
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const itemss = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Projects = () => {
  const [selectedId, setSelectedId] = React.useState(null);
  const { t } = useTranslation();
  const [selectedFilter, setSelectedFilter] = React.useState(0);

  return (
    <div className="wrapper">
      <div className="projects">
        <Typography variant="h1" className="projects__title">
          {t("mpp")}
        </Typography>
        <div className="projects__block">
          <div className="filter__list">
            {filters.map((filter, index) => (
              <div
                key={index}
                className={
                  index === selectedFilter
                    ? "filter__block__selected"
                    : "filter__block"
                }
                onClick={() => setSelectedFilter(index)}
              >
                <p className="filter__name">{filter}</p>
              </div>
            ))}
          </div>
          <div className="projects__wrapper">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project"
                onClick={() => setSelectedId(index)}
              >
                <Typography variant="h5" className="project__title">
                  {project.title}
                </Typography>
                <div className="project__image__wrapper">
                  <img
                    className="project__image"
                    src={project.imgUrl}
                    alt="image"
                  />
                  <div className="overlay"></div>
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                      staggerChildren: 0.5,
                    }}
                    className="app__work-hover app__flex"
                  >
                    <a
                      href={project.linkToSite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <VisibilityOutlined />
                      </motion.div>
                    </a>
                    <a
                      href={project.linkToGitHub}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <GitHub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
                {/* <Typography variant="h5" className="project__tech__title">
                  tech:
                </Typography> */}
                {/* <motion.div
                  className="tech__array"
                  // initial={{
                  //   opacity: 1,
                  //   scale: 0,
                  //   y: -2,
                  // }}
                  // whileInView={{
                  //   opacity: 1,
                  //   scale: 1,
                  //   y: 0,
                  //   transition: {
                  //     delayChildren: 0.1,
                  //     staggerChildren: 0.1,
                  //   },
                  // }}
                  // variants={secondContainer}
                >
                  {project.tech.map((icon__img, index) => (
                    <motion.div
                      key={index}
                      className="tech__wrapper"
                      // initial={{ y: 20, opacity: 0, scale: 1, scale: 0 }}
                      // whileInView={{
                      //   y: 0,
                      //   scale: 1,

                      //   opacity: 1,
                      // }}
                      // variants={itemss}
                    >
                      <img className="tech__icon" src={icon__img} />
                    </motion.div>
                  ))}
                </motion.div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
