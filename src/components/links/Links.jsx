import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import "./Links.scss";

const Links = () => {
  return (
    <div className="sidebar__links">
      <Tooltip title="GitHub" placement="right">
        <Link
          href="https://github.com/Daniel-sus"
          color="black"
          underline="none"
        >
          <GitHubIcon className="link" fontSize="large" />
        </Link>
      </Tooltip>

      <Tooltip title="Telegram" placement="right">
        <Link href="https://t.me/daniel7375" color="black" underline="none">
          <TelegramIcon className="link" fontSize="large" />
        </Link>
      </Tooltip>
      <Tooltip title="LinkedIn" placement="right">
        <Link
          href="https://www.linkedin.com/in/daniel-yaroshovets-84184a247/"
          color="black"
          underline="none"
        >
          <LinkedInIcon className="link" fontSize="large" />
        </Link>
      </Tooltip>
    </div>
  );
};

export default Links;
