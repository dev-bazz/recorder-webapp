import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Home, GetStarted, DashBoard } from "./pages";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/getStarted",
		element: <GetStarted />,
	},
	{
		path: "/dashboard",
		element: <DashBoard />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
