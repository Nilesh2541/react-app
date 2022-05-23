import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Component/Cart";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import store from "./Store/store";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
