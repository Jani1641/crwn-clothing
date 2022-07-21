import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectCurrentUser, selectDisplayName, selectIsProfileOpen } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { setIsProfileOpen } from '../../store/user/user.action';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  Profile,
} from './navigation.styles';
import ProfileDropdown from '../../components/profile-dropdown/profile-dropdown.component';
import Footer from '../footer/footer.component';
import { BodyContainer } from './navigation.styles';


const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const isProfileOpen = useSelector(selectIsProfileOpen);
  const displayName = useSelector(selectDisplayName);
  const toggleIsProfileOpen = () => dispatch(setIsProfileOpen(!isProfileOpen));
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
          <h2>CRWN STORE</h2>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {
            currentUser ? (
            <NavLink as='span' onClick={toggleIsProfileOpen}>
              HELLO {displayName ? displayName.toUpperCase() : displayName}
            </NavLink>
            ) : (
              <Profile onClick={toggleIsProfileOpen}>PROFILE</Profile>
            )
          }
          { isProfileOpen && <ProfileDropdown/>}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <BodyContainer>
        <Outlet />
      </BodyContainer>
      <Footer/>
    </Fragment>
  );
};

export default Navigation;
