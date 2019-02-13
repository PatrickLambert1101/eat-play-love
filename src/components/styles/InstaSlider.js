import styled from 'styled-components';

const InstaSlider = styled.div`
  max-width: ${props =>
    parseInt(props.theme.maxWidth.split('px')[0], 10) + 200}px;
  margin: auto;

  .slick-slide > div {
    padding: 20px;
  }

  .gatsby-image-wrapper {
    height: 190px;
  }
  @media (max-width: ${props => props.theme.desktop}) {
    padding: 10px;
  }
`;

export default InstaSlider;
