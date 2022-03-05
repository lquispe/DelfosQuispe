import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Layout from './layouts/Layout';
import ItemDetailContainer from './components/ItemDetailContainer'
import Categories from './pages/Categories';
import Category from './pages/Category';
import Cart from './components/Cart'
import SignIn from './components/Signin'

import { CartProvider } from './context/CartContex';
import { UsrProvider } from './context/UsrContext';



const App = () => {










  return (
    <UsrProvider>

    <CartProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={ <Home />} />
            <Route path="/signin" element={<SignIn/>}/>

            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/categories/" element={<Categories />} /> 
            <Route path="/category/:id" element={<Category />} />  
            <Route path="/cart" element={<Cart/>}/>

{}
            
          </Route>       
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </UsrProvider>

    

  );
}

export default App;