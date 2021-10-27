import styled from 'styled-components';
import { TwoCol } from '../styledElements/Containers.styled';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';

const StyledSection = styled.article`
  ${maxWidthLg}
  ${sectionSpacingMd}
`;

export default function ProjectLinks({ children }) {
  return (
    <StyledSection>
      <TwoCol>{children}</TwoCol>
    </StyledSection>
  );
}
