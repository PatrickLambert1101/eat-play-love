import styled from 'styled-components';

const GalleryStyle = styled.div`
  display: flex;
  margin-top: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
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
