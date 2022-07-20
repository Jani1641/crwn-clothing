
import { selectCartItems,selectCartTotal } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux/es/exports';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';
import Button from '../../components/button/button.component';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser);
  const CheckoutHandler = () =>{
    if(currentUser==null){
      navigate('/auth?redirect=/checkout');
    }else{
      navigate('/checkout')
    }
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
      <Button onClick={CheckoutHandler}>Checkout</Button>
    </CheckoutContainer>
  );
};

export default Checkout;
