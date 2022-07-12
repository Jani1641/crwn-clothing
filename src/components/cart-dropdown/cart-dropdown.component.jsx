import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../spinner/spinner.component'
import { selectCartIsLoading, selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
import { Fragment } from 'react';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const cartIsLoading = useSelector(selectCartIsLoading);
  const goToCheckoutHandler = () => {
    navigate('/checkout');
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
        <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
      </Fragment>
    }
    </CartDropdownContainer>
  );
};

export default CartDropdown;
