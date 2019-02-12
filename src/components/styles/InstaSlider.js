import styled from 'styled-components';

const InstaSlider = styled.div`
  max-width: ${props =>
    parseInt(props.theme.maxWidth.split('px')[0], 10) + 200}px;
  margin: auto;

  @media (max-width: ${props => props.theme.mobile}) {
    padding: 0;
  }
  .slick-slide > div {
    padding: 20px;
  }
  @media (max-width: ${props => props.theme.mobile}) {
    display: none;
  }
`;

export default InstaSlider;
