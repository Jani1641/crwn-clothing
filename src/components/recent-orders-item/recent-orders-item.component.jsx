import RecentOrderDetails from "../recent-order-item-details/recent-order-item-details.component";
import { Details, ItemContainer } from "./recent-orders-item.styles";

const RecentOrderItem = ({order}) => {
  const {date,address,amount,detailsResponse} = order;
  return(
      <ItemContainer>
        <Details>Ordered Date:{date} </Details>
        <Details>Address of Order: {address}</Details>
        <Details>Total Price :&#x20b9;{amount}</Details>
        <RecentOrderDetails details={detailsResponse}/>
      </ItemContainer>
  );
}

export default RecentOrderItem;