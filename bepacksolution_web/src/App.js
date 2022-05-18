import "./App.css";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Nosotros from "./Components/Nosotros";
import Product from "./Components/Product";

function App() {
      return (
            <div className="App">
                  <Navbar />
                  <Main />
                  <Nosotros />
                  <Product />
                  <Footer />
            </div>
      );
}

export default App;
