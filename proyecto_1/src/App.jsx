import "./App.css";
import Cabezera from "./Components/Cabezera";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

function App() {
    return (
        <div className="App">
            <Cabezera />
            <Navbar />
            <Hero />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
