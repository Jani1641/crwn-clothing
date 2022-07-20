import { ProductCartContainer,Footer,Name,Price,Quantity,Item } from "./recent-product.styles";

const RecentProductCard = ({ product }) => {
    const {title, price, imageUrl,quantity } = product;

    return (
      <ProductCartContainer>
        <img src={imageUrl} alt={`${title}`} />
        <Footer>
          <Name>{title}</Name>
          <Item>
            <Price>&#x20b9;{price}</Price>
            <Quantity>Quantity:{quantity}</Quantity>
          </Item>
        </Footer>
      </ProductCartContainer>
    );
  };
  
  export default RecentProductCard;
  