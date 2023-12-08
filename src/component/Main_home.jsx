import Navigation from './Navigation';
import Main_hero from './Main_hero';
import Main_body from './Main_body';
import Footer from "./Footer";



export default function Main_home() {
  return (
    <div className="App">
      <Navigation />
      <Main_hero />
      <Main_body />
      <Footer />
    </div>

  );
}
