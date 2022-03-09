
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';
import { useContext } from 'react';

import { React, useState ,useEffect} from 'react';
import { UsrContext } from '../context/UsrContext';




const Signin = () => {
    const [isUserSignedIn, setIsUserSignedIn] = useState(true);
    const { onAdd } = useContext(UsrContext);

    const [user, setUser] = useState(null) 



    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
            
                console.log("este es el usuario"+user)
        })
            .catch(error => {

                console.log(error.message)
            }
            )
           
    }


    useEffect(() => {
        auth.onAuthStateChanged(user => {
          setUser(user);
          
        })
      }, [])
    

   

    const signout=()=>{
        auth.signOut()
    }


    if (user) {
        return (

            <NavDropdown title={<><Image width={22} src={user.photoURL} fluid={true} roundedCircle={true} />{user.displayName}</>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Configuracion</NavDropdown.Item>
                <NavDropdown.Item href="#">Perfil</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={signout}>Salir</NavDropdown.Item>
            </NavDropdown>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         



        )
    } else {
        return (
            <div style={{ position: "relative", marginLeft: 6 }}>
                < button onClick={singInWithGoogle}>Login</button>
            </div>




        )

    }
}
export default Signin;