import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import "./Sidebar.scss";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { setMode } from "../../state/globalSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lang) => {
    setAnchorEl(null);
    i18n.changeLanguage(lang.toLowerCase());
  };
  return (
    <div className="sidebar">
      <div className="sidebar__settings">
        <Tooltip title="Language" placement="right">
          <LanguageIcon
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              transition: "0.3s",
              "&:hover": { scale: "1.05" },
            }}
            className="icon"
            fontSize="large"
          />
        </Tooltip>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => handleClose("English")}>English</MenuItem>
          <MenuItem onClick={() => handleClose("Ukrainian")}>
            Ukrainian
          </MenuItem>
        </Menu>

        {theme.palette.mode === "dark" ? (
          <Tooltip title="Change theme" placement="right">
            <DarkModeOutlined
              onClick={() => dispatch(setMode("light"))}
              sx={{
                transition: "0.3s",
                "&:hover": { scale: "1.05" },
              }}
              className="icon"
              fontSize="large"
            />
          </Tooltip>
        ) : (
          <Tooltip title="Change theme" placement="right">
            <LightModeOutlined
              onClick={() => dispatch(setMode("dark"))}
              sx={{
                transition: "0.3s",
                "&:hover": { scale: "1.05" },
              }}
              className="icon"
              fontSize="large"
            />
          </Tooltip>
        )}
      </div>
      <div className="sidebar__dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="sidebar__links">
        <Tooltip title="GitHub" placement="right">
          <Link
            href="https://github.com/Daniel-sus"
            target="_blank"
            color="black"
            underline="none"
          >
            <GitHubIcon
              color="secondary"
              sx={{
                transition: "0.3s",
                "&:hover": { scale: "1.05" },
              }}
              className="link"
              fontSize="large"
            />
          </Link>
        </Tooltip>

        <Tooltip title="Telegram" placement="right">
          <Link
            href="https://t.me/daniel7375"
            target="_blank"
            color="black"
            underline="none"
          >
            <TelegramIcon
              color="secondary"
              sx={{
                transition: "0.3s",
                "&:hover": { scale: "1.05" },
              }}
              className="link"
              fontSize="large"
            />
          </Link>
        </Tooltip>
        <Tooltip title="LinkedIn" placement="right">
          <Link
            href="https://www.linkedin.com/in/daniel-yaroshovets-84184a247/"
            target="_blank"
            color="black"
            underline="none"
          >
            <LinkedInIcon
              color="secondary"
              sx={{
                transition: "0.3s",
                "&:hover": { scale: "1.05" },
              }}
              className="link"
              fontSize="large"
            />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
