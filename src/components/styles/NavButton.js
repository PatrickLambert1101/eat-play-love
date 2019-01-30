import styled from 'styled-components';

const NavButton = styled.button`
  @media (min-width: 901px) {
    display: none;
  }
  @media (max-width: 480px) {
    margin-right: 15px;
    margin-top: 15px;
  }
  img {
    max-width: 55px;
  }
`;

export default NavButton;
