import React from "react";
import styled from "styled-components";
import LogoImage from "assets/images/visual.png";

export default function MainSection() {
  return (
    <BannerSection>
      {/* <img src="/logo/logo.png" /> */}
      <img src={LogoImage} alt="visual_img" />
    </BannerSection>
  );
}

const BannerSection = styled.section`
  width: 100%;
  margin-bottom: 20px;
  height: 340px;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 300px;
  }
`;
