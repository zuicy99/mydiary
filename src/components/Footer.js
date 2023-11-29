import React from "react";
import { BotBar } from "../styles/footerstyle";

const Footer = () => {
  return (
    <BotBar>
      <button>
        <img src="images/fbl.svg" />
      </button>

      <span>
        <button>
          <img src="images/fpb.svg" />
        </button>
      </span>
    </BotBar>
  );
};

export default Footer;
