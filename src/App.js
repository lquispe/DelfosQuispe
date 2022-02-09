import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Layout from './layouts/Layout';
import ItemDetailContainer from './components/ItemDetailContainer'
import Categories from './pages/Categories';
import Category from './pages/Category';
import Cart from './components/Cart'



const App = () => {










  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={ <Home />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/categories/" element={<Categories />} /> 
            <Route path="/category/:id" element={<Category />} />  
            <Route path="/cart" element={<Cart/>}/>
{}
            
          </Route>       
        </Routes>
      </BrowserRouter>
    

  );
}

export default App;
