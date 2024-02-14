import React from "react";
import styled from "styled-components";

export default function MainSection() {
  return (
    <BannerSection>
      <img src="/logo/logo.png" />
    </BannerSection>
  );
}

const BannerSection = styled.section`
  width: 72%;
  height: 40%;
  border: 1px solid grey;
  border-radius: 1rem;
  margin: 350px 0 30px 300px;
  & > img {
    object-fit: cover;
    height: 100%;
  }
`;
