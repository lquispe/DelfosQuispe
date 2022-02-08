import { useState, useEffect } from 'react';
import { getProductsFromCategory } from '../services/Producto';
import ItemListContainer from './ItemListContainer';
import{useParams,useOutletContext} from 'react-router-dom';




const Home = () => {
  const [products, setProducts] = useState([])
  const { id } = useParams();
  const [setLoading] = useOutletContext();


  useEffect(() => {
    
    let mounted = true
    setLoading(true)


    getProductsFromCategory("MLA", "MLA3025").then(items => {
      if(mounted) {
        setProducts(items.results)
        console.log(products)
        setTimeout(() => {
        setLoading(false)

        }, 3000)
      }
    })
    return () => mounted = false;
  }, [id])


  
 

  

  return (
    <>
    
    <div>
      
      
      <section className="categ_sec">
      <ItemListContainer products={products} />

      </section>
    </div>
    </>
  );
}

export default Home;
