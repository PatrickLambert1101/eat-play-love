import styled from 'styled-components';

const InstaGallery = styled.div`
  & > div {
    margin: 15px;
  }
  @media (min-width: 480px) {
    display: none;
  }
`;

export default InstaGallery;
