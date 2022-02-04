import { useState ,useEffect} from "react";
import { getProductDetail, getProductDescription } from '../services/Producto';
import ItemDetail from './ItemDetail';


const ItemDetailContainer=(idproduct)=>{

    const [product, setProduct] = useState(null);
    console.log(idproduct);

    useEffect(() => {
        let mounted = true
        Promise.all([ getProductDetail("MLA822750513"), getProductDescription("MLA822750513") ])
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
    }, [idproduct]);

    return (
        <div className="item-detail-container">
            {product ? <ItemDetail product={product} />  : null }
        </div>
    )




}
export default ItemDetailContainer;