const initState = {
	popular: [],
	newGames: [],
	upcomingGames: [],
	searched: [],
};

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case "FETCH_GAMES":
			return {
				...state,
				popular: action.payload.popular,
				newGames: action.payload.newGames,
				upcomingGames: action.payload.upcomingGames,
			};
		default:
			return { ...state };
	}
};

export default gamesReducer;
