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
  height: 30%;
  border: 1px solid grey;
  border-radius: 1rem;
  margin-bottom: 5rem;

  & > img {
    object-fit: cover;
    height: 100%;
  }
`;