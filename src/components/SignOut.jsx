import { auth } from "../firebase";

const SigOut = () => {
    
    return auth.currentUser &&(
        
           < button onClick={()=>auth.SigOut}></button>

    )
}
export default SigOut;