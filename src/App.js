import Activities from "./Activities";
import Booking from "./Booking";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Hero from "./Hero";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
