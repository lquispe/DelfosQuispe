
import { useState, createContext } from "react";

import { signInWithPopup } from 'firebase/auth';
import {auth,googleProvider} from '../firebase'; 

export const UsrContext = createContext();

export const UsrProvider = ({ children }) => {
    const [usuario, setUsuario] = useState('')

        
        const singInWithGoogle = () =>{
            signInWithPopup(auth, googleProvider)
                .then(result => {
                   setUsuario( result.user);
                    console.log(usuario)
                })
                .catch(error => {
    
                    console.log(error.message)
                }
                )


    }

    const addUsr=(usr)=>{
        console.log("seteo el usuario"+usr)
        setUsuario(usr)
    }
    

    return (
        <UsrContext.Provider value={{ usuario,singInWithGoogle,addUsr}}>
            {children}
        </UsrContext.Provider>
    )

}