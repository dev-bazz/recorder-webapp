import "./style.scss";
import logo from "./assets/helpOutDesktopLogo.png";
import { Link } from "react-router-dom";

export function Nav() {
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
