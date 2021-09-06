import "./App.css";
import About from "./components/about/About";
import Article from "./components/article/Article";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home.jsx";
import Portfolio from "./components/portfolio/Portfolio";
import Stack from "./components/stack/Stack.jsx";
function App() {
  return (
    <>
      <Home />
      <Stack />
      <About />
      <Portfolio />
      <Article />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
