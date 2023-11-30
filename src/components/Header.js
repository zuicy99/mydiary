import { TopBar } from "../styles/headerstyle";

const Header = () => {
  return (
    <TopBar>
      <button onClick={() => {}}>
        <img src="/images/bt_list.svg" />
      </button>
      <h2 style={{ textAlign: "center", color: "blue" }}>header</h2>
      <button onClick={() => {}}>
        <img src="/images/bt_login.svg" />
      </button>
    </TopBar>
  );
};

export default Header;
