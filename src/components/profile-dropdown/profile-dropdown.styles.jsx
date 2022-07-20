import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileDropdownContainer = styled.div`
  position: absolute;
  display: flex;
  width: 260px;
  padding: 20px;
  /* border: 1px solid black; */
  background-color: white;
  box-shadow: 0 0 2px #ccc;
  border-radius: 5px;
  top: 90px;
  right: 55px;
  z-index: 5;
`;

export const NavLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  &:hover{
    color: rgba(0, 0, 128,0.8);
  }
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  width: 220px;
  text-align: center;
`;