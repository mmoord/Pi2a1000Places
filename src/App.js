import { BrowserRouter, Route, Routes } from "react-router-dom";


import Order from "./components/order/Order";
import Nav from './components/navigation/navigation';

function App() {
  // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
  return (
      <>
          <BrowserRouter>
              <Nav />
              <Routes>
                  <Route path="order" element={<Order />} />
                  {/* <Route path="register" element={<TrainerRegister />} />
                  <Route exact path="" element={<TrainerWelcome />} />
                  <Route path="pokemon" element={<PokemonWelcome />} />
                  <Route path="dashboard" element={<TrainerDashboard></TrainerDashboard>} /> */}
              </Routes>
          </BrowserRouter>
      </>
  );
}
export default App;