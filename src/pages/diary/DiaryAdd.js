import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { postData } from "../../api/api_diary/diary";

const DiaryAdd = () => {
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };
  // 다이어리 추가
  const handleClickAdd = () => {
    postData([
      {
        open: true,
        year: "2023",
        month: "12",
        date: "01",
        day: "금",
        title: "타이틀",
        memo: "내일시험이 있어서 내자리 정리하고 가기",
        category: "사적",
        weather: 1,
        mood: 3,
        detail: {
          content: "그냥 글자로 작성후 고도화 거치면서",
          pics: ["1.jpg", "2.jpg"],
        },
      },
    ]);
    alert("다이어리가 추가 되었습니다.");
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        My Diary 추가
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 추가화면</h2>
        <div>
          <button
            onClick={() => {
              handleClickAdd();
            }}
          >
            다이어리 추가 버튼
          </button>
        </div>
      </Main>
      <Footer>
        <p>Coprytight 2023. 다이어리 추가화면</p>
      </Footer>
    </>
  );
};

export default DiaryAdd;
