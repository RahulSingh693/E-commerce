import "./App.css";
import { Login } from "./Components/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import Signup from "./Components/Signup/Signup";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <div className="w-full">
        <Navigation />
        <div>
          {/* <Signup /> */}
          {/* <Login /> */}
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
