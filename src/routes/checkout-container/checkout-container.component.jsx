import './checkout-container.styles.jsx'
import { CheckoutContainer } from './checkout-container.styles.jsx';
import AddressContainer from '../../components/checkout-address/checkout-address.component.jsx';
import SummaryCart from '../../components/summary/summary.component.jsx';


const CheckoutFinal = () => {
    return(
        <CheckoutContainer>
            <AddressContainer/>
            <SummaryCart/>
        </CheckoutContainer>
    )
}

export default CheckoutFinal;