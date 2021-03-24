import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	});
	return (
		<div>
			<h1>Hello!</h1>
		</div>
	);
}
