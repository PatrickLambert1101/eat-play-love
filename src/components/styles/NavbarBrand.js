import styled from 'styled-components';

const NavbarBrand = styled.div`
  justify-content: center;
  margin-bottom: 40px;
  margin-left: 15px;
  margin-top: 40px;
  display: flex;
  @media (max-width: ${props => props.theme.mobile}) {
    justify-content: space-between;
  }
  .navbar-item {
    width: 620px;
  }
  .navbar-item img {
    text-align: center;
    @media (max-width: ${props => props.theme.mobile}) {
      max-width: 300px;
    }
  }
`;
export default NavbarBrand;
