import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from "./Components/TopMenu.js";
import Product from "./pages/Products";

import { BrowserRouter as Router, Route } from "react-router-dom";

import CartProvider from "./contexts/Cart";

const Home = () => <h1>Home</h1>;

export default function App() {
  return (
    <CartProvider>
      <Router>
        <TopMenu />
        <div className="App">
          <Route path="/home" component={Home} />
          <Route path="/products" component={Product} />
        </div>
      </Router>
    </CartProvider>
  );
}
