import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 15px 40px 20px 40px;
  margin-top: 0px;
  background-color: rgba(65,45,25, 0.9);

`;

export const Profile = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bolder;
  color: white;
`
export const LogoContainer = styled(Link)`
  height: 100%;
  //width: 75px;
  padding: 5px;
  margin-right: 20px;
  display: flex;
  h2 {
  font-weight: 800;
  color: #fff;
  margin-left: 50px;
  }

`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bolder;
  color: white;

  &:hover{
    color: white;
  }
`;

export const BodyContainer= styled.div`
  padding: 0px 40px 20px 40px;
`
