import logo from "./logo.svg";
import "./App.css";
import SideBar from "./sidebar";
import Main from "./main";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Main></Main>
    </div>
  );
}

export default App;
