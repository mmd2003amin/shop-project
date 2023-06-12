import React, { useState } from "react";
import { Route, Routes , Navigate } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "../App/store";

//Components
import SignIn from "./Forms/SignIn";
import SignUp from "./Forms/SignUp";
import MainPage from "./mainPage/MainPage";
import Navbar from "./Navbar";
import Clothing from "./pages/Clothing";
import Digital from "./pages/Digital";
import Tool from "./pages/Tool";
import Health from "./pages/Health";
import Details from "./pages/Details";
import Beloved from "./saved/Beloved";
import Cart from "./saved/Cart";
import Menu from "./mainPage/Menu";
import NotFound from "./NotFound";

const App = () => {
  const [openMenu , setOpenMenu] = useState(false);
  
  return (
    <Provider store={store}>
      <div dir="rtl" className="bg-stone-100">
          <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}></Navbar>
          <Menu openMenu={openMenu}/>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/signIn" element={<SignIn/>}/>
              <Route path="/signUp" element={<SignUp/>}/>
              <Route path="/clothing" element={<Clothing/>}/>
              <Route path="/clothing/:id" element={<Details/>}/>
              <Route path="/digital" element={<Digital/>}/>
              <Route path="/digital/:id" element={<Details/>}/>
              <Route path="/tool" element={<Tool/>}/>
              <Route path="/tool/:id" element={<Details/>}/>
              <Route path="/health" element={<Health/>}/>
              <Route path="/health/:id" element={<Details/>}/>
              <Route path="/beLoved" element={<Beloved/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/notFound" element={<NotFound/>}/>
              <Route path="/*" element={<Navigate to="/notFound"/>}/>
          </Routes>
      </div>
    </Provider>
  );
}

export default App;