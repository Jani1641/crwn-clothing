
import { selectCartItems,selectCartTotal } from '../../store/cart/cart.selector';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';
import Button from '../../components/button/button.component';
import { useNavigate } from 'react-router-dom';
import { deleteCartAsync } from '../../store/cart/cart.action';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal)
  const CheckoutHandler = () =>{
    deleteCartAsync();
  }
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: &#x20b9;{cartTotal}</Total>
      <Button>Checkout</Button>
    </CheckoutContainer>
  );
};

export default Checkout;
