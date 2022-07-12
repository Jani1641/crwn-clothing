import { useSelector,useDispatch } from 'react-redux/es/exports';
import { addToCartItemsAsync,deleteCartItemsAsync, updateCartItemsAsync } from '../../store/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { id,title, imageUrl, price, quantity } = cartItem;
  const clearItemHandler = () => dispatch(deleteCartItemsAsync(id));
  const addItemHandler = () => dispatch(addToCartItemsAsync(id,1));
  const removeItemHandler = () => dispatch(updateCartItemsAsync(id,quantity-1));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${title}`} />
      </ImageContainer>
      <BaseSpan> {title} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
