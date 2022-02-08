import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { getProductsFromCategory } from '../services/Producto';
import ItemListContainer from '../components/ItemListContainer';

const Category = () => {

  const [products, setProducts] = useState([])
  const { id } = useParams();
  const [setLoading] = useOutletContext();


  useEffect(() => {
    setLoading(true)

    if (typeof id !== 'undefined') {    
        getProductsFromCategory("MLA", id).then(items => {
                setProducts(items.results)
                setTimeout(() => {
                  setLoading(false)

                }, 3000)
            
          })          
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div>     
      <ItemListContainer products={products} />
    </div>
  );
}

export default Category;