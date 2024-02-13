import PostList from "components/posts/PostList";
import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

export default function ListSection({ text }) {
  const navigate = useNavigate();

  const onClickInterview = () => {
    navigate("/detail");
  };

  return (
    <ListSectionBox>
      <MenuTilte>{text}</MenuTilte>
      <MenuLink onClick={onClickInterview}>더보기</MenuLink>
      <MainPostSample>
        <PostList />
      </MainPostSample>
    </ListSectionBox>
  );
}

const ListSectionBox = styled.section`
  border: 1px solid grey;
  height: 45vh;
  width: 40%;
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

  margin-bottom: 2rem;
`;

const MainPostSample = styled.section`
  overflow: auto;
  text-overflow: ellipsis;
  border: 1px solid gray;
  border-radius: 2rem;
  height: auto;
  max-height: 80%;
`;
