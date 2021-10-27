import styled from 'styled-components';
import { ThreeCol } from '../styledElements/Containers.styled';
import { sectionSpacingMd } from '../../abstracts/Mixins';
import ProjectCard from '../shared/ProjectCard';
import { useGlobalContext } from '../../context/context';

const StyledSection = styled.section`
  ${sectionSpacingMd}
`;

export default function ProjectCards({ projectType }) {
  const { webDesignProjects, appDesignProjects, graphicDesignProjects } =
    useGlobalContext();

  // checks the value of the prop "projectType"
  // assigns variable "projects" to corresponding state value and returns it
  // function gets mapped over
  const handleProjects = () => {
    let projects;

    if (projectType === 'webDesign') {
      projects = webDesignProjects;
      return projects;
    }

    if (projectType === 'appDesign') {
      projects = appDesignProjects;
      return projects;
    }

    if (projectType === 'graphicDesign') {
      projects = graphicDesignProjects;
      return projects;
    }
  };

  return (
    <StyledSection>
      <ThreeCol start>
        {handleProjects().map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ThreeCol>
    </StyledSection>
  );
}
