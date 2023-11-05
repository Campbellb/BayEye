import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
  background-color: rgba(247, 246, 244);
`

export const Container = styled.div`
  padding-bottom: 5rem;
  padding-top: 0.5rem;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  margin-top: 2rem;
  margin-inline-end: 2rem;
  padding: 0;
  flex: 0 0 auto;

  @media (min-width: 768px) {
    max-width: 50%;
  }

  @media (min-width: 992px) {
    max-width: 33.33333%;
  }

  @media (min-width: 1200px) {
    max-width: 25%;
  }
`;

export const NewsletterButton = styled.div`
  border: 2px solid rgba(253, 85, 32); /* Replace with actual color value */
  background-color: rgba(255,237,227); /* Example for bg-orange-10, replace with actual color value */
  padding: 1.5rem 1rem;
  display: inline-flex;
  align-items: center;
  height: 100%;
  border-radius: 0.75rem;
  cursor: pointer;
  width: 19rem;

  &.checked {
    // Your checked styles here
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin: 0 1.2rem;
  align-self: center;
`;

export const NewsletterContent = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
    font-family: 'Open Sans', sans-serif;

`;

export const Title = styled.h6`
  margin-bottom: 0.25rem;
  font-weight: normal;
  line-height: base;
  font-size: 20px;
`;

export const Description = styled.div`
  font-size: smaller;
  color: muted; /* Replace with actual color value */
`;

export const PageTitle = styled.h1`
  font-size: 20px;
  line-height: 24px;
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
`

export const PageSubtitle = styled.h6`
  font-size: 1rem;
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  margin-top: 0.75rem;
`

export const HeaderContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const UpdateButton = styled.button`
  margin-inline-end: auto;
`