import React from "react";
import styled from "styled-components";

const Search = () => {
  const SearchStyle = styled.div`
    width: 430px;
    display: inline-block;
    height: 500px;
    background-color: white;
    position: relative;
    /* relative 일때 top 이나 left를 줄수 있음 */
    left: 50px;
    top: 10px;
    padding: 20px 30px 20px 30px;
  `;

  const SearchTitleStyle = styled.div`
    padding: 10px 0;
    font-size: 30px;
    font-weight: 800;
    color: rgb(75, 74, 74);
  `;

  const SubTitleStyle = styled.td`
    padding: 10px 0;
    font-size: 12px;
    font-weight: 600;
  `;

  const SearchInputStyle = styled.input`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;

  const SearchSelectStyle = styled.select`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;

  const SearchButtonBoxStyle = styled.div`
    display: grid;
    grid-auto-columns: auto;
    justify-content: end;
    padding: 20px 0;
  `;

  const SearchButtonStyle = styled.button`
    background-color: #ff5a5f;
    color: white;
    width: 70px;
    height: 45px;
    font-size: 15px;
    font-weight: 700; /*굵기*/
    border-radius: 6px;
    border: 0;
    cursor: pointer;
  `;

  return (
    <SearchStyle>
      <SearchTitleStyle>
        특색 있는 숙소와 즐길
        <br />
        거리를 예약하세요.
      </SearchTitleStyle>
      <table style={{ width: "100%" }}>
        <tr>
          <SubTitleStyle colSpan="2">목적지</SubTitleStyle>
        </tr>
        <tr>
          <td colSpan="2">
            <SearchInputStyle type="text" placeholder="모든 위치" />
          </td>
        </tr>
        <tr>
          <SubTitleStyle>체크인</SubTitleStyle>
          <SubTitleStyle>체크아웃</SubTitleStyle>
        </tr>
        <tr>
          <td>
            <SearchInputStyle type="date" />
          </td>
          <td>
            <SearchInputStyle type="date" />
          </td>
        </tr>
        <tr>
          <SubTitleStyle colspan="2">인원</SubTitleStyle>
        </tr>
        <tr>
          <td colspan="2">
            <SearchSelectStyle>
              <option>인원</option>
            </SearchSelectStyle>
          </td>
        </tr>
      </table>
      <SearchButtonBoxStyle>
        <SearchButtonStyle>검색</SearchButtonStyle>
      </SearchButtonBoxStyle>
    </SearchStyle>
  );
};

export default Search;
