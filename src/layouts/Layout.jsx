import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getCategories } from '../services/Producto';
import Loading from '../components/Load';

const Layout = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategories("MLA").then(results => {
            setCategories(results)
        
      })
    }, [])

    return(
        <div className="App">
            <NavBar categories={categories} />
            <Outlet context={[setLoading]} />
            {loading ? <Loading /> : null}             

        </div>
    )
}

export default Layout;