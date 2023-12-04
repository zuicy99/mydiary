import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import {
  DiaryCardList,
  DiaryCardListBody,
  DiaryCardListFooter,
  DiaryCardListHeader,
  DiaryCardListImg,
  DiaryCardListOpt,
  DiaryCardListWrap,
} from "../../styles/diarycardlist";
import DiaryList from "../../components/diary/DiaryList";
import { DATA, getAllData, initData } from "../../api/api_diary/diary";

const Index = () => {
  // 다이어리 샘플 데이터
  // 실제로는 백엔드에서 자료를 가져옮
  // axios, fetch 가 필요합니다.
  // http 를 이용해서 json 가져오는 기능
  // 고정된 데이터 ( X 추가, 수정, 삭제 )
  const diaryData = [
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
    {
      open: false,
      year: "2023",
      month: "12",
      date: "02",
      day: "토",
      title: "토요일 타이틀",
      memo: "토요일 시험이 있어서 내자리 정리하고 가기",
      category: "공적",
      weather: 2,
      mood: 5,
      detail: {
        content: "토요일 상세한 내용입니다.",
        pics: ["3.jpg", "4.jpg"],
      },
    },
  ];

  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };

  // 간단하게 데이터 출력 경험해보기
  // console.log("컴포넌트 시작 ==========");
  // 리액트는 화면을 변경하려면 useState 를 활용해야 합니다.
  const [list, setList] = useState([]);

  const showData = () => {
    // console.log("자료 불렀다......");
    // 자료를 화면에 적용(변화 리랜더링 시켜서)
    // : state 를 원본과 복사본 비교변경
    // 0 단계. js 코드를 직접 타이핑해서 자료를 정의해서
    // 1 단계. 지금은 localStorage 를 활용
    // 2 단계. json 파일 을 활용
    // 3 단계. axiois 로 실제 불러와 보기
    setList([...diaryData]);
  };

  //  외부(LS) 에 연결하기
  const getInitData = () => {
    // 자료의 이름(Key)가 있는지 검사
    initData();
    const data = getAllData();
    setList([...data]);
  };

  // 1. 데이터를 불러오기 적정한 곳(html 렌더링 완료시점)
  // 2. 가능하면 함수를 호출 하기를 권장
  useEffect(() => {
    // console.log("후크선장 작동 ********** ");
    // showData();
    getInitData();
  }, []);

  const handleClickList = index => {
    navigate("/diary/edit/" + index);
  };

  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        My Diary 홈
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 첫화면</h2>
        <div>
          <h3>배열의 내용을 출력함 : map 메서드사용 </h3>
          {/* 목록 출력  */}
          {list.map((item, idx) => {
            return <DiaryList key={idx} item={item} />;
          })}
        </div>
        <Link to="/diary/add">다이어리 추가 가기</Link>
        <Link to="/diary/edit/1">다이어리 수정 가기</Link>
      </Main>
      <Footer>
        <p>Coprytight 2023. 다이어리 첫화면</p>
      </Footer>
    </>
  );
};

export default Index;
