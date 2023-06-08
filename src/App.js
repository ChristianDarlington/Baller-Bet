import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Offers from './Components/Offers'
import Book from './Components/Book'
import About from './Components/About'
import ImageSlider from './Components/ImageSlider'
import Footer from './Components/Footer'
import Modal from './Components/Modal'



function App() {

  

  return (
    <div className="App">
      <Navbar />
      <Modal/>
      <Hero />
      <Offers />
      <Book />
      <About />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
