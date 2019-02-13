import styled from 'styled-components';

const ReadMore = styled.div`
  text-decoration: none;
  font-family: ${props => props.theme.georgia};
  font-size: 17px;
  color: ${props => props.theme.greyButton};
  text-align: center;
  margin-top: 20px;
  padding: 7px 10px;
  display: inline-block;
  margin: auto;
  background-color: ${props => props.theme.pink};
  transition: all 0.2s ease-out;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0);
  h4 {
    margin: 0;
  }
  &:hover {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.theme.lightPink};
  }
  &.large {
    font-weight: bold;
    font-family: 'Old Standard TT', Arial, Helvetica, sans-serif;
    font-size: 28px;
    padding: 8px 22px;
    color: ${props => props.theme.brown};
    background-color: ${props => props.theme.lightBrown};
    border: 1px solid ${props => props.theme.darkRed};
  }
`;

export default ReadMore;
