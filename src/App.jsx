import { Routes ,Route } from "react-router-dom";

import Header from "./components/commonComp/Header";
import Footer from "./components/commonComp/Footer";

import Home from "./pages/Home";
import Game from "./pages/soccer/Game";
import Player from "./pages/soccer/Player";
import Shop from "./pages/shop/Shop";
import Login from "./pages/user/Login";

function App() {
  return (
    <>
      <Header/>

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/game" element={<Game/>} />
          <Route path="/player" element={<Player/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>

      <Footer/>
    </>
  )
}
export default App;