import { useSelector } from "react-redux";
import { selectCheckoutIsLoading } from "../../store/checkout/checkout.selector";
import Spinner from "../spinner/spinner.component";
import RecentProductCard from "../recent-product/recent-product.component";
import {Title,CategoryContainer} from "./recent-order-item-details.styles"
import { RecentOrderDetailsContainer } from "./recent-order-item-details.styles";


const RecentOrderDetails = ({details}) => {
    const isLoading = useSelector(selectCheckoutIsLoading);
    return (
      <RecentOrderDetailsContainer>
        <Title>ITEMS:</Title>
        {
          isLoading ? (<Spinner/>) :
          <CategoryContainer>
            {
              details.map((product,index) => (
                <RecentProductCard key={index} product={product} />
              ))}
          </CategoryContainer>
        }
      </RecentOrderDetailsContainer>
    );
  };
  
  export default RecentOrderDetails;