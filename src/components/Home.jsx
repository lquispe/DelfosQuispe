import { useState, useEffect } from 'react';
import { getProductsFromCategory } from '../services/Producto';
import ItemListContainer from './ItemListContainer';
import { useParams, useOutletContext } from 'react-router-dom';
import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';





const Home = () => {
  const [products, setProducts] = useState([])
  const { id } = useParams();
  const [setLoading] = useOutletContext();


  


  useEffect(() => {

    const getFromFirebase = async () => {
      const q = query(collection(db, "items"));
      // Si no quiero filtrar los datos, solo hago un getDocs a colleciton(db, "items")
      const snapshot = await getDocs(q)

      const allMesagges = []
      snapshot.forEach(doc => {
          const message = {
            ...doc.data(),
            id: doc.id
          }
          allMesagges.push(message)     
        
      });
      setProducts(allMesagges);


     

      /// con promises
      // getDocs(q).then(docs => console.log(docs.data()))

    }

    getFromFirebase()

  }, []);





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
