import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const GameDetail = () => {
	const history = useHistory();
	const { screen, game, isLoading } = useSelector((state) => state.detail);

	const exitDetailHandler = (e) => {
		const element = e.target;
		console.log(element);
		if (element.classList.contains("shadow")) {
			document.body.style.overflow = "auto";
			history.push("/");
		}
	};

	return (
		<>
			{!isLoading && (
				<StyledCardShadow
					className="card-shadow shadow"
					onClick={exitDetailHandler}
				>
					<StyledDetail className="detail">
						<StyledStats className="stats">
							<div className="rating">
								<h3>{game.name}</h3>
								<p>Rating: {game.rating}</p>
							</div>
							<StyledInfo className="info">
								<h3>Platforms</h3>
								<StyledPlatforms className="platforms">
									{game.platforms.map((data) => (
										<h3 key={data.platform.id}>
											{data.platform.name}
										</h3>
									))}
								</StyledPlatforms>
							</StyledInfo>
						</StyledStats>
						<StyledMedia className="media">
							<img src={game.background_image} alt="background" />
						</StyledMedia>
						<StyledDescription className="description">
							<p>{game.description_raw}</p>
						</StyledDescription>
						<StyledGallery className="gallery">
							{screen.results.map((screen) => (
								<img
									key={screen.id}
									src={screen.image}
									alt="screenshot"
								/>
							))}
						</StyledGallery>
					</StyledDetail>
				</StyledCardShadow>
			)}
		</>
	);
};

export default GameDetail;

const StyledCardShadow = styled(motion.div)`
	background: rgba(0, 0, 0, 0.4);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	position: fixed;
	top: 0;
	left: 0;
	&::-webkit-scrollbar {
		width: 0.5rem;
	}
	&::-webkit-scrollbar-thumb {
		background: #ff7676;
	}
	&::-webkit-scrollbar-track {
		background: white;
	}
`;

const StyledDetail = styled(motion.div)`
	width: 60%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 20%;
	color: black;
	backdrop-filter: blur(5px);
	img {
		width: 100%;
	}
`;

const StyledStats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledInfo = styled(motion.div)`
	text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
	display: flex;
	justify-content: center;
	img {
		margin-left: 3rem;
	}
`;

const StyledMedia = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
		height: 30vh;
		object-fit: cover;
		object-position: top;
	}
`;

const StyledDescription = styled(motion.div)`
	margin: 5rem 0rem;
`;

const StyledGallery = styled(motion.div)`
	img {
		transition: all 0.5s ease;
		&:hover {
			border-radius: 1rem;
			transform: scale(1.2);
			margin-bottom: 10rem;
		}
	}
`;
