import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getCategories } from '../services/Producto';
import Loading from '../components/Load';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Layout = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getDocs(collection(db, "categorias"))
        .then(docs => {
            let preCategories = []
            docs.forEach(doc => {
                preCategories.push({id: doc.id, ...doc.data()})
            })
            setCategories(preCategories)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);  

    return(
        <div className="App">
            <NavBar categories={categories} />
            <Outlet context={[setLoading]} />
            {loading ? <Loading /> : null}             

        </div>
    )
}

export default Layout;