import { ProductCartContainer,Footer,Name,Price,Quantity } from "./recent-product.styles";

const RecentProductCard = ({ product }) => {
    const {title, price, imageUrl,quantity } = product;

    return (
      <ProductCartContainer>
        <img src={imageUrl} alt={`${title}`} />
        <Footer>
          <Name>{title}</Name>
          <Price>&#x20b9;{price}</Price>
          <Quantity>Quantity:{quantity}</Quantity>
        </Footer>
      </ProductCartContainer>
    );
  };
  
  export default RecentProductCard;
  