import React, { useState } from "react";
import img from "./Sample.png";
import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import md5 from "md5";

const LoginScreen = () => {
	const inputStyles = "p-2 my-2 w w-full rounded pl-10 shadow-2xl";
	const [password, setPassword] = useState("");

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleLoginFormSubmit = (event) => {
		event.preventDefault();
		const hashedPassword = md5(password).toString();
		console.log(hashedPassword);
	};

	return (
		<div className="center m-auto border-2 w-4/12 px-5 h-3/4 border-blue-400 bg-blue-500 shadow-2xl rounded-3xl">
			<div className="p-2">
				<div className="border-2 border-black rounded-full w-20 h-20 mx-auto ">
					<img className="w-20 h-20" src={img} alt="SignUpImagen" />
				</div>
				<div className="w-full">
					<div className="relative">
						<input className={inputStyles} type="text" placeholder="Insert your UserName" name="" id="" />
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiOutlineUser />
						</span>
					</div>
					<div className="relative">
						<input
							className={inputStyles}
							type="password"
							placeholder="Insert your Password"
							onChange={handlePasswordChange}
							name=""
							id=""
						/>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<MdPassword />
						</span>
					</div>

					<div className="flex justify-center items-center ">
						<input
							className="text-white font-extrabold bg-blue-900 p-3 m-2 rounded hover:bg-blue-700"
							type="submit"
							value="LOGIN"
							onClick={handleLoginFormSubmit}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
