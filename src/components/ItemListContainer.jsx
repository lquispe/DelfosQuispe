import React from 'react';
import ItemCount from './ItemCount';


const ItemListContainer =({greeting})=>{
 return(
     <>
     <span className="text-titulo">{greeting}</span>
     <ItemCount></ItemCount>
     </>
 );
}
export default ItemListContainer