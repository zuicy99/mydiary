// 웹 서비스에서 데이터는 늘 변합니다.
// 프로그램 종속적이지 않고 동적입니다.
// 데이터는 프로그램이 가지고 있지 않는 것이 원칙
// 프로그램과 데이터는 별도 관리가 원칙

// 프로그램 (웹브라우저 리액트)
// 데이터   (DB : MySql, MongoDB, Firebase, LocalStorage)
// CRUD 를 이해하자. ======> GET, POST, PUT, FETCH, UPDATE
// REST_API

// 외부(LS) 초기화 체크
const LOCAL_DB = "diaryDB";
// export let DATA = [];

export const initData = () => {
  // console.log("LS에 Key가 있는지 물어본다.");
  // 먼저 데이터를 저장할 Key 가 있는지 파악
  const db = localStorage.getItem(LOCAL_DB);

  if (!db) {
    // console.log("Key 만들어 줄께");
    localStorage.setItem(LOCAL_DB, "[]");
  }
};
// 외부(LS)에서 전체 데이터 가져오기
export const getAllData = () => {
  let data = localStorage.getItem(LOCAL_DB);
  // console.log("전체자료", data);
  // console.log(typeof data);
  // console.log("자료형 변경");
  data = JSON.parse(data);
  // console.log(data);
  // console.log(typeof data);
  return data;
};
// 외부(LS)에서 개별 데이터 가져오기
export const getData = () => {};
// 외부(LS)에서 개별 데이터의 전체 항목 수정하기
export const putData = () => {};
// 외부(LS)에서 개별 데이터 에서 항목별 데이터 수정하기
export const fetchData = () => {};
// 외부(LS)에서 개별 데이터 삭제하기
export const deleteData = () => {};
// 외부(LS)에서 전체 데이터 삭제하기
export const deleteAllData = () => {};
// 외부(LS)에 데이터 추가하기
export const postData = data => {
  console.log("항목추가");
  console.log(data);
  const saveData = JSON.stringify(data);
  console.log(saveData);
  localStorage.setItem(LOCAL_DB, saveData);
};
