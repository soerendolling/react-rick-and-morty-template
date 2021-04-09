import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <Router>
      <div className="body-layout">
        <Header />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
