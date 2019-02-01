import styled from 'styled-components';

const InstaSlider = styled.div`
  max-width: ${props => `${parseInt(props.theme.maxWidth, 10) + 1}vw`};
  margin: auto;

  .slick-dots button::before {
    color: #daa56b;
  }
  .slick-dots .slick-active button::before {
    color: #965711;
  }
  @media (max-width: 900px) {
    padding: 0;
  }
  .slick-slide > div {
    padding: 0.5vw;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export default InstaSlider;
