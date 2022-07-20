import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileDropdownContainer = styled.div`
  position: absolute;
  display: flex;
  width: 260px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 55px;
  z-index: 5;
`;

export const NavLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  width: 220px;
  text-align: center;
`;