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
      <MenuLink onClick={onClick}>더보기</MenuLink>
      <MainPostSample>{ComponentToRender && <ComponentToRender />}</MainPostSample>
    </ListSectionBox>
  );
}

const ListSectionBox = styled.section`
  border: 1px solid grey;
  height: 45vh;
  width: 35%;
  border-radius: 2rem;
  padding: 1rem 5rem;
  /* position: relative; */
`;

const MenuTilte = styled.p`
  margin-bottom: 2rem;
  font-size: 2rem;
  cursor: pointer;
`;

const MenuLink = styled.button`
  display: flex;
  flex-direction: row-reverse;
  background-color: transparent;
  border: none;

  &:hover {
    transform: scale(1.2);
    font-weight: 300;
  }

  margin-bottom: 2rem;
`;

const MainPostSample = styled.section`
  overflow: auto;
  text-overflow: ellipsis;
  border: 1px solid gray;
  border-radius: 2rem;
  height: 60%;
`;
