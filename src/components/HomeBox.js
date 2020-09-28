import React from "react";
import styled from "styled-components";

const HomeBox = () => {
  const HomeBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const HomeImageStyle1 = styled.div`
    background-image: url("images/home1.png");
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeImageStyle2 = styled.div`
    background-image: url("images/home2.png");
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImageStyle3 = styled.div`
    background-image: url("images/home3.png");
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImageStyle4 = styled.div`
    background-image: url("images/home4.png");
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImageStyle5 = styled.div`
    background-image: url("images/home5.png");
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImageStyle6 = styled.div`
    background-image: url("images/home6.png");
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImageStyle7 = styled.div`
    background-image: url("images/home7.png");
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeImageStyle8 = styled.div`
    background-image: url("images/home8.png");
    height: 180px;
    background-size: 100% 100%;
  `;

  const InfoStyle1 = styled.div`
    margin: 5px 0;
    font-size: 13px;
    color: gray;
  `;

  const InfoStyle2 = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: rgb(61, 60, 60);
  `;

  const StarStyle = styled.span`
    font-size: 12px;
    color: rgb(30, 119, 115);
    font-weight: 800;
  `;

  return (
    <HomeBoxStyle>
      <div>
        <HomeImageStyle1></HomeImageStyle1>
        <div>
          <InfoStyle1>오두막 · BALIAN BEACH, BALI</InfoStyle1>
          <InfoStyle2>BALIAN TREEHOUSE w beautiful pool</InfoStyle2>
          <div>
            <StarStyle>★★★★★</StarStyle>
            <span style={{ fontSize: "12px" }}>185</span>
            <span style={{ fontSize: "12px" }}>슈퍼호스트</span>
          </div>
        </div>
      </div>
      <div>
        <HomeImageStyle2></HomeImageStyle2>
        <div>
          <InfoStyle1>키클라데스 주택 · 이아(OIA)</InfoStyle1>
          <InfoStyle2>Unique Architecture Cave House</InfoStyle2>
          <div>
            <StarStyle>★★★★★</StarStyle>
            <span style={{ fontSize: "12px" }}>185</span>
            <span style={{ fontSize: "12px" }}>슈퍼호스트</span>
          </div>
        </div>
      </div>
      <div>
        <HomeImageStyle3></HomeImageStyle3>
        <div>
          <InfoStyle1>성 · 트웬티나인 팜스(TWENTYNINE PALMS)</InfoStyle1>
          <InfoStyle2>Tile House</InfoStyle2>
          <div>
            <StarStyle>★★★★★</StarStyle>
            <span style={{ fontSize: "12px" }}>185</span>
            <span style={{ fontSize: "12px" }}>슈퍼호스트</span>
          </div>
        </div>
      </div>
      <div>
        <HomeImageStyle4></HomeImageStyle4>
        <div>
          <InfoStyle1>검증됨 · 케이프타운</InfoStyle1>
          <InfoStyle2>
            Modern, Chic Penthouse with Mountain, City & Sea Views
          </InfoStyle2>
          <div>
            <StarStyle>★★★★★</StarStyle>
            <span style={{ fontSize: "12px" }}>185</span>
            <span style={{ fontSize: "12px" }}>슈퍼호스트</span>
          </div>
        </div>
      </div>
      <div>
        <HomeImageStyle5></HomeImageStyle5>
        <div>
          <InfoStyle1>아파트 전체 · 마드리드(MADRID)</InfoStyle1>
          <InfoStyle2>솔광장에 위치한 개인 스튜디오</InfoStyle2>
          <div>
            <StarStyle>★★★★★</StarStyle>
            <span style={{ fontSize: "12px" }}>185</span>
            <span style={{ fontSize: "12px" }}>슈퍼호스트</span>
          </div>
        </div>
      </div>
      <div>
        <HomeImageStyle6></HomeImageStyle6>
        <div>
          <InfoStyle1>집 전체 · HUMAC</InfoStyle1>
          <InfoStyle2>Vacation house in etno-eco village Humac</InfoStyle2>
          <div>
            <StarStyle>★★★★★</StarStyle>
            <span style={{ fontSize: "12px" }}>185</span>
            <span style={{ fontSize: "12px" }}>슈퍼호스트</span>
          </div>
        </div>
      </div>
      <div>
        <HomeImageStyle7></HomeImageStyle7>
        <div>
          <InfoStyle1>개인실 · 마라케시</InfoStyle1>
          <InfoStyle2>The Cozy Palace</InfoStyle2>
          <div>
            <StarStyle>★★★★★</StarStyle>
            <span style={{ fontSize: "12px" }}>185</span>
            <span style={{ fontSize: "12px" }}>슈퍼호스트</span>
          </div>
        </div>
      </div>
      <div>
        <HomeImageStyle8></HomeImageStyle8>
        <div>
          <InfoStyle1>게스트용 별채 전체 · 로스앤젤레스</InfoStyle1>
          <InfoStyle2>Private Pool House with Amazing Views!</InfoStyle2>
          <div>
            <StarStyle>★★★★★</StarStyle>
            <span style={{ fontSize: "12px" }}>185</span>
            <span style={{ fontSize: "12px" }}>슈퍼호스트</span>
          </div>
        </div>
      </div>
    </HomeBoxStyle>
  );
};

export default HomeBox;
