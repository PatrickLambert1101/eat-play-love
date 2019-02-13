import styled from 'styled-components';

const InstaSlider = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  @media (max-width: ${props => props.theme.mobile}) {
    padding: 7px;
  }
  .slick-slide > div {
    padding: 15px;
    @media (max-width: ${props => props.theme.mobile}) {
      padding: 8px;
    }
  }
`;

export default InstaSlider;
