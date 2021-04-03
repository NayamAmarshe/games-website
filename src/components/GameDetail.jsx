import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import playstation from "../img/playstation.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
	const history = useHistory();
	const { screen, game, isLoading } = useSelector((state) => state.detail);

	const exitDetailHandler = (e) => {
		const element = e.target;
		if (element.classList.contains("shadow")) {
			document.body.style.overflow = "auto";
			history.push("/");
		}
	};

	const getStars = () => {
		const rating = Math.floor(game.rating);
		let stars = [];
		for (let i = 0; i < 5; i++) {
			if (i <= rating) {
				stars.push(<img alt="star" key={i} src={starFull}></img>);
			} else {
				stars.push(<img alt="emptyStar" key={i} src={starEmpty}></img>);
			}
		}
		return stars;
	};

	const getPlatform = (platform) => {
		switch (platform) {
			default:
				return gamepad;
			case "Playstation 4":
				return playstation;
			case "Xbox One":
				return xbox;
			case "PC":
				return steam;
			case "Nintendo Switch":
				return nintendo;
			case "iOS":
				return apple;
		}
	};
	return (
		<>
			{!isLoading && (
				<StyledCardShadow
					className="card-shadow shadow"
					onClick={exitDetailHandler}
				>
					<StyledDetail layoutId={pathId} className="detail">
						<StyledStats className="stats">
							<div className="rating">
								<motion.h3 layoutId={`title ${pathId}`}>
									{game.name}
								</motion.h3>
								<p>Rating:</p>
								{getStars()}
							</div>
							<StyledInfo className="info">
								<h3>Platforms</h3>
								<StyledPlatforms className="platforms">
									{game.platforms.map((data) => (
										<img
											key={data.platform.id}
											src={getPlatform(
												data.platform.name
											)}
											alt="platform"
										></img>
									))}
								</StyledPlatforms>
							</StyledInfo>
						</StyledStats>
						<StyledMedia className="media">
							<motion.img
								layoutId={`image ${pathId}`}
								src={game.background_image}
								alt="background"
							/>
						</StyledMedia>
						<StyledDescription className="description">
							<p>{game.description_raw}</p>
						</StyledDescription>
						<StyledGallery className="gallery">
							{screen.results.map((screen) => (
								<img
									key={screen.id}
									src={smallImage(screen.image, 1280)}
									// src={screen.image}
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
	z-index: 5;
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
	z-index: 10;
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
	img {
		margin-top: 1rem;
		width: 1rem;
		height: 1rem;
		display: inline;
	}
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
