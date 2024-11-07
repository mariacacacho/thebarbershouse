import styled from 'styled-components'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const LayoutContainer = styled.div`
  background-color: white;
  font-family: 'Roboto', sans-serif;
  margin: auto;
  overflow: hidden;
  background-color: white;

  @media (max-width: 550px) {
    /* Phones */
    font-size: 0.9em;
  }

  @media (max-width: 1100px) {
    /* Tablets */
    font-size: 0.9em;
  }
`
export const ContentLayout = styled.div`
  margin: 20px 30px 20px 20px;
`