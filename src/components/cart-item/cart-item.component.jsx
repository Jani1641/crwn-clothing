import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const{title, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${title}`} />
      <ItemDetails>
        <span>{title}</span>
        <span>
         Quantity = {quantity}  
        </span>
        <span>&#x20b9;{price}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
