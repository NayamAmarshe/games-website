import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
	const stringPathId = id.toString();
	console.log(stringPathId);
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
	};

	return (
		<StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
			<Link to={`/game/${id}`}>
				<motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
				<p>{released}</p>
				<motion.img
					layoutId={`image ${stringPathId}`}
					src={image && smallImage(image, 640)}
					alt={name}
				/>
			</Link>
		</StyledGame>
	);
};

export default Game;

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	cursor: pointer;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	overflow: hidden;
	img {
		width: 100%;
		min-height: 40vh;
		object-fit: cover;
	}
	color: #696969;
`;
