import Topbar from "./components/topbar/Topbar";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Write />
    </div>
  );
}

export default App;
