import { SummaryItemContainer,ItemDetails } from "./summary-item.styles";

const SummaryItem = ({cartItem}) =>{
    const {title,imageUrl,quantity,price} = cartItem;
    return(
        <SummaryItemContainer>
            <img src={imageUrl} alt={`${title}`} />
            <ItemDetails>
                <span>{title}</span>
                <span>
                Quantity = {quantity}  
                </span>
                <span>&#x20b9;{price}</span>
            </ItemDetails>
        </SummaryItemContainer>
    );
}

export default SummaryItem;