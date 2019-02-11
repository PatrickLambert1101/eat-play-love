import styled from 'styled-components';

const NavButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: inherit;
  border: none;
  @media (min-width: 901px) {
    display: none;
  }
  @media (max-width: ${props => props.theme.mobile}) {
    margin-right: 15px;
    margin-top: 15px;
  }
  img {
    max-width: 55px;
  }
`;

export default NavButton;
