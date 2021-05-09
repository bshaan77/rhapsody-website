import "./App.css";
import Routes from "./Routes";
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <>
      <AppNavbar />
      <Routes className="py-10"/>
    </>
  );
}

export default App;
