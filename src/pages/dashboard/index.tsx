import { Nav } from "../../components";
import "./style.scss";

export function DashBoard() {
	return (
		<div className="dash">
			<Nav dash={true} />
			<section className="divider">
				<div className="container profile">
					<div className="details">
						<h2>Hello, John Mark</h2>
						<p>Here are your recorded videos</p>
					</div>
					<div className="ctr">
						<input
							className="input"
							type="text"
						/>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<h3>Results</h3>
				</div>
			</section>
		</div>
	);
}
