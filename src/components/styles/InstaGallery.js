import styled from 'styled-components';

const InstaGallery = styled.div`
  & > div {
    margin: 15px;
  }
  @media (min-width: ${props => props.theme.mobile}) {
    display: none;
  }
`;

export default InstaGallery;
