import "./App.scss";
import Home from "./Pages/Home";
import Header from "./components/Header";
// import { books } from "./db/db";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
