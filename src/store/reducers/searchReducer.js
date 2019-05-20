const initialState = {
	searchParam: {
		services: "Dog Boarding",
		city: "",
		regularity: "One Time",
		startDate: "",
		endDate: "",
		dogSizes: [],
		daysOfTheWeek: []
	}
}

function searchReducer (state = initialState, action) {
	switch (action.type) {
		case 'SET_SEARCH_PARAM':
			return {
				...state,
				searchParam: action.payload.searchParam
			}

		default:
			return state;
	}
}

export default searchReducer;