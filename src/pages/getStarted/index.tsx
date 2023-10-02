import "./style.scss";
import logo from "./assets/helpOutDesktopLogo.png";
import { Link } from "react-router-dom";
export function GetStarted() {
	return (
		<div className="getStarted">
			<nav>
				<div className=" container logo">
					<Link to="/">
						<img
							src={logo}
							alt=" HelpMeOut"
						/>
					</Link>
				</div>
			</nav>

			<main>
				<header>
					<h1>Log in or Sign up</h1>
					<p>
						Join millions of others in sharing successful moves on
						HelpMeOut.
					</p>
				</header>
				<div className="login">
					<div className="social">
						<Link
							to={"/dashboard"}
							className="">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24">
									<path
										fill="#4285F4"
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.255h5.92a5.06 5.06 0 01-2.195 3.32v2.76h3.555c2.08-1.915 3.28-4.735 3.28-8.085z"></path>
									<path
										fill="#34A853"
										d="M12 23c2.97 0 5.46-.985 7.28-2.665l-3.555-2.76c-.985.66-2.245 1.05-3.725 1.05-2.865 0-5.29-1.935-6.155-4.535H2.17v2.85A10.996 10.996 0 0012 23z"></path>
									<path
										fill="#FBBC05"
										d="M5.845 14.089a6.612 6.612 0 01-.345-2.09c0-.725.125-1.43.345-2.09v-2.85H2.17A10.996 10.996 0 001 11.999c0 1.775.425 3.455 1.17 4.94l3.675-2.85z"></path>
									<path
										fill="#EA4335"
										d="M12 5.375c1.615 0 3.065.555 4.205 1.645l3.155-3.155C17.455 2.09 14.965 1 12 1 7.7 1 3.98 3.465 2.17 7.06l3.675 2.85C6.71 7.31 9.135 5.375 12 5.375z"></path>
								</svg>
							</span>
							<span>Continue with Google</span>
						</Link>
					</div>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="439"
					height="25"
					fill="none"
					viewBox="0 0 439 25">
					<path
						stroke="#B9C2C8"
						strokeLinecap="round"
						d="M.5 12.5h200"></path>
					<path
						fill="#B9C2C8"
						d="M216.716 18.154c-.716 0-1.341-.164-1.874-.492a3.316 3.316 0 01-1.243-1.377c-.295-.59-.443-1.28-.443-2.068 0-.793.148-1.485.443-2.079a3.31 3.31 0 011.243-1.382c.533-.328 1.158-.492 1.874-.492.716 0 1.341.164 1.874.492a3.31 3.31 0 011.243 1.383c.295.593.443 1.286.443 2.078 0 .788-.148 1.478-.443 2.068a3.316 3.316 0 01-1.243 1.377c-.533.328-1.158.492-1.874.492zm.005-1.248c.464 0 .848-.122 1.153-.368.305-.245.531-.571.676-.98.15-.407.224-.856.224-1.346a3.86 3.86 0 00-.224-1.343 2.18 2.18 0 00-.676-.989c-.305-.249-.689-.373-1.153-.373-.467 0-.855.124-1.163.373a2.23 2.23 0 00-.682.99 3.98 3.98 0 00-.218 1.342c0 .49.073.94.218 1.347.15.408.377.734.682.98.308.245.696.367 1.163.367zM222.075 18v-7.636h1.437v1.213h.079c.139-.411.385-.734.736-.97a2.107 2.107 0 011.203-.358 6.372 6.372 0 01.631.035v1.422a2.61 2.61 0 00-.318-.055 3.031 3.031 0 00-.457-.034c-.351 0-.665.074-.94.223a1.666 1.666 0 00-.885 1.497V18h-1.486z"></path>
					<path
						stroke="#B9C2C8"
						strokeLinecap="round"
						d="M238.5 12.5h200"></path>
				</svg>
			</main>
		</div>
	);
}
