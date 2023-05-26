import "./App.css";
import SideBar from "./sidebar";
import Main from "./main";
import Productos from "./Productos";

function App() {
    return (
        <div className="flex">
            <SideBar />
           {/* <Main/>*/}
           <Productos/>
        </div>
    );
}

export default App;
