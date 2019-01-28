import styled from 'styled-components';

const InstaSlider = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  padding: 0 20px;
  .slick-slide .gatsby-image-wrapper {
    padding: 5px;
  }
  .slick-dots button::before {
    color: #daa56b;
  }
  .slick-dots .slick-active button::before {
    color: #965711;
  }
  @media (max-width: 900px) {
    padding: 0;
  }
`;

export default InstaSlider;
