import { Routes, Route, } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";


import Header from "./Header";
import About from "./About";

function App() {
  return (
    <div className="app">
      <Header />

    <Routes>
      <Route path="/" element={<Home title="Welcome to Red30 Tech"/>}/>
      <Route path="categories" element={<Categories/>}/>
      <Route path="about" element={<About/>}/>
    </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
