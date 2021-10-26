import styled from 'styled-components';
import { maxWidthLg } from '../../abstracts/Mixins';
import ProjectLink from '../shared/ProjectLink';
import webDesignBg from '../../assets/home/desktop/image-web-design-large.jpg';
import appDesignBg from '../../assets/home/desktop/image-app-design.jpg';
import graphicDesignBg from '../../assets/home/desktop/image-graphic-design.jpg';

const StyledSection = styled.section`
  margin: 0 2rem;
`;

const Container = styled.div`
  ${maxWidthLg}
  padding: 10rem 0;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);

  & > div {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
`;

export default function HomeProjectLinks() {
  return (
    <StyledSection>
      <Container>
        <ProjectLink
          path='/WebDesign'
          full={true}
          bg={webDesignBg}
          text='Web Design'
        />
        <div>
          <ProjectLink
            path='/AppDesign'
            full={false}
            bg={appDesignBg}
            text='App Design'
          />
          <ProjectLink
            path='/GraphicDesign'
            full={false}
            bg={graphicDesignBg}
            text='Graphic Design'
          />
        </div>
      </Container>
    </StyledSection>
  );
}
