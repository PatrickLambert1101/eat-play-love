import styled from 'styled-components';

const NavbarBrand = styled.div`
  justify-content: center;
  margin-bottom: 40px;
  margin-left: 15px;
  margin-top: 40px;
  display: flex;
  @media (max-width: 480px) {
    justify-content: space-between;
  }
  .navbar-item {
    width: 530px;
  }
  .navbar-item img {
    width: 100% !important;
    text-align: center;
    @media (max-width: 480px) {
      max-width: 300px;
    }
  }
`;
export default NavbarBrand;
