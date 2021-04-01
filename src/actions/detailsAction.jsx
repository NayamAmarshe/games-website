import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadDetail = (game_id) => async (dispatch) => {
	dispatch({
		type: "LOADING_DETAIL",
	});

	const detailData = await axios.get(gameDetailsURL(game_id));
	const screenData = await axios.get(gameScreenshotsURL(game_id));
	dispatch({
		type: "GET_DETAIL",
		payload: {
			game: detailData.data,
			screen: screenData.data,
		},
	});
};
