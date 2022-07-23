import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Slider from './components/fixedSlider/slider.jsx';
import Services from './components/services/services.jsx';
import ProductsCards from './components/productsCards/productsCards.jsx';
import AboutUs from './components/about-us/aboutUs.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Services />
      <ProductsCards />
      <AboutUs />
    </div>
  );
}

export default App;
