import {Routes,Route} from 'react-router-dom';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';
import Authetication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action';
import {useDispatch} from 'react-redux'
import CartService from './services/CartService';
import { fetchCartItemsAsync } from './store/cart/cart.action';
import CheckoutFinal from './routes/checkout-container/checkout-container.component';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import Thankyou from './routes/order-completed/order-completed.component';
import { setDisplayName } from './store/user/user.action';
import { getUsers } from './utils/firebase/firebase.utils';
import RecentOrders from './routes/recent-orders/recent-orders.component';
import { fetchRecentOrders } from './store/checkout/checkout.action';
import CheckoutService from './services/CheckoutService';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const email = localStorage.getItem('email');
    
    if(email) {
      getDisplayName(email);
    }
    getRecentOrders(email);

  },[]);
  
  useEffect(()=>{
    const orderId =  JSON.parse(localStorage.getItem('orderId'));
    if(!orderId){
      CartService.createCart()
      .then((response)=>{
        localStorage.setItem('orderId',JSON.stringify(response.data['id']))
      })
    }else{
      dispatch(fetchCartItemsAsync());
    }
  },[]);

  useEffect(() => {
  const unsubscribe = onAuthStateChangedListener((user) => {
    if (user) {
      createUserDocumentFromAuth(user);
    }
    dispatch(setCurrentUser(user));
  });

  return unsubscribe;
  }, []);

  const getDisplayName = async (email) =>{
    const user =  await getUsers(email);
    dispatch(setDisplayName(user.displayName));
  }

  const getRecentOrders = async (email) => {
    if(email == null) dispatch(fetchRecentOrders([]));
    else {
      const recentItems = await CheckoutService.recentFetchItems(email);
      dispatch(fetchRecentOrders(recentItems.data));
    }
  }
  
  return(
    <Routes >
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />}/>
        <Route path ='shop/*' element={<Shop/>}/>
        <Route path ='auth' element={<Authetication/>}/>
        <Route path ='cart' element={<Checkout/>}/>
        <Route path ='checkout' element = {<CheckoutFinal/>}/>
        <Route path = 'checkout/complete' element={<Thankyou/>}/>
        <Route path='recent-orders' element={<RecentOrders/>}/>
      </Route>
    </Routes>
  )
}


export default App;
