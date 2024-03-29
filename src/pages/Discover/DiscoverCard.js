import React from "react";
import "./DiscoverCard.css";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import Skills from "./Skills";

const DiscoverCard = (props) => {
  const defaultAvatar =
    "https://res.cloudinary.com/saienterprises/image/upload/v1681550747/avatar_qepxas.png";
  const privateMessageButtonHandler = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${props.whatsApp}`,
      "_blank"
    );
  };
  return (
    <div className="discover__card">
      <div className="discover__card__image">
        <img
          src={props.src ? props.src : defaultAvatar}
          alt="display_img"
          className="discover__card__img"
        />
      </div>

      <div className="discover__card__infos">
        <div>
          <p className="discover__card__infos__name">{props.name}</p>
        </div>
        <div className="discover__card__infos--branch__sem">
          <div className="discover__card__infos--branch">
            {"Branch:"} {props.branch === "ANY" ? "Others" : props.branch===undefined ? "N/A" : props.branch}
          </div>
          <p className="discover__card__infos--sem">
            {props.sem < 9 ? (
              <span>{props.sem}th Sem</span>
            ) : (
              <span>Pass Out</span>
            )}
          </p>
        </div>
      </div>

      <div className="discover__card__skills">
        {props.webDev && <Skills skill={"Web Dev"} />}
        {props.uiux && <Skills skill={"UI/UX"} />}
        {props.androidDev && <Skills skill={"Android Dev"} />}
        {props.blockchain && <Skills skill={"Blockchain"} />}
        {props.ethicalHacking && <Skills skill={"Ethical Hacking"} />}
        {props.softwareTesting && <Skills skill={"Software Testing"} />}
        {props.webDev === false &&
          props.uiux === false &&
          props.androidDev === false &&
          props.blockchain === false &&
          props.ethicalHacking === false &&
          props.softwareTesting === false && 
            <Skills dis={"1"} skill={"Skills Yet to Add"} />
        }
      </div>

      <div className="discover__card__social">
        <div className="discover__card__social__public">
          {props.facebook === undefined ? 
            <Tooltip title="User Has Not Shared Their Contact Info.">
            <FacebookIcon
              className="disabled_icon"
              style={{ fontSize: "3rem" }}
            />
            </Tooltip>
          : (
            <Link to={props.facebook} target="_blank">
              {" "}
              <FacebookIcon
                className="discover__card__social__public--icons"
                style={{ fontSize: "3rem" }}
              />
            </Link>
          )}
          {props.linkedIn === undefined ?
          <Tooltip title="User Has Not Shared Their Contact Info.">
            <LinkedInIcon
              className="disabled_icon"
              style={{ fontSize: "3rem" }}
            /> 
          </Tooltip>
            :
           (
            <Link to={props.linkedIn} target="_blank">
              {" "}
              <LinkedInIcon
                className="discover__card__social__public--icons"
                style={{ fontSize: "3rem" }}
              />
            </Link>
          )}
          {props.portfolio === undefined ? (
            <Tooltip title="User Has Not Shared Their Contact Info.">
            <LanguageIcon
              className="disabled_icon"
              style={{ fontSize: "3rem" }}
            />
            </Tooltip>
          ) : (
            <Link to={props.portfolio} target="_blank">
              <LanguageIcon
                className="discover__card__social__public--icons"
                style={{ fontSize: "3rem" }}
              />
            </Link>
          )}
          {props.github === undefined ? (
            <Tooltip title="User Has Not Shared Their Contact Info.">
            <GitHubIcon
              className="disabled_icon"
              title="User Has Not Shared Their Contact Info."
              style={{ fontSize: "3rem" }}
            />
            </Tooltip>
          ) : (
            <Link to={props.github} target="_blank">
              {" "}
              <GitHubIcon
                className="discover__card__social__public--icons"
                style={{ fontSize: "3rem" }}
              />
            </Link>
          )}
        </div>
        {props.whatsApp === undefined ? (
          <div className="discover__card__social__private">
            <button title="Sorry!! User Has Not Shared Their Contact Info." className="discover__card__social__private--message disabled_button">
              <WhatsAppIcon className="discover__card__social__private--icon" />{" "}
              Message
            </button>
          </div>
        ) : (
          <div className="discover__card__social__private">
            <button
              className="discover__card__social__private--message"
              onClick={privateMessageButtonHandler}
            >
              <WhatsAppIcon className="discover__card__social__private--icon" />{" "}
              Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverCard;
