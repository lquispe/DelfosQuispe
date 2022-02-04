import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { getProductsFromCategory } from './services/Producto';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';



const App = () => {
  const [products, setProducts] = useState([])
  const [idProduct, setIdProducto]= useState("MLA822750513");



  useEffect(() => {
    let mounted = true

    getProductsFromCategory("MLA", "MLA3025").then(items => {
      if(mounted) {
        setProducts(items.results)
        setTimeout(() => {
        }, 3000)
      }
    })
    return () => mounted = false;
  }, [])


  
 

  

  return (
    <>
    {/*
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <section className="categ_sec">
        <itemDetailContainer products={products} />
      </section>
    </div>
    */}
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <section className="categ_sec">
      <ItemDetailContainer idProduct={idProduct} />

      </section>
    </div>
    </>
  );
}

export default App;
