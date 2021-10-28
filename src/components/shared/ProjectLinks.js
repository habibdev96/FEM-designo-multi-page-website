import styled from 'styled-components';
import { TwoCol } from '../styledElements/Containers.styled';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';

const StyledSection = styled.article`
  ${maxWidthLg}
  ${sectionSpacingSm}
`;

export default function ProjectLinks({ children }) {
  return (
    <StyledSection>
      <TwoCol>{children}</TwoCol>
    </StyledSection>
  );
}
