import React from "react";
import {
  DiaryCardList,
  DiaryCardListBody,
  DiaryCardListFooter,
  DiaryCardListHeader,
  DiaryCardListImg,
  DiaryCardListOpt,
  DiaryCardListWrap,
} from "../../styles/diarycardlist";

const DiaryList = props => {
  const item = props.item;
  console.log(item);
  return (
    <DiaryCardList>
      <DiaryCardListImg>
        <img src={item.detail.pics[0]} alt={item.title} />
      </DiaryCardListImg>
      <DiaryCardListWrap>
        <DiaryCardListHeader>
          <h4>{item.title}</h4>
          <i className="card-list-open">{item.open ? "사적" : "공적"}</i>
          <i className="card-list-mood">{item.mood}</i>
        </DiaryCardListHeader>
        <DiaryCardListBody>{item.memo}</DiaryCardListBody>
        <DiaryCardListFooter>
          {`${item.year}년 ${item.month}월 ${item.date}일 ${item.day}요일`}
          <i className="card-list-weather">{item.weather}</i>
        </DiaryCardListFooter>
      </DiaryCardListWrap>
      <DiaryCardListOpt>
        <input type="checkbox" name="" />
      </DiaryCardListOpt>
    </DiaryCardList>
  );
};

export default DiaryList;
