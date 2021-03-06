import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useDispatch } from 'react-redux/es/exports';
import {
  getUsers,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';
import { setDisplayName } from '../../store/user/user.action';
import { fetchRecentItemsAsync } from '../../store/checkout/checkout.action';
import { useNavigate } from 'react-router-dom';
import { Head } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const sol = await signInWithGooglePopup();
    localStorage.setItem('email',sol.user.email);
    dispatch(setDisplayName(sol.user.displayName));
    dispatch(fetchRecentItemsAsync(sol.user.email));
    const queryParams = new URLSearchParams(window.location.search);
    const redirect = queryParams.get('redirect');
    if(redirect){
      navigate(redirect);
    }else{
      navigate('/');
    }
    return sol;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      localStorage.setItem('email',email);
      const user =  await getUsers(email);
      dispatch(setDisplayName(user.displayName));
      dispatch(fetchRecentItemsAsync(email))
      
      const queryParams = new URLSearchParams(window.location.search);
      const redirect = queryParams.get('redirect');
      if(redirect){
        navigate(redirect);
      }else{
        navigate('/');
      }
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <Head>Already have an account?</Head>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
