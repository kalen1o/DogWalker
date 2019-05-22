const initialState = {
	searchParam: {
		services: "Dog Boarding",
		city: "",
		regularity: "One Time",
		startDate: "",
		endDate: "",
		dogSizes: [],
		daysOfTheWeek: []
	},
	city: {},
	markers: {}
}

function searchReducer (state = initialState, action) {
	switch (action.type) {
		case 'SET_SEARCH_PARAM':
			return {
				...state,
				searchParam: action.payload.searchParam
			}
		case 'FETCH_LATITUDE_LONGTITUDE':
			return {
				...state,
				city: action.payload.city
			}
		
		case 'SET_MARKERS':
			return {
				...state,
				markers: action.payload.markers
			}

		default:
			return state;
	}
}

export default searchReducer;