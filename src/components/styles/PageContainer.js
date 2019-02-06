import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: ${props => (props.form ? '50vw' : props.theme.maxWidth)};
  margin: auto;
  text-align: center;
  .lead {
    margin-top: 2.5em;
    margin-bottom: 4em;
    p {
      margin-top: 1.5em;
      text-align: left;
    }
  }

  @media (max-width: 500px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export default PageContainer;
