import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";

function App() {

  // remove inspect and copy element
   useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
    };

    const handleSelect = (e) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('selectstart', handleSelect);
    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('selectstart', handleSelect);
    };
  }, []);

  return (
    <>
      <BrowserRouter>  
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home title={"GODREJ JARDINIA | GODREJ Sector 146 Noida | JARDINIA Noida"} descriptions={"Godrej Jardinia, a pinnacle of ultra-luxury living, is an exquisite residential project steeped in the captivating allure of European aesthetics."} />} />
          <Route path="/gallery-view" exact element={<Gallery title={"GODREJ JARDINIA | GODREJ Sector 146 Noida | JARDINIA Noida"} descriptions={"Godrej Jardinia, a pinnacle of ultra-luxury living, is an exquisite residential project steeped in the captivating allure of European aesthetics."} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
