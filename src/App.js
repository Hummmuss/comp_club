import styles from './App.css'
import ComputersPricing from "./components/computers pricing/ComputersPricing.jsx";
// import Header from "./components/header/Head.jsx";
import PSPricing from "./components/ps games/ps pricing/PSPricing.jsx";
import PSGames from "./components/ps games/PSGames.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Booking from "./components/booking/Booking.jsx";
import Footer from "./components/footer/Footer.jsx";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import Head from "./components/header/Head";
import Main from "./components/main/Main";
import PSVip from "./components/ps games/ps pricing/psvip/PSVip";
import Bootcamp from "./components/computers pricing/bootcamp/Bootcamp";
function App() {
  return (
      <Layout className={styles.app_style}>
          <Head/>
          <Content>
              <Main/>
              <ComputersPricing/>
              <Bootcamp/>
              <PSPricing/>
              <PSVip/>
              <PSGames/>
              <Gallery/>
              <Booking/>
          </Content>
          <Footer/>
      </Layout>
  );
}

export default App;
