import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import PriceList from "./Pages/PriceList/PriceList";
import MasterPlan from "./Pages/MasterPlan/MasterPlan";
import FloorPlan from "./Pages/FloorPlan/FloorPlan";
import Location from "./Pages/Location/Location";
import SiteVisit from "./Pages/SiteVisit/SiteVisit";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";

function App() {

  const title = "Godrej Jardinia Sector 146 Noida | Godrej Jardinia Noida Price"
  const description = "Godrej Jardinia, New Launch pinnacle of ultra-luxury residential projects in Sector 146 Noida. Jardinia is an exquisite residential project steeped in the captivating allure of European aesthetics."

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
          <Route path="/" exact element={<Home title={"Godrej Jardinia Sector 146 Noida | Godrej Jardinia Noida Price"} descriptions={description} />} />
          <Route path="/gallery" exact element={<Gallery title={"Gallery | Sample Flat - Godrej Jardinia"} descriptions={"Godrej Jardinia Gallery – You can have some glimpse of Sample Flats ready at site, a have an idea how your residence would be look like. "} />} />
          <Route path="/price-list" exact element={<PriceList title={"Price List, Payment Plan - Godrej Jardinia "} descriptions={" Godrej Jardinia price list and payment plan is available here, 4 BHK price starts from 4.91 Cr*."} />} />
          <Route path="/master-plan" exact element={<MasterPlan title={"Master Plan - Godrej Jardinia"} descriptions={"Godrej Jardinia Master plan is abailable here, view 3/4 BHK Ultra Luxury Apartments in Godrej Jardinia in Noida Sector 146 "} />} />
          <Route path="/floor-plan" exact element={<FloorPlan title={"Floor Plans - Godrej Jardinia"} descriptions={"Godrej Jardinia Floor Plans – View the Premium 3 / 4 BHK Residence floor plan here."} />} />
          <Route path="/location" exact element={<Location title={"Location Map - Godrej Jardinia "} descriptions={"Godrej Jardinia location Map – Project is being developed in Sector 146 Noida on Expressway."} />} />
          <Route path="/site-visit" exact element={<SiteVisit title={"Site Visit - Godrej Jardinia"} descriptions={"For Site Visit in Godrej Jardinia – simply make a request and book your appointment to view the Sample flat, ready at site."} />} />
          <Route path="/disclaimer" exact element={<Disclaimer title={"Disclaimer - Godrej Jardinia "} descriptions={description} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
