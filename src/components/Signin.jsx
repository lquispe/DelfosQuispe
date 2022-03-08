
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';
import { useContext } from 'react';

import { React, useState } from 'react';
import { UsrContext } from '../context/UsrContext';




const Signin = () => {
    const [isUserSignedIn, setIsUserSignedIn] = useState(true);
    const { onAdd } = useContext(UsrContext);
    const { usuario } = useContext(UsrContext);




    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                onAdd(user.id)
                console.log(user)
        })
            .catch(error => {

                console.log(error.message)
            }
            )
    }

    auth.onAuthStateChanged((user) => {
        if (user) {
            return setIsUserSignedIn(true)
        }else{
       return setIsUserSignedIn(false)
        }
    })

    const signout=()=>{
        auth.signOut()
    }


    if (isUserSignedIn === true) {
        return (

            <NavDropdown title={<><Image width={22} src='https://nievesjesus.com/images/avatar-1.svg' fluid={true} roundedCircle={true} /> Jesus</>} id="basic-nav-dropdown">
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