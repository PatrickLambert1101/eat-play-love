import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: ${props => (props.form ? '800px' : props.theme.maxWidth)};
  padding-left: 40px;
  padding-right: 40px;
  @media (max-width: ${props => props.theme.mobile}) {
    padding: 0 15px;
  }
  margin: 60px auto 0;
  text-align: center;
  h4 {
    margin-top: 25px;
  }
  h4:first-child {
    margin-top: 10px;
  }
  .lead {
    margin-top: 2.5em;
    margin-bottom: 0.3em;
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
`;

export default PageContainer;
