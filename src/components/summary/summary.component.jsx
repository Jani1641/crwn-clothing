import { SummaryCartContainer,CartItems,EmptyMessage } from "./summary.styles";
import Spinner from "../spinner/spinner.component";
import { useSelector } from "react-redux/es/exports";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import { selectCartIsLoading } from "../../store/cart/cart.selector";
import SummaryItem from "../summary-item/summary-item.component";

const SummaryCart = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const summayIsLoading = useSelector(selectCartIsLoading);
    return(
        <SummaryCartContainer>
        <h1> Order Items</h1>
        {
            summayIsLoading ? (<Spinner/>) :
            (<CartItems>
                    {cartItems.length ? (
                        cartItems.map((item) => <SummaryItem key={item.id} cartItem={item} />)
                    ) : (
                        <EmptyMessage>Your checkout is empty</EmptyMessage>
                    )}
                </CartItems>)
        }
        <h1> Total : &#x20b9;{cartTotal}</h1>
        </SummaryCartContainer>
    )
}

export default SummaryCart;