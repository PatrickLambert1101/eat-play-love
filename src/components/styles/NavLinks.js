import styled from 'styled-components';

const NavLinks = styled.div`
  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    left: 0;
    top: 35px;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    padding: 12px 16px;
    display: block;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto 35px;
  height: auto;
  opacity: 1;
  transition: opacity 0.7s cubic-bezier(0.325, 1, 0.22, 1);
  & > * {
    width: 250px;
    padding: 15px;
    text-align: center;
    font-size: 24px;
    letter-spacing: 1.7px;
    text-decoration: none;
    color: ${props => props.theme.grey};
    font-family: 'Ostrich', Arial, Helvetica, sans-serif;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      bottom: 5px;
      left: 50%;
      transform: translateX(-52%);
      height: 2px;
      width: 65px;
      opacity: 0;
      background-color: ${props => props.theme.goldLight};
      transition: all 0.3s ease-in;
    }
    &.active::after,
    &:hover::after {
      opacity: 1;
    }
  }

  @media (max-width: ${props => props.theme.mobile}) {
    flex-direction: column;
    align-items: center;
    & > a {
      min-height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &.toggle-closed {
    max-height: 1px;
    overflow: hidden;
    list-style: none;
    opacity: 0;
    margin: 0;
    padding: 0;
    transition: all 0.7s cubic-bezier(0.325, 1, 0.22, 1);
  }
`;

export default NavLinks;
