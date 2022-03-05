import {auth} from '../firebase'; 

const UserLoggedIn=() =>{

    const {displayName,photoUrl}=auth.currentUser;
    return(
        
            {displayName}
        
    )
    }
    export default UserLoggedIn;