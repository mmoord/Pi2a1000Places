import { useNavigate } from "react-router-dom";

 export default function CustomerSignOut(){
    const navigate = useNavigate();



    async function logout(){

        try{
         const response = await fetch("http://localhost:8080/Pi2a1000Places/auth",{method: 'DELETE'})
         .then((response) => {
            if(response.ok){console.log("All Good")}else{throw new Error(response.status)}
          }
          )
         navigate("/home")
        }catch(error){
            console.error(error)
            }

    }
    
      return(
              <>
                <h4>Goodbye, please log out below.</h4>
                <button onClick={logout}>Logout</button>
            </>
    
    
      );



}