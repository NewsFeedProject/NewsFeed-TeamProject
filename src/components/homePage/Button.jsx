import React from "react";
import styled from "styled-components";

const NormalButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 1rem;
  color: ${(props) => props.color};

  &:hover {
    transform: scale(1.2);
    font-weight: 600;
  }
`;

export default function Button({ text, color, onClick }) {
  return (
    <NormalButton color={color} onClick={onClick}>
      {text}
    </NormalButton>
  );
}
