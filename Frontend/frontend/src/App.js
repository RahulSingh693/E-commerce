import "./App.css";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routes/CustomerRoutes";

function App() {
  return (
    <div className='m-0 p-0 box-border'>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
