import Hero from "./components/Hero";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import Venue from "./components/Venue";

function App() {
  return (
    <>
      <MusicPlayer />
      <Hero />
      <Events />
      <Gallery />
      <Venue />
      <RSVP />
      <Footer />
    </>
  );
}

export default App;