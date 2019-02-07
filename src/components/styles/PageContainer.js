import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: ${props => (props.form ? '50vw' : props.theme.maxWidth)};
  margin: auto;
  text-align: center;
  .lead {
    margin-top: 2.5em;
    margin-bottom: 4em;
    p,
    .content {
      margin-top: 1.5em;
      padding: 0 15px;
      text-align: left;
    }
  }

  .body-text {
    text-align: left;
    padding: 15px;
  }

  @media (max-width: 500px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export default PageContainer;
