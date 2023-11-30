import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const Index = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "blue" }}>웹서비스 첫화면</h2>
      </Main>
      <Footer>
        <h2 style={{ textAlign: "center", color: "blue" }}>Footer</h2>
      </Footer>
    </>
  );
};

export default Index;
