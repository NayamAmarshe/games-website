import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Home = () => {
	//assign state
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);
	//Get state using selector
	const { popular, newGames, upcomingGames, searched } = useSelector(
		(state) => {
			return state.games;
		}
	);

	const location = useLocation();
	const pathID = location.pathname.split("/")[2];
	//return
	return (
		<StyledGameList>
			<AnimateSharedLayout type="switch">
				<AnimatePresence>
					{pathID && <GameDetail pathId={pathID} />}
				</AnimatePresence>
				{searched.length ? (
					<div className="searched">
						<h2>Search Results</h2>
						<StyledGames>
							{searched.map((game) => {
								return (
									<Game
										name={game.name}
										released={game.released}
										id={game.id}
										image={game.background_image}
										key={game.id}
									/>
								);
							})}
						</StyledGames>
					</div>
				) : (
					""
				)}

				<h2>Upcoming Games</h2>
				<StyledGames>
					{upcomingGames.map((game) => {
						return (
							<Game
								name={game.name}
								released={game.released}
								id={game.id}
								image={game.background_image}
								key={game.id}
							/>
						);
					})}
				</StyledGames>
				<h2>Popular Games</h2>
				<StyledGames>
					{popular.map((game) => {
						return (
							<Game
								name={game.name}
								released={game.released}
								id={game.id}
								image={game.background_image}
								key={game.id}
							/>
						);
					})}
				</StyledGames>
				<h2>New Games</h2>
				<StyledGames>
					{newGames.map((game) => {
						return (
							<Game
								name={game.name}
								released={game.released}
								id={game.id}
								image={game.background_image}
								key={game.id}
							/>
						);
					})}
				</StyledGames>
			</AnimateSharedLayout>
		</StyledGameList>
	);
};

export default Home;

const StyledGameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;
const StyledGames = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-gap: 3rem;
`;
