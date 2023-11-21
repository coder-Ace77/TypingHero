import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Logo from "./logo.js";

import Header from "./header.js";
import TextArea from "./textarea.js";
import "./font.css";
import Footer from './footer.js'


function App() {
  return (
    <div className="App main">
      <Header />
      <TextArea />
      <div>Keyboard</div>
      <Footer/>
    </div>
  );
}

export default App;
