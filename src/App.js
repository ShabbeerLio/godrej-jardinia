import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Location from "./Pages/Location/Location";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import PriceList from "./Pages/PriceList/PriceList";
import MasterPlan from "./Pages/MasterPlan/MasterPlan";
import FloorPlan from "./Pages/FloorPlan/FloorPlan";
import SiteVisit from "./Pages/SiteVisit/SiteVisit";

function App() {

  // remove inspect and copy element
  //  useEffect(() => {
  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleSelect = (e) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   document.addEventListener('selectstart', handleSelect);
  //   document.addEventListener('contextmenu', handleRightClick);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleRightClick);
  //     document.removeEventListener('selectstart', handleSelect);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home title={"Godrej Jardinia | Sector 146 Noida"} descriptions={"Godrej Tropical Isle Sector 146 Noida is a premium upcoming residential project that offers spacious 3, 3.5, & 4 BHK residences starting at ₹2.23 crores onwards."} />} />
          <Route path="/gallery" exact element={<Gallery title={"Godrej Jardinia | Sector 146 Noida"} descriptions={"Godrej Tropical Isle Sector 146 Noida is a premium upcoming residential project that offers spacious 3, 3.5, & 4 BHK residences starting at ₹2.23 crores onwards."} />} />
          <Route path="/price-list" exact element={<PriceList title={"Godrej Jardinia | Sector 146 Noida"} descriptions={"Godrej Tropical Isle Sector 146 Noida is a premium upcoming residential project that offers spacious 3, 3.5, & 4 BHK residences starting at ₹2.23 crores onwards."} />} />
          <Route path="/master-plan" exact element={<MasterPlan title={"Godrej Jardinia | Sector 146 Noida"} descriptions={"Godrej Tropical Isle Sector 146 Noida is a premium upcoming residential project that offers spacious 3, 3.5, & 4 BHK residences starting at ₹2.23 crores onwards."} />} />
          <Route path="/floor-plan" exact element={<FloorPlan title={"Godrej Jardinia | Sector 146 Noida"} descriptions={"Godrej Tropical Isle Sector 146 Noida is a premium upcoming residential project that offers spacious 3, 3.5, & 4 BHK residences starting at ₹2.23 crores onwards."} />} />
          <Route path="/location" exact element={<Location title={"Godrej Jardinia | Sector 146 Noida"} descriptions={"Godrej Tropical Isle Sector 146 Noida is a premium upcoming residential project that offers spacious 3, 3.5, & 4 BHK residences starting at ₹2.23 crores onwards."} />} />
          <Route path="/site-visit" exact element={<SiteVisit title={"Godrej Jardinia | Sector 146 Noida"} descriptions={"Godrej Tropical Isle Sector 146 Noida is a premium upcoming residential project that offers spacious 3, 3.5, & 4 BHK residences starting at ₹2.23 crores onwards."} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
