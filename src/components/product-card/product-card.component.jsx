import { useDispatch } from 'react-redux';

import { addToCartItemsAsync } from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';



const ProductCard = ({ product }) => {
  const { id,title, price, imageUrl } = product;
  const dispatch = useDispatch();

  const addProductToCart = (event) => {
    dispatch(addToCartItemsAsync(id,1));
  }

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${title}`} />
      <Footer>
        <Name>{title}</Name>
        <Price>&#x20b9;{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
