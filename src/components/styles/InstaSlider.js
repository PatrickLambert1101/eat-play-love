import styled from 'styled-components';

const InstaSlider = styled.div`
  max-width: 1400px;
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
  @media (max-width: ${props => props.theme.mobile}) {
    display: none;
  }
`;

export default InstaSlider;
