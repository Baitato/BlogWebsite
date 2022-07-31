import "./App.css";
import Particle from "./components/Particle";
import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Particle />
      <TopBar />
      {/* <Home /> */}
      <Blogs />
    </div>
  );
}

export default App;
