import { useSelector } from "react-redux";
import { selectCheckoutIsLoading } from "../../store/checkout/checkout.selector";
import { Fragment } from "react";
import Spinner from "../spinner/spinner.component";
import RecentProductCard from "../recent-product/recent-product.component";
import {Title,CategoryContainer} from "./recent-order-item-details.styles"


const RecentOrderDetails = ({details}) => {
    const isLoading = useSelector(selectCheckoutIsLoading);
    return (
      <Fragment>
        <Title>Items:</Title>
        {
          isLoading ? (<Spinner/>) :
          <CategoryContainer>
            {
              details.map((product,index) => (
                <RecentProductCard key={index} product={product} />
              ))}
          </CategoryContainer>
        }
      </Fragment>
    );
  };
  
  export default RecentOrderDetails;