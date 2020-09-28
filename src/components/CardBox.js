import React from "react";
import styled from "styled-components";

const CardBox = () => {
  const CardBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const CardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 1px solid rgb(212, 210, 210);
    border-radius: 6px;
    box-shadow: 0 0 3px 0 rgb(172, 170, 170);
  `;

  const CardContentStyle = styled.div`
    display: grid;
    align-items: center;
    font-weight: 600;
    margin: 0 0 0 10px;
  `;

  const CardImageStyle1 = styled.div`
    background-image: url("images/card1.jpg");
    height: 70px;
    background-size: 100% 100%;
  `;

  const CardImageStyle2 = styled.div`
    background-image: url("images/card2.jpg");
    height: 70px;
    background-size: 100% 100%;
  `;

  const CardImageStyle3 = styled.div`
    background-image: url("images/card3.jpg");
    height: 70px;
    background-size: 100% 100%;
  `;

  const CardImageStyle4 = styled.div`
    background-image: url("images/card4.jpg");
    height: 70px;
    background-size: 100% 100%;
  `;

  return (
    <CardBoxStyle>
      <CardStyle>
        <CardImageStyle1></CardImageStyle1>
        <CardContentStyle>수소 및 부티크 호텔</CardContentStyle>
      </CardStyle>
      <CardStyle>
        <CardImageStyle2></CardImageStyle2>
        <CardContentStyle>트립</CardContentStyle>
      </CardStyle>
      <CardStyle>
        <CardImageStyle3></CardImageStyle3>
        <CardContentStyle>어드벤처</CardContentStyle>
      </CardStyle>
      <CardStyle>
        <CardImageStyle4></CardImageStyle4>
        <CardContentStyle>레스토랑</CardContentStyle>
      </CardStyle>
    </CardBoxStyle>
  );
};

export default CardBox;
