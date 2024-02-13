import styled from "styled-components";
import MainSection from "components/homePage/MainSection";
import ListSection from "components/homePage/ListSection";

export default function HomePage() {
  return (
    <MainPage>
      <HomeContents>
        <SectionBoxs>
          <MainSection />
          <ListSectionBoxs>
            <ListSection text="면접후기" />
            <ListSection text="취업정보" />
          </ListSectionBoxs>
        </SectionBoxs>
      </HomeContents>
    </MainPage>
  );
}

const MainPage = styled.div`
  white-space: nowrap;
`;

const HomeContents = styled.aside`
  display: flex;
`;

const SectionBoxs = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 87vh;
  width: 100%;
`;

const ListSectionBoxs = styled.aside`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 50%;
  gap: 20px;
`;
