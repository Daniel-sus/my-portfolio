import React from "react";
import Tooltip from "@mui/material/Tooltip";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import "./Header.scss";
import Pdf from "../../assets/Resume v1.1.pdf";
import Link from "@mui/material/Link";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";

const Header = ({ handleClick }) => {
  const { t, i18n } = useTranslation();

  const emailOnHandleClick = () => {
    navigator.clipboard.writeText("dan.yaroshovets@gmail.com");
    return handleClick({
      vertical: "bottom",
      horizontal: "right",
    });
  };

  return (
    // <div className="header">
    <Box
      component="div"
      height="80px"
      maxWidth="1100px"
      margin="0 auto"
      width="1"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="background.default"
    >
      <ul className="header__list">
        <li className="header__links">{t("about")}</li>
        <li className="header__links">{t("projects")}</li>
        <li className="header__links">{t("stack")}</li>
        <li className="header__links">{t("experience")}</li>
      </ul>
      <div className="header__contacts">
        <Tooltip title="Click to open" placement="bottom">
          <Link href={Pdf} target="_blank" color="black" underline="none">
            <InsertDriveFileOutlinedIcon
              color="secondary"
              sx={{
                transition: "0.3s",
                "&:hover": { scale: "1.05" },
              }}
              fontSize="large"
            />
          </Link>
        </Tooltip>
        <Tooltip title="Click to copy" placement="bottom">
          <EmailOutlinedIcon
            fontSize="large"
            sx={{
              transition: "0.3s",
              "&:hover": { scale: "1.05" },
            }}
            onClick={emailOnHandleClick()}
          />
        </Tooltip>
      </div>
    </Box>
    // </div>
  );
};

export default Header;
