import styled from 'styled-components';
import { ThreeCol } from '../styledElements/Containers.styled';
import LocationCta from './LocationCta';
import { sectionSpacingMd } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context/context';

const StyledSection = styled.section`
  ${sectionSpacingMd}
`;

export default function LocationsCta() {
  const { locationsCta } = useGlobalContext();

  return (
    <StyledSection>
      <ThreeCol>
        {locationsCta.map((location) => (
          <LocationCta key={location.id} {...location} />
        ))}
      </ThreeCol>
    </StyledSection>
  );
}
