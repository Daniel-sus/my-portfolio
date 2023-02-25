import React from "react";
import "./Stack.scss";
import stackFrontend from "../../constants/images";
import stackBackend from "../../constants/imagesback";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

const Stack = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <div className="stack">
        <Typography
          variant="h1"
          fontSize="50px"
          fontWeight="800"
          className="stack__title"
        >
          {t("stack")}
        </Typography>
        <div className="stack__block">
          <div className="frontend">
            <Typography variant="h3" className="title">
              {t("fd")}
            </Typography>
            <div className="skills">
              {stackFrontend.map((item, index) => (
                <div className="skill" key={index}>
                  <img className="skill__image" src={item.imgUrl} alt="icon" />
                  <p className="skill__title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="frontend">
            <Typography variant="h5" className="title">
              {t("bd")}
            </Typography>
            <div className="skills">
              {stackBackend.map((item, index) => (
                <div className="skill" key={index}>
                  <img className="skill__image" src={item.imgUrl} alt="icon" />
                  <p className="skill__title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
