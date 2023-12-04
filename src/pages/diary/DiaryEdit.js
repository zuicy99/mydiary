import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        My Diary 수정
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 수정화면 {param.pk} 글 수정
        </h2>
      </Main>
      <Footer>
        <p>Coprytight 2023. 다이어리 수정화면</p>
      </Footer>
    </>
  );
};

export default DiaryEdit;
