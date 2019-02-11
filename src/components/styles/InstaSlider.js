import styled from 'styled-components';

const InstaSlider = styled.div`
  max-width: 1400px;
  margin: auto;

  @media (max-width: 900px) {
    padding: 0;
  }
  .slick-slide > div {
    padding: 0.5vw;
  }
  @media (max-width: ${props => props.theme.mobile}) {
    display: none;
  }
`;

export default InstaSlider;
