import React from "react";
import styled from "styled-components";
import Interview from "rootPages/Interview";
import WorkInfo from "rootPages/WorkInfo";

export default function ListSection({ text, onClick, category }) {
  let ComponentToRender = null;
  if (category === "면접후기") {
    ComponentToRender = Interview;
  } else if (category === "취업정보") {
    ComponentToRender = WorkInfo;
  }
  return (
    <ListSectionBox>
      <MenuTilte>{text}</MenuTilte>
      <MenuLinkWrap>
        <MenuLink onClick={onClick}>더보기</MenuLink>
      </MenuLinkWrap>
      <MainPostSample>{ComponentToRender && <ComponentToRender />}</MainPostSample>
    </ListSectionBox>
  );
}

const ListSectionBox = styled.section`
  height: 45vh;
  width: 50%;
  border-radius: 2rem;
  box-sizing: border-box;
  padding: 0 20px;
`;

const MenuTilte = styled.p`
  margin-bottom: 8px;
  font-size: 2rem;
`;

const MenuLinkWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
  text-align: right;
`;
const MenuLink = styled.button`
  background-color: transparent;
  border: none;
  padding-right: 20px;
  &:hover {
    color: #ff006e;
  }
`;

const MainPostSample = styled.section`
  overflow: auto;
  text-overflow: ellipsis;
  border: 1px solid gray;
  border-radius: 2rem;
  height: 100%;
`;
