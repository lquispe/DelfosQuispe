import { useState ,useEffect} from "react";
import { getProductDetail, getProductDescription } from '../services/Producto';
import ItemDetail from './ItemDetail';
import  {useParams} from'react-router-dom';


const ItemDetailContainer=()=>{
    const {id}=useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        let mounted = true
        Promise.all([ getProductDetail(id), getProductDescription(id )])
        .then(results => {
            let item = results[0]
            item.description = results[1].plain_text
            if (mounted) {
                setProduct(item)
                setTimeout(() => {
                }, 3000)
            }
        })
        return () => mounted = false
    }, [id]);

    return (
        <div className="item-detail-container">
            {product ? <ItemDetail product={product} />  : null }
        </div>
    )




}
export default ItemDetailContainer;