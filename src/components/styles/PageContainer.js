import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: ${props => (props.form ? '800px' : props.theme.maxWidth)};
  padding-left: 15px;
  padding-right: 15px;
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
    text-align: center;
    padding: 15px;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export default PageContainer;
