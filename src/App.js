import "./App.css";
import SideBar from "./sidebar";
import Main from "./main";
import Productos from "./Productos";
import Store from "./Store";
import SignUpScreen from "./SignUpScreen";

function App() {
	return (
		<div className="flex">
			<SideBar />
			{/* <Main/>*/}
			{/*<Productos />*/}
			{/*<Store />*/}
			<SignUpScreen></SignUpScreen>
		</div>
	);
}

export default App;
