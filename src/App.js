import Topbar from "./components/topbar/Topbar";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Single from "./pages/single/Single";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Single />
    </div>
  );
}

export default App;
