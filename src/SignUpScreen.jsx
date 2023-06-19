import React from "react";
import img from "./Sample.png";
import { AiOutlineUser, AiOutlineMail, AiFillPhone, AiFillPicture, AiOutlineIdcard } from "react-icons/ai";
import { MdPassword, Md123 } from "react-icons/md";

const SignUpScreen = () => {
	const inputStyles = "p-2 my-2 w w-full rounded pl-10 shadow-2xl";

	return (
		<div className="center mx-auto mt-3 border-2 w-4/12 px-5 h-auto border-blue-400 bg-blue-500 shadow-2xl rounded-3xl">
			<div className="p-2">
				<div className="border-2 border-black rounded-full w-20 h-20 mx-auto ">
					<img className="w-20 h-20" src={img} alt="SignUpImagen" />
				</div>
				<div className="w-full">
					<div className="relative">
						<input className={inputStyles} type="text" placeholder="Create your Username" name="" id="" />
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiOutlineUser />
						</span>
					</div>
					<div className="relative">
						<input className={inputStyles} type="text" placeholder="Insert your E-mail" name="" id="" />
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiOutlineMail />
						</span>
					</div>
					<div className="relative">
						<input className={inputStyles} type="text" placeholder="Create a New Password" name="" id="" />
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<MdPassword />
						</span>
					</div>
					<div className="relative">
						<input
							className={inputStyles}
							type="text"
							placeholder="Repeat your new Password"
							name=""
							id=""
						/>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<Md123 />
						</span>
					</div>
					<div className="relative">
						<input
							className={inputStyles}
							type="text"
							placeholder="Insert your Phone Number"
							name=""
							id=""
						/>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiFillPhone />
						</span>
					</div>
					<div className="relative">
						<input
							className={inputStyles}
							type="text"
							placeholder="Imagen Insert Your User Image"
							name=""
							id=""
						/>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiFillPicture />
						</span>
					</div>
					<div className="relative">
						<input
							className={inputStyles}
							type="text"
							placeholder="Select the Type Of Document"
							name=""
							id=""
						/>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiOutlineUser />
						</span>
					</div>
					<div className="relative">
						<input className={inputStyles} type="text" placeholder="Document Number" name="" id="" />
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiOutlineIdcard />
						</span>
					</div>

					<div className="flex justify-center items-center ">
						<input
							className="text-white font-extrabold bg-blue-900 p-3 m-2 rounded hover:bg-blue-700"
							type="submit"
							value="REGISTER"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpScreen;
