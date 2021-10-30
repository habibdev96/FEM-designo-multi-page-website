import styled from 'styled-components';
import SingleLocation from './SingleLocation';
import { useGlobalContext } from '../../context/context';

const StyledSection = styled.section`
  margin: 15rem 2rem 0 2rem;
`;

export default function LocationsSection() {
  const { locations } = useGlobalContext();

  return (
    <StyledSection>
      {locations.map((location) => (
        <SingleLocation key={location.id} {...location} />
      ))}
    </StyledSection>
  );
}
