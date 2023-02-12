import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
