import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";

const defaultFormFields={
    dispalyName : '',
    email : '',
    password : '',
    confirmPassword: '',
}

const SignUpForm = () =>{
    const [formFields, setFormFields] =useState(defaultFormFields);
    const {dispalyName,email,password,confirmPassword} = formFields;
    console.log(formFields);

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{dispalyName});
            resetFormFields();
        }catch(error){
            console.log("user creation encountered an error",error);
        }
    }

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    };

    return(
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required  onChange={handleChange} name="dispalyName" value={dispalyName}/>
                <FormInput label="Email" type="email" required  onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password" type="password" required  onChange={handleChange} name="password" value={password}/>
                <FormInput label="Confirm Password" type="password" required  onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type="submit">Sign Up Now</Button>
            </form>
        </div>
    )
}

export default SignUpForm;