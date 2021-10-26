import styled from 'styled-components';
import { sectionSpacingSm } from '../../abstracts/Mixins';
import { ThreeCol } from '../styledElements/Containers.styled';
import HomeFeature from './HomeFeature';
import { useGlobalContext } from '../../context/context';

const StyledSection = styled.section`
  ${sectionSpacingSm}
`;

export default function HomeFeatures() {
  const { homeFeatures } = useGlobalContext();

  return (
    <StyledSection>
      <ThreeCol>
        {homeFeatures.map((feat) => (
          <HomeFeature key={feat.id} {...feat} />
        ))}
      </ThreeCol>
    </StyledSection>
  );
}
