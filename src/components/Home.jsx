import { useState, useEffect, useContext,useMemo } from 'react';
import { getProductsFromCategory } from '../services/Producto';
import ItemListContainer from './ItemListContainer';
import { useParams, useOutletContext } from 'react-router-dom';
import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import SearchContainer from './SearchContainer';
import { CartContext } from '../context/CartContex';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';




const options = {
  loop: true,
  margin: 10,
  autoplayTimeout: 4000,
  lazyLoad: true,
  dots: false,


};


const Home = () => {
  const [products, setProducts] = useState([])
  const { id } = useParams();
  const [setLoading] = useOutletContext();
  const { search } = useContext(CartContext);

  const options = {
    loop: true,
    margin: 10,
    autoplayTimeout: 4000,
    lazyLoad: true,
    dots: false,

  
  };





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


  const books = useMemo(() => {

    if (!search) {
      return products;

    }
    return products.filter(({ title }) => title.toLowerCase().indexOf(search) > -1);
  }, [search, []])








  return (
    <>
    <div>
    <OwlCarousel items={1} loop="true" id="owldemo" autoplay="true" className="owl-carousel owl-theme  carousel"  >
      <div className="item"><img src="https://firebasestorage.googleapis.com/v0/b/amigos-6e55f.appspot.com/o/items%2Fl0oyse20?alt=media&token=91f823d7-83f5-4911-ab0d-8c490f6e459e" style={{height:"50vh"}}></img></div>
      <div className="item"><img src="https://firebasestorage.googleapis.com/v0/b/amigos-6e55f.appspot.com/o/items%2Fl0oyy3f4?alt=media&token=34d3fb4b-65a2-4b2f-919c-9fa8b89239da" style={{height:"50vh"}}></img></div>
      

    </OwlCarousel>


    </div>
      <div>
        <section className="categ_sec">
          <ItemListContainer products={books} />

        </section>
      </div>

    </>
  );
}

export default Home;
