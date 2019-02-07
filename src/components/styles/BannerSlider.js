import styled from 'styled-components';

const BannerSlider = styled.div`
  /* max-width: ${props => props.theme.maxWidth}; */
  margin: 0 auto 80px;
  width:100%;
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
      display: block;
    }
    padding: 0;
    .gatsby-image-wrapper {
      height: 420px;
    }
  }
  .slick-slide {
    height: 530px;
    position: relative;
      &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.overlay};
    z-index: 1;
  }

    h2 {
      position: absolute;
      color: #fff;
      z-index: 2;
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
