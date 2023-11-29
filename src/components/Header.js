import { TopBar } from "../styles/headerstyle";

const Header = () => {
  return (
    <TopBar>
      <button>
        <img src="images/bt_list.svg" />
      </button>
      <h2>타이틀</h2>
      <button>
        <img src="images/bt_login.svg" />
      </button>
    </TopBar>
  );
};

export default Header;
