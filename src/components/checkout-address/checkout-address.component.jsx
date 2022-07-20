import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { AddressForm } from "./checkout-address.styles";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchAddressAsync } from "../../store/checkout/checkout.action";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../../store/user/user.selector";

const defaultFormFields = {
    firstName:'',
    lastName:'',
    doorNo: '',
    streetName: '',
    cityName: '',
    state: '',
    mobileNo: '',
    pinCode: '',
};

const AddressContainer = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {firstName,lastName,doorNo,streetName,cityName,state,pinCode,mobileNo} = formFields;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value} = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    const email = useSelector(selectUserEmail);
    const handleSubmit = (event) =>{
        event.preventDefault();

        const address = `${firstName} ${lastName},${doorNo},${streetName},${cityName},${state}-${pinCode},${mobileNo}`;
        console.log(address);
        dispatch(fetchAddressAsync(address,email));
        navigate('/checkout/complete');
    }

    return(
        <AddressForm >
            <h1>Enter your address:</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='First Name'
                    type = 'text'
                    required
                    onChange={handleChange}
                    name='firstName'
                    value={firstName}
                />
                <FormInput
                    label='Last Name'
                    type = 'text'
                    required
                    onChange={handleChange}
                    name='lastName'
                    value={lastName}
                />
                <FormInput
                    label='H.No/D.No'
                    type = 'text'
                    required
                    onChange={handleChange}
                    name='doorNo'
                    value={doorNo}
                />
                <FormInput
                    label='Area/Street Name'
                    type = 'text'
                    required
                    onChange={handleChange}
                    name='streetName'
                    value={streetName}
                />
                <FormInput
                    label='Town/City Name'
                    type = 'text'
                    required
                    onChange={handleChange}
                    name='cityName'
                    value={cityName}
                />
                
                <FormInput
                    label='State'
                    type = 'text'
                    required
                    onChange={handleChange}
                    name='state'
                    value={state}
                />
                <FormInput
                    label='PIN CODE'
                    type = 'text'
                    required
                    onChange={handleChange}
                    name='pinCode'
                    value={pinCode}
                />
                <FormInput
                    label='Mobile No.'
                    type = 'text'
                    required
                    onChange={handleChange}
                    name='mobileNo'
                    value={mobileNo}
                />
                <Button type='submit'>Submit</Button>
            </form>
        </AddressForm>
    )
}

export default AddressContainer;