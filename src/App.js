import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="w-full text-gray-100 bg-gray-100 font-mono">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
