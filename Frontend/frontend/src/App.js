import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Pages/Checkout/Checkout";
// import CartPage from "./Pages/Cart/CartPage";
// import { Login } from "./Components/Login/Login";
// import Signup from "./Components/Signup/Signup";
// import HomePage from "./Pages/Home/HomePage";
// import ProductPage from "./Pages/Product/ProductPage";
// import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <div className="w-full">
        <Navigation />
        <div>
          {/* <Signup /> */}
          {/* <Login /> */}
          {/* <HomePage /> */}
          {/* <ProductPage /> */}
          {/* <ProductDetails /> */}
          {/* <CartPage /> */}
          <Checkout />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
