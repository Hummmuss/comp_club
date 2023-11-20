import './App.css'
import ComputersPricing from "./components/computers pricing/ComputersPricing.jsx";
import Header from "./components/header/Header.jsx";
import PSPricing from "./components/ps pricing/PSPricing.jsx";
import PSGames from "./components/ps games/PSGames.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Booking from "./components/booking/Booking.jsx";
import Footer from "./components/footer/Footer.jsx";


function App() {
  return (
      <div>
        <Header/>
        <ComputersPricing/>
        <PSPricing/>
        <PSGames/>
        <Gallery/>
        <Booking/>
        <Footer/>
      </div>
  );
}

export default App;
