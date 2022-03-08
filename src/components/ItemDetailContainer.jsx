import { useState ,useEffect} from "react";
import { getProductDetail, getProductDescription } from '../services/Producto';
import ItemDetail from './ItemDetail';
import  {useParams} from'react-router-dom';
import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';



const ItemDetailContainer=()=>{
    const {id}=useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        const getFromFirebase = async () => {
          // Si no quiero filtrar los datos, solo hago un getDocs a colleciton(db, "items")
    
          
    
    
          console.log("Obtener mis documentos usando getDoc, sirve para trer un unico registro")
          const docRef = doc(db, "items", id)
          const docSnapshot = await getDoc(docRef)
          console.log(db)
          console.log("pp"+docSnapshot.data())
          const message = {
            ...docSnapshot.data(),
            id: docSnapshot.id
          }
          setProduct(message);
          /// con promises
          // getDocs(q).then(docs => console.log(docs.data()))
    
        }
    
        getFromFirebase()
    
      }, []);


    return (
        <div className="item-detail-container">
            {product ? <ItemDetail product={product} />  : null }
        </div>
    )




}
export default ItemDetailContainer;