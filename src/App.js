import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { getProductsFromCategory } from './services/Producto';
import ItemListContainar from './components/ItemListContainer';



const App = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    console.log('hola');

  
 const task= new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let prod=[{ id: '1', title: 'Un mundo feliz', thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_658565-MLA31092029590_062019-V.webp', price: '100' },
        { id: '2', title: 'El retrato de Dorian Gray', thumbnail: 'https://images.cdn3.buscalibre.com/fit-in/360x360/f5/f7/f5f76824ad6de2142b65ac8c45a6bbe9.jpg', price: '100' },
        { id: '3', title: 'Un mundo feliz', thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_658565-MLA31092029590_062019-V.webp', price: '100' }]
        resolve (prod)
      },2000)
        
      })

      task.then( result=>{
        setProducts(result)
      })
      
  }, [])

  

  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <section className="categ_sec">
        <ItemListContainar products={products} />
      </section>
    </div>
  );
}

export default App;
