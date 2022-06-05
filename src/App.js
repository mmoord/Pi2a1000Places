import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Nav from './components/navigation/navigation';
import ViewMenu from "./components/menu/ViewMenu";
import Order from "./components/order/Order";
import CustomerSignin from "./components/customer/SignIn";
import SignUp from "./components/customer/SignUp";
import CustomerSignOut from "./components/customer/SignOut";

//import Payments from "/Users/tenycemelrose/my-app/pi/src/components/creditcard/Payments.js"
export const userContext = createContext();

function App() {
    const [user, setUser] = useState({ username: "Guest" });
  // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
  return (
      <>
          <BrowserRouter>
          <userContext.Provider value={[user, setUser]}/>
              <Nav />
              <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Order" element={<Order />} />
                    <Route path="/menu" element={<ViewMenu />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="SignIn" element={<CustomerSignin />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="SignOut" element={<CustomerSignOut></CustomerSignOut>} />
              </Routes>
          </BrowserRouter>
          {/* <Payments/> */}
      </>
  );
}


export default App;