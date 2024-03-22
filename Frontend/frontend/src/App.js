import "./App.css";
import Footer from "./Components/Footer/Footer";
import { Login } from "./Components/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import Signup from "./Components/Signup/Signup";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/Product/ProductPage";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

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
          <ProductDetails />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;