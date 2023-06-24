import React, { useState } from "react";
import img from "./newUser.png";
import { AiOutlineUser, AiOutlineMail, AiFillPhone, AiFillPicture, AiOutlineIdcard } from "react-icons/ai";
import { MdPassword, Md123 } from "react-icons/md";
import md5 from "md5";
import axios from "axios";

const SignUpScreen = () => {
	const linkA = "https:/vmubj.localto.net/tipos-documento";
	const inputStyles = "p-2 my-2 w w-full rounded pl-10 shadow-2xl";
	const [data, setData] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [userImage, setUserImage] = useState(null);
	const [typeOfDocument, setTypeOfDocument] = useState("");
	const [documentNumber, setDocumentNumber] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const fetchData = () => {
		axios
			.get(linkA, { headers: "localtonet-skip-warning" })
			.then((response) => {
				setData(response.data);
				console.log(data);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	};

	const handleUserName = (event) => {
		setUserName(event.target.value);
	};

	const handleEmail = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleConfirmPasswordChange = (event) => {
		setConfirmPassword(event.target.value);
	};

	const handlePhoneNumber = (event) => {
		setPhoneNumber(event.target.value);
	};

	const handleUserImage = (event) => {
		setUserImage(event.target.files[0]);
	};

	const handleTypeOfDocument = (event) => {
		setTypeOfDocument(event.target.value);
	};

	const handleDocumentNumber = (event) => {
		setDocumentNumber(event.target.value);
	};

	const handleLoginFormSubmit = (event) => {
		if (
			password === confirmPassword &&
			email.includes("@") &&
			email.includes(".com") &&
			userImage &&
			!isNaN(phoneNumber)
		) {
			event.preventDefault();
			console.log(userImage);
			const hashedPassword = md5(password).toString();
			const registerData = {
				NombreUsuario: userName,
				Email: email,
				Password: hashedPassword,
				Phone: phoneNumber,
				Img: userImage,
				Documento: documentNumber,
				TipoDocumento: typeOfDocument,
			};
			fetchData();
		} else {
			alert("Alguno de los datos no es correcto");
		}
	};

	return (
		<div className="center mx-auto mt-3 border-2 w-4/12 px-5 h-auto border-blue-400 bg-blue-500 shadow-2xl rounded-3xl">
			<div className="p-2">
				<div className="border-2 border-black rounded-full w-20 h-20 mx-auto ">
					<img className="w-16 h-16 m-auto mt-1 mr-1" src={img} alt="SignUpImagen" />
				</div>
				<div className="w-full">
					<div className="relative">
						<input
							className={inputStyles}
							type="text"
							placeholder="Create your Username"
							name=""
							id=""
							onChange={handleUserName}
						/>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiOutlineUser />
						</span>
					</div>
					<div className="relative">
						<input
							className={inputStyles}
							type="text"
							placeholder="Insert your E-mail"
							name=""
							id=""
							onChange={handleEmail}
						/>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiOutlineMail />
						</span>
					</div>
					<div className="relative">
						<input
							className={inputStyles}
							type="password"
							placeholder="Create a New Password"
							name=""
							id=""
							onChange={handlePasswordChange}
						/>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<MdPassword />
						</span>
					</div>
					<div className="relative">
						<input
							className={inputStyles}
							type="password"
							placeholder="Repeat your new Password"
							name=""
							id=""
							onChange={handleConfirmPasswordChange}
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
							onChange={handlePhoneNumber}
						/>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiFillPhone />
						</span>
					</div>
					<div className="relative">
						<input
							className={`bg-white ${inputStyles}`}
							type="file"
							placeholder="Imagen Insert Your User Image"
							name=""
							id=""
							onChange={handleUserImage}
						/>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiFillPicture />
						</span>
					</div>
					<div className=" relative">
						<select
							className={inputStyles}
							placeholder="Select the Type Of Document"
							name=""
							id=""
							onChange={handleTypeOfDocument}
						>
							<option value="1">Cédula de identidad</option>
							<option value="2">Pasaporte</option>
							<option value="3">Documento nacional de identidad</option>
							<option value="4">T arjeta de residencia</option>
						</select>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiOutlineIdcard />
						</span>
					</div>
					<div className="relative">
						<input
							className={inputStyles}
							type="text"
							placeholder="Document Number"
							name=""
							id=""
							onChange={handleDocumentNumber}
						/>
						<span className="absolute top-1/2 transform -translate-y-2 left-3">
							<AiOutlineIdcard />
						</span>
					</div>

					<div className="flex justify-center items-center ">
						<input
							className="text-white font-extrabold bg-blue-900 p-3 m-2 rounded hover:bg-blue-700"
							type="submit"
							value="REGISTER"
							onClick={handleLoginFormSubmit}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpScreen;
