//import axios from "axios";
import { useContext } from 'react';
import { userContext } from '../App';
import './home.css';



export default function Home() {
    
    const [user, setUser] = useContext(userContext);
    console.log(user)
    return (
        
        <>
            
            <div className="img_contanier">
            <h1>Pi to A 1000 Places</h1>

                <h2>World's Best Pizzeria</h2>

            

            <button className="btn btn-primary">Sign In</button>
            <></>
            <></>
            <></>
            <h4>Words words and more words</h4>
            </div>
        </>
    );
}
