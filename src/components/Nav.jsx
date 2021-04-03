import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

export default function Nav() {
	const dispatch = useDispatch();
	const [text, setText] = useState("");

	const inputHandler = (e) => {
		const { value } = e.target;
		setText(value);
	};

	const submitSearch = (e) => {
		e.preventDefault();
		dispatch(fetchSearch(text));
		setText("");
	};

	const clearSearch = () => {
		dispatch({ type: "CLEAR_SEARCH" });
	};

	return (
		<StyledNav>
			<StyledLogo>
				<img onClick={clearSearch} src={logo} alt="logo" />
				<h1>Gameon</h1>
			</StyledLogo>
			<form>
				<input value={text} onChange={inputHandler} type="text" />
				<button type="submit" onClick={submitSearch}>
					Search
				</button>
			</form>
		</StyledNav>
	);
}

const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	text-align: center;
	input {
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
		outline: none;
	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
	}
`;
const StyledLogo = styled(motion.nav)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	img {
		height: 2rem;
		width: 2rem;
	}
`;
