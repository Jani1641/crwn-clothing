import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../spinner/spinner.component'
import { selectCartIsLoading, selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useDispatch } from 'react-redux';
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
import { Fragment } from 'react';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const cartIsLoading = useSelector(selectCartIsLoading);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen))
    navigate('/cart');
  };

  return (
    <CartDropdownContainer>
    {
      cartIsLoading ? (<Spinner/>) :
      <Fragment>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
        </CartItems>
        <Button onClick={goToCheckoutHandler}>VIEW CART</Button>
      </Fragment>
    }
    </CartDropdownContainer>
  );
};

export default CartDropdown;
