import styled from 'styled-components';

const SingleSideButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  a {
    background-color: ${props => props.theme.pink};
    padding: 15px 17px;
    font-size: 1.3em;
    h4 {
      color: ${props => props.theme.lightBrown};
      margin: 0;
    }
  }
`;

export default SingleSideButton;
