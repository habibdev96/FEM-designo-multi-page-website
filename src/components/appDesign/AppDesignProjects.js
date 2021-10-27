import styled from 'styled-components';
import { ThreeCol } from '../styledElements/Containers.styled';
import { sectionSpacingMd } from '../../abstracts/Mixins';
import ProjectCard from '../shared/ProjectCard';
import { useGlobalContext } from '../../context/context';

const StyledSection = styled.section`
  ${sectionSpacingMd}
`;

export default function AppDesignProjects() {
  const { appDesignProjects } = useGlobalContext();

  return (
    <StyledSection>
      <ThreeCol>
        {appDesignProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ThreeCol>
    </StyledSection>
  );
}
