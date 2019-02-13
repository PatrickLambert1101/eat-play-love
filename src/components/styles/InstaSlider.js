import styled from 'styled-components';

const InstaSlider = styled.div`
  max-width: ${props =>
    parseInt(props.theme.maxWidth.split('px')[0], 10) + 200}px;
  margin: auto;
  padding: 7px;
  .slick-slide > div {
    padding: 20px;
    @media (max-width: ${props => props.theme.mobile}) {
      padding: 8px;
    }
  }

  .gatsby-image-wrapper {
    height: 190px;
    @media (max-width: ${props => props.theme.mobile}) {
      height: 140px;
    }
  }
`;

export default InstaSlider;
