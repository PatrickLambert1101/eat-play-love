import styled from 'styled-components';

const GalleryStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  .gatsby-image-wrapper:nth-child(3n + 1) {
    background: red;
    flex: 0 0 100%;
    width: 60%;
  }
  .gatsby-image-wrapper:nth-child(3n),
  .gatsby-image-wrapper:nth-child(3n + 2) {
    flex: 0 0 50%;
    width: 40%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export default GalleryStyle;
