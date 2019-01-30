import styled from 'styled-components';

const ReadMore = styled.div`
  text-decoration: none;
  font-family: ${props => props.theme.georgia};
  font-size: 16px;
  color: ${props => props.theme.greyButton};
  text-align: center;
  margin-top: 20px;
  padding: 6px 10px;
  background-color: ${props => props.theme.pink};
  transition: all 0.2s ease-out;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0);
  &:hover {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    background-color: #ecc2aa;
  }
  &.large {
    font-weight: bold;
    font-family: 'Georgia', Arial, Helvetica, sans-serif;
    font-size: 28px;
    padding: 8px 22px;
    color: #ebe6e1;
    background-color: #824706;
    border: 1px solid #a93a3a;
  }
`;

export default ReadMore;