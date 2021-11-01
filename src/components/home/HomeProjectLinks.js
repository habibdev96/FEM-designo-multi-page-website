import styled from 'styled-components';
import { maxWidthLg } from '../../abstracts/Mixins';
import { ThreeCol } from '../styledElements/Containers.styled';
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
`;

export default function HomeProjectLinks() {
  return (
    <StyledSection>
      <Container>
        <ThreeCol>
          <ProjectLink
            path='/WebDesign'
            full={false}
            bg={webDesignBg}
            text='Web Design'
          />
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
        </ThreeCol>
      </Container>
    </StyledSection>
  );
}
