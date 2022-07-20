import { Fragment } from "react"
import { useSelector } from "react-redux"
import RecentOrderItem from "../../components/recent-orders-item/recent-orders-item.component"
import { selectCheckoutIsLoading, selectRecentItems } from "../../store/checkout/checkout.selector"
import { RecentOrdersContainer, Title } from "./recent-orders.styles"
import Spinner from "../../components/spinner/spinner.component"

const RecentOrders = ()=> {
    const orders = useSelector(selectRecentItems);
    const isLoading = useSelector(selectCheckoutIsLoading);
    console.log(orders);
    return(
        <Fragment>
            <Title>RECENT ORDERS</Title>
            {   isLoading ? (<Spinner/>) :
                <RecentOrdersContainer>
                    {orders &&
                        orders.map((item,index) => (
                        <RecentOrderItem key={index} order={item} />
                    ))
                    }
                </RecentOrdersContainer>
            }
        </Fragment>
    )
}

export default RecentOrders;