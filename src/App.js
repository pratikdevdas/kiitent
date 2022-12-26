import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bottom from "./components/Bottom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Bottom />
    </div>
  );
}
