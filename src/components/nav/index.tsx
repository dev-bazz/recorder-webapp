import "./style.scss";
import logo from "./assets/helpOutDesktopLogo.png";
import profile from "./assets/profile.png";
import { Link } from "react-router-dom";

export function Nav({ dash = false }: { dash?: boolean }) {
	if (dash) {
		return (
			<nav>
				<div className="container nav">
					<div className="logo">
						<img
							src={logo}
							alt=""
						/>
					</div>
					<Link to={"/"}>
						<img
							src={profile}
							alt=""
						/>
					</Link>{" "}
				</div>
			</nav>
		);
	}

	return (
		<nav>
			<div className="container nav">
				<div className="logo">
					<img
						src={logo}
						alt=""
					/>
				</div>
				<ul>
					<li>
						<a href="#f">Features</a>
					</li>
					<li>
						<a href="#h">How It Works</a>
					</li>
				</ul>
				<button>
					<Link to={"getStarted"}>Get Started</Link>{" "}
				</button>
			</div>
		</nav>
	);
}
