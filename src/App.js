import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Offers from './Components/Offers'
import Book from './Components/Book'
import About from './Components/About'
import ImageSlider from './Components/ImageSlider'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Offers />
      <Book />
      <About />
      <ImageSlider />
    </div>
  );
}

export default App;
