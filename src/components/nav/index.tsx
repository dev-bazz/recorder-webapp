import "./style.scss";
import logo from "./assets/helpOutDesktopLogo.png";

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
					<li>Features</li>
					<li>How It Works</li>
				</ul>
				<button>Get Started</button>
			</div>
		</nav>
	);
}
