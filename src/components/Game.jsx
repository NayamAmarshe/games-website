import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailsAction";

const Game = ({ name, released, image, id }) => {
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		dispatch(loadDetail(id));
	};

	return (
		<StyledGame onClick={loadDetailHandler}>
			<h3>{name}</h3>
			<p>{released}</p>
			<img src={image} alt={name} />
		</StyledGame>
	);
};

export default Game;

const StyledGame = styled(motion.div)`
	min-height: 30vh;
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
