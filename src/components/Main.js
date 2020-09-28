import React from "react";
import styled from "styled-components";
import CardBox from "./CardBox";
import ChooBox from "./ChooBox";
import HomeBox from "./HomeBox";

const Main = () => {
  const MainStyle = styled.div`
    margin: 30px 80px;
  `;

  const SectionStyle = styled.section`
    margin: 30px 0;
  `;
  const SecTitleStyle = styled.div`
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
    margin: 0 0 20px 0;
  `;

  const SectionTilteStyle2 = styled.div`
    font-weight: 800;
    color: rgb(68, 66, 66);
  `;

  const AddStyle1 = styled.div`
    border-radius: 20px;
    margin: 40px 0;
    background-image: url("images/ad1.jpg");
    height: 350px;
    background-size: 100% 100%;
  `;

  const AddStyle2 = styled.div`
    margin: 20px 0;
    background-image: url("images/ad2.png");
    height: 300px;
    background-size: 100% 100%;
  `;

  return (
    <MainStyle>
      <SectionStyle>
        <SecTitleStyle>에어비앤비 둘러보기</SecTitleStyle>
        <CardBox />
      </SectionStyle>

      <SectionStyle>
        <AddStyle1></AddStyle1>
      </SectionStyle>

      <SectionStyle>
        <SecTitleStyle>추천여행지</SecTitleStyle>
        <ChooBox />
      </SectionStyle>

      <SectionStyle>
        <SecTitleStyle>에어비앤비 플러스를 만나보세요!</SecTitleStyle>
        <SectionTilteStyle2>
          퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션
        </SectionTilteStyle2>
        <AddStyle2></AddStyle2>
      </SectionStyle>

      <SectionStyle>
        <SecTitleStyle>전세계 숙소</SecTitleStyle>
        <HomeBox />
      </SectionStyle>
    </MainStyle>
  );
};

export default Main;
