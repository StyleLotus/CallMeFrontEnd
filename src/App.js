import "./App.css";
import SideBar from "./sidebar";
import Main from "./main";
import Productos from "./Productos";
import Store from "./Store";
import SignUpScreen from "./SignUpScreen";
import LoginScreen from "./LoginScreen";

function App() {
	return (
		<div className="flex">
			{/* <SideBar /> */}
			{/* <Main/>*/}
			{/* <Productos /> */}
			{/*<Store />*/}
			<SignUpScreen />
			<LoginScreen />
		</div>
	);
}

export default App;
