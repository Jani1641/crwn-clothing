import {ThankyouContainer} from './order-completed.styles'
import Button from "../../components/button/button.component"
import { useNavigate } from 'react-router-dom'


const Thankyou = () => {
    const navigate = useNavigate();
    const handleGoToHome = () =>{
        navigate('/')
    }

    return(
        <ThankyouContainer>
            <h2>Thank you. Your order was placed.</h2>
            <Button onClick={handleGoToHome}>Continue to Home</Button>
        </ThankyouContainer>
    )
}

export default Thankyou;