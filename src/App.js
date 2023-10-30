import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sports from "./pages/Sports";
import Navbar from "./components/Navbar";


function App() {
 
  return (
    <div className="App">
     <BrowserRouter>
        <div>
          <Navbar />
          <div className="mt-3 mx-2">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/sports" element={<Sports />} />
              </Routes>   
          </div>
        </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
