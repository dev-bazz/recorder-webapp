import { Nav } from "../../components";
import "./style.scss";
import heroIMG from "./assets/heroImage.png";
import videoRepo from "./assets/VideoRepository.png";
export function Home() {
	return (
		<div>
			<Nav />
			<section className="hero">
				<div className="content container">
					<div className=" text">
						<div className="">
							<h1>Show Them Don’t Just Tell</h1>
							<p>
								Help your friends and loved ones by creating and
								sending videos on how to get things done on a website.
							</p>
							<button className="btn">Install HelpMeOut</button>
						</div>
					</div>
					<div className="">
						<img src={heroIMG} />
					</div>
				</div>
			</section>
			<section className="features">
				<header>
					<h2>Features</h2>
					<p>Key Highlights of Our Extension</p>
				</header>
				<div className="container">
					<div className="">
						<div className="list">
							<span>ICON</span>
							<div className="">
								<h3>Simple Screen Recording</h3>
								<p>
									Effortless screen recording for everyone. Record with
									ease, no tech expertise required.
								</p>
							</div>
						</div>
						<div className="list">
							<span>ICON</span>
							<div className="">
								<h3>Simple Screen Recording</h3>
								<p>
									Effortless screen recording for everyone. Record with
									ease, no tech expertise required.
								</p>
							</div>
						</div>
						<div className="list">
							<span>ICON</span>
							<div className="">
								<h3>Simple Screen Recording</h3>
								<p>
									Effortless screen recording for everyone. Record with
									ease, no tech expertise required.
								</p>
							</div>
						</div>
					</div>
					<div className="">
						<img
							src={videoRepo}
							alt=""
						/>
					</div>
				</div>
			</section>
			<section className="mgLG">
				<header>
					<h2>How it works</h2>
				</header>
				<div className="">
					<div className="card">
						<div className="icon">Icon</div>
						<h3>Record Screen</h3>
						<p>
							Click the "Start Recording" button in our extension.
							choose which part of your screen to capture and who you
							want to send it to.
						</p>
					</div>
					<div className="card">
						<div className="icon">Icon</div>
						<h3>Record Screen</h3>
						<p>
							Click the "Start Recording" button in our extension.
							choose which part of your screen to capture and who you
							want to send it to.
						</p>
					</div>
					<div className="card">
						<div className="icon">Icon</div>
						<h3>Record Screen</h3>
						<p>
							Click the "Start Recording" button in our extension.
							choose which part of your screen to capture and who you
							want to send it to.
						</p>
					</div>
				</div>
			</section>

			<footer>
				<div className="container">
					<div className="logo">LOGO</div>
					<ul>
						<li>Menu</li>
						<li>Home</li>
						<li>Converter</li>
						<li>How it Works</li>
					</ul>
					<ul>
						<li>About us</li>
						<li>About</li>
						<li>Contact Us</li>
						<li>Privacy Policy</li>
					</ul>
					<ul>
						<li>Screen Record</li>
						<li>Browser Window</li>
						<li>Desktop</li>
						<li>Application</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}
