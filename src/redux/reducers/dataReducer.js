import { SET_SCREAM, LIKE_SCREAM, UNLIKE_SCREAM, LOADING_DATA } from '../types';

const initialState = {
	screams: [],
	scream: {},
	loading: false
};

export default function(state = initialState, actions) {
	switch (actions.type) {
		case LOADING_DATA:
			return {
				...state,
				loading: true
			};
		case SET_SCREAM:
			return {
				...state,
				screams: action.payload,
				loading: false
			};
        case LIKE_SCREAM:
        case UNLIKE_SCREAM:
			let index = state.screams.findIndex((scream) => scream.screamId === action.payload.screamId);
			state.screams[index] = action.payload;
			return {
				...state
            };
        case 
	}
}
