import styled from 'styled-components';

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${props => props.theme.containerWidth};
  margin-bottom: 30px;
  margin: auto;
  height: auto;
  opacity: 1;
  transition: all 0.7s cubic-bezier(0.5, 1, 0.22, 1);
  a {
    width: 250px;
    padding: 15px;
    text-align: center;
    font-size: 24px;
    letter-spacing: 1.7px;
    text-decoration: none;
    color: ${props => props.theme.grey};
    font-family: 'Ostrich', Arial, Helvetica, sans-serif;
  }
  @media (max-width: 900px) {
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
    a {
      min-height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  /* .toggle-closed .navbar-start {
      max-height: 1px;
      overflow: hidden;
      list-style: none;
      opacity: 0;
      margin: 0;
      padding: 0;
      transition: all 0.7s cubic-bezier(0.325, 1, 0.22, 1);
    } */
`;

export default NavLinks;
