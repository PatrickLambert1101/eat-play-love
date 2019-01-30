import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: ${props => props.theme.containerWidth};
  margin: auto;
  margin: auto;
  text-align: center;
  @media (max-width: 500px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export default PageContainer;
