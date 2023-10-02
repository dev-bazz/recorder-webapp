import { Nav } from "../../components";
import "./style.scss";
import heroIMG from "./assets/heroImage.png";
import videoRepo from "./assets/VideoRepository.png";
import simpleRecorder from "./assets/simpleRecorder.png";
import revisit from "./assets/revisit.png";
import easyShare from "./assets/easyShare.png";
import whiteLogo from "./assets/whiteLogo.png";

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
			<section
				id="f"
				className="features">
				<header>
					<h2>Features</h2>
					<p>Key Highlights of Our Extension</p>
				</header>
				<div className="container">
					<div className="listWrapper">
						<div className="list">
							<span>
								<img
									src={simpleRecorder}
									draggable={false}
								/>
							</span>
							<div className="">
								<h3>Simple Screen Recording</h3>
								<p>
									Effortless screen recording for everyone. Record with
									ease, no tech expertise required.
								</p>
							</div>
						</div>
						<div className="list">
							<span>
								<img
									src={easyShare}
									draggable={false}
								/>
							</span>
							<div className="">
								<h3>Easy-to-Share URL</h3>
								<p>
									Share your recordings instantly with a single link.
									No attachments, no downloads.
								</p>
							</div>
						</div>
						<div className="list">
							<span>
								<img
									src={revisit}
									draggable={false}
								/>
							</span>
							<div className="">
								<h3>Revisit Recordings</h3>
								<p>
									Access and review your past content effortlessly.
									Your recordings, always at your fingertips.
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
			<section
				id="h"
				className="mgLG">
				<header>
					<h2>How it works</h2>
				</header>
				<div className="container howitworks">
					<div className="card">
						<div className="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="68"
								height="67"
								fill="none"
								viewBox="0 0 68 67">
								<rect
									width="68"
									height="67"
									fill="#120B48"
									rx="33.5"></rect>
								<path
									fill="#fff"
									d="M38.183 21.727V45h-4.92V26.398h-.137l-5.33 3.34v-4.363l5.762-3.648h4.625z"></path>
							</svg>
						</div>
						<h3>Record Screen</h3>
						<p>
							Click the "Start Recording" button in our extension.
							choose which part of your screen to capture and who you
							want to send it to.
						</p>
					</div>
					<div className="card">
						<div className="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="68"
								height="67"
								fill="none"
								viewBox="0 0 68 67">
								<rect
									width="67"
									height="67"
									x="0.5"
									fill="#120B48"
									rx="33.5"></rect>
								<path
									fill="#fff"
									d="M25.808 45v-3.545l8.284-7.67a31.34 31.34 0 001.773-1.842c.485-.545.852-1.08 1.102-1.602.25-.53.375-1.102.375-1.716 0-.682-.155-1.269-.466-1.761-.31-.5-.734-.883-1.272-1.148-.538-.273-1.148-.41-1.83-.41-.712 0-1.333.145-1.864.433-.53.287-.939.7-1.227 1.238-.288.538-.432 1.178-.432 1.92h-4.67c0-1.522.345-2.844 1.034-3.965.69-1.121 1.655-1.989 2.898-2.602 1.242-.614 2.674-.92 4.295-.92 1.667 0 3.118.294 4.352.886 1.243.583 2.209 1.393 2.898 2.431.69 1.038 1.034 2.227 1.034 3.569 0 .878-.174 1.746-.522 2.602-.341.856-.951 1.807-1.83 2.852-.879 1.038-2.117 2.284-3.716 3.739l-3.398 3.33v.158H42.4V45H25.81z"></path>
							</svg>
						</div>
						<h3>Record Screen</h3>
						<p>
							Click the "Start Recording" button in our extension.
							choose which part of your screen to capture and who you
							want to send it to.
						</p>
					</div>
					<div className="card">
						<div className="icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="68"
								height="67"
								fill="none"
								viewBox="0 0 68 67">
								<rect
									width="67"
									height="67"
									x="0.5"
									fill="#120B48"
									rx="33.5"></rect>
								<path
									fill="#fff"
									d="M33.942 45.318c-1.697 0-3.209-.291-4.534-.875-1.319-.59-2.36-1.401-3.125-2.432-.758-1.038-1.148-2.235-1.17-3.59h4.954c.03.568.216 1.068.557 1.5.348.424.81.753 1.386.988.576.235 1.223.352 1.943.352.75 0 1.413-.132 1.989-.397.575-.265 1.026-.633 1.352-1.103a2.78 2.78 0 00.489-1.625c0-.62-.175-1.17-.523-1.647-.341-.485-.833-.864-1.477-1.137-.637-.272-1.394-.409-2.273-.409h-2.17V31.33h2.17c.742 0 1.398-.13 1.966-.387.576-.257 1.023-.614 1.34-1.068.319-.462.478-1 .478-1.614 0-.583-.14-1.094-.42-1.534a2.776 2.776 0 00-1.16-1.045c-.492-.25-1.068-.375-1.727-.375-.666 0-1.276.121-1.83.364a3.198 3.198 0 00-1.329 1.01c-.333.44-.511.955-.534 1.546h-4.716c.023-1.34.405-2.523 1.148-3.545.742-1.023 1.742-1.822 3-2.398 1.265-.583 2.693-.875 4.284-.875 1.606 0 3.011.292 4.216.875 1.204.583 2.14 1.371 2.807 2.364.674.985 1.007 2.09 1 3.318.007 1.303-.398 2.39-1.216 3.261-.81.872-1.868 1.424-3.17 1.66v.181c1.711.22 3.014.815 3.908 1.784.902.962 1.349 2.167 1.341 3.614.008 1.326-.375 2.504-1.147 3.534-.766 1.03-1.822 1.84-3.17 2.432-1.35.59-2.895.886-4.637.886z"></path>
							</svg>
						</div>
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
					<div className="logo">
						<img
							src={whiteLogo}
							draggable="false"
						/>
					</div>
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
