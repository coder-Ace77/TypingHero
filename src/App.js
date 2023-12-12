import "./css/App.css";
import Header from "./header/header.js";
import TextArea from "./textarea/textarea.js";
import "./css/font.css";
import Footer from './footer/footer.js'


function App() {
  return (
    <div className="App main">
      <Header />
      <TextArea />
      <div>Keyboard</div>
      <Footer />
    </div>
  );
}

export default App;
