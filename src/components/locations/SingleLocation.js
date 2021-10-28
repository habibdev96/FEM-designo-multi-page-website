import styled from 'styled-components';
import Image from 'next/image';
import { SectionHeading } from '../styledElements/Headings.styled';
import {
  maxWidthMd,
  flexAlign,
  headingStyles,
  textStyles,
} from '../../abstracts/Mixins';
import pattern from '../../assets/shared/desktop/bg-pattern-two-circles.svg';

const StyledArticle = styled.article`
  margin: 5rem;
  position: relative;
`;

const Container = styled.div`
  ${maxWidthMd}
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: var(--gap);

  &.inverted {
    grid-template-columns: 1fr 2fr;
  }

  .info {
    position: relative;
    overflow: hidden;
    height: 100%;
    padding: 5rem;
    background-color: var(--lighterPeach);
    border-radius: var(--secondaryRadius);
  }

  .pattern {
    position: absolute;
    top: 0;
  }

  .contact {
    ${flexAlign}
    align-items: flex-start;
  }

  h5 {
    ${headingStyles}
    font-size: 1.5rem;
    margin: 1rem 0;
    color: var(--darkGray);
  }

  p {
    ${textStyles}
    font-size: 1.5rem;
    color: var(--darkGray);
  }

  .map {
    img {
      border-radius: var(--secondaryRadius);
    }
  }
`;

export default function SingleLocation({
  map,
  location,
  officeInfo: { office, address },
  contactInfo: { title, phone, email },
  invert,
}) {
  return (
    <StyledArticle>
      <Container className={`${invert && 'inverted'}`}>
        {!invert ? (
          <>
            <div className='info'>
              <div className='pattern'>
                <Image src={pattern} alt='' />
              </div>
              <SectionHeading peach>{location}</SectionHeading>
              <div className='contact'>
                <div>
                  <h5>{office}</h5>
                  <p>{address[0]}</p>
                  <p>{address[1]}</p>
                </div>
                <div>
                  <h5>{title}</h5>
                  <h5>{phone}</h5>
                  <h5>{email}</h5>
                </div>
              </div>
            </div>
            <div className='map'>
              <Image src={map} alt={location} />
            </div>
          </>
        ) : (
          <>
            <div className='map'>
              <Image src={map} alt={location} />
            </div>
            <div className='info'>
              <div className='pattern'>
                <Image src={pattern} alt='' />
              </div>
              <SectionHeading peach>{location}</SectionHeading>
              <div className='contact'>
                <div>
                  <h5>{office}</h5>
                  <p>{address[0]}</p>
                  <p>{address[1]}</p>
                </div>
                <div>
                  <h5>{title}</h5>
                  <h5>{phone}</h5>
                  <h5>{email}</h5>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </StyledArticle>
  );
}
