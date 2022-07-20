import RecentOrderDetails from "../recent-order-item-details/recent-order-item-details.component";
import { Details, ItemContainer,DetailsContainer,Value } from "./recent-orders-item.styles";

const RecentOrderItem = ({order}) => {
  const {date,address,amount,detailsResponse} = order;
  const displayDate = new Date(date);
  console.log(displayDate.getDate());
  console.log(displayDate.getMonth());
  console.log(displayDate.getFullYear());
  
  const months = [ "January", "February", "March", "April", "May", "June", 
          "July", "August", "September", "October", "November", "December" ];
  return(
      <ItemContainer>
        <DetailsContainer>
          <Details>ORDER PLACED:<br/><Value>{`${displayDate.getDate()} ${months[displayDate.getMonth()]},${displayDate.getFullYear()}`}</Value> </Details>
          <Details>TOTAL :<br/><Value>&#x20b9;{amount}</Value></Details>
          <Details>SHIP TO:<br/> <Value>{address}</Value></Details>
        </DetailsContainer>
        <RecentOrderDetails details={detailsResponse}/>
      </ItemContainer>
  );
}

export default RecentOrderItem;