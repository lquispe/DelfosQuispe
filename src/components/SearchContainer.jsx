import reactDom from 'react-dom';
import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';


const Search = (products) => {


    

    return (


        <section className="categ_sec">
            <ItemListContainer products={products} />

        </section>

    )

}
export default Search;