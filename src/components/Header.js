import React from "react";

import { TopBar } from "../styles/headerstyle";
const Header = props => {
  return (
    <TopBar>
      <button
        onClick={() => {
          props.handleClickMenu();
        }}
      >
        <img src={`/images/${props.icon}`} />
      </button>

      <h2>{props.children}</h2>
      <button onClick={() => {}}>
        <img src="/images/bt_login.svg" />
      </button>
    </TopBar>
  );
};

export default Header;
