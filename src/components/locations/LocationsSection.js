import styled from 'styled-components';
import SingleLocation from './SingleLocation';
import { useGlobalContext } from '../../context/context';

const StyledSection = styled.section``;

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
