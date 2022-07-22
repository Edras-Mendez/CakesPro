import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Slider from './components/fixedSlider/slider.jsx';
import Services from './components/services/services.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Services />
    </div>
  );
}

export default App;
