import About from "./components/About";
import BackArrow from "./components/BackArrow";
import Booking from "./components/Booking";
import Carousel from "./components/Carousel";
import Fact from "./components/Fact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OurService from "./components/OurService";
import Service from "./components/Service";
import Spinner from "./components/Spinner";
import Team from "./components/Team";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div>
        <Spinner />
        <Topbar />
        <Navbar />
        <Carousel />
        <Service />
        <About />
        <Fact />
        <OurService />
        <Booking />
        <Team />
        <Footer />
        <BackArrow />
    </div>
  );
}

export default App;
