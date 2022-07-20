import {NavLink,NavLinks} from './profile-dropdown.styles'
import { useDispatch, useSelector } from 'react-redux';
import {
  ProfileDropdownContainer,
} from './profile-dropdown.styles';
import { selectCurrentUser, selectIsProfileOpen } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { setIsProfileOpen } from '../../store/user/user.action';

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isProfileOpen = useSelector(selectIsProfileOpen);

  const handleSignIn = () => {
    dispatch(setIsProfileOpen(!isProfileOpen));
  }

  const handleSignOut = () => {
    dispatch(setIsProfileOpen(!isProfileOpen));
    localStorage.removeItem('email');
     return signOutUser();
  }
  
  return (
    <ProfileDropdownContainer>
      {
        currentUser ? (
            <NavLinks>
              <NavLink to='/recent-orders' >RECENT ORDERS</NavLink>
              <NavLink to='/' onClick={handleSignOut}>SIGN OUT</NavLink>
            </NavLinks>
        ):(
            <NavLinks>
              <NavLink to='/auth' onClick={handleSignIn}>SIGN IN</NavLink>
            </NavLinks>
        )
      }
    </ProfileDropdownContainer>
  );
};

export default ProfileDropdown;
