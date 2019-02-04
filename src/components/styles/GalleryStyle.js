import styled from 'styled-components';

const GalleryStyle = styled.div`
  @media (max-width: 480px) {
    flex-direction: column;
  }
  & > div {
    flex: 1 0 30%;
    margin: 10px;
    height: 300px;
  }
`;

export default GalleryStyle;
