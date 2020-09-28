import React from "react";
import styled from "styled-components";

const ChooBox = () => {
  const ChooBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const ChooImageStyle1 = styled.div`
    background-image: url("images/choo1.png");
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImageStyle2 = styled.div`
    background-image: url("images/choo2.png");
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImageStyle3 = styled.div`
    background-image: url("images/choo3.png");
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImageStyle4 = styled.div`
    background-image: url("images/choo4.png");
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImageStyle5 = styled.div`
    background-image: url("images/choo5.png");
    height: 250px;
    background-size: 100% 100%;
  `;

  return (
    <ChooBoxStyle>
      <ChooImageStyle1></ChooImageStyle1>
      <ChooImageStyle2></ChooImageStyle2>
      <ChooImageStyle3></ChooImageStyle3>
      <ChooImageStyle4></ChooImageStyle4>
      <ChooImageStyle5></ChooImageStyle5>
    </ChooBoxStyle>
  );
};

export default ChooBox;
