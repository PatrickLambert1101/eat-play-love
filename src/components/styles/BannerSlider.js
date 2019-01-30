import styled from 'styled-components';

const BannerSlider = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto 80px;
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
  @media (max-width: 480px) {
    .desktop {
      display: none;
    }
    .mobile {
      padding: 0 20px;
      display: block;
    }
    padding: 0;
    .gatsby-image-wrapper {
      height: 420px;
    }
  }
  .slick-slide {
    height: 420px;
    position: relative;

    h2 {
      position: absolute;
      z-index: 1;
      margin: 0;
      left: 50%; /* horizontal alignment */
      top: 50%; /* vertical alignment */
      transform: translate(-50%, -50%);
    }
    @media (max-width: 480px) {
      height: auto;
    }
  }
`;

export default BannerSlider;
