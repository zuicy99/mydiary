import React from "react";
import { BotBar } from "../styles/footerstyle";
import { Link } from "react-router-dom";

const Footer = props => {
  console.log(props);
  return (
    <BotBar>
      <Link to="/home">{props.children}</Link>
      <button>
        <img src="/images/fbl.svg" />
      </button>

      <span>
        <button>
          <img src="/images/fpb.svg" />
        </button>
      </span>
    </BotBar>
  );
};

export default Footer;
