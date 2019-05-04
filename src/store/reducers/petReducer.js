const initialState = {
	pets: [
		{id: 1, name: 'Bonya', breed: 'Hask', age: 2, size: 'small'},
		{id: 2, name: 'Bane', breed: 'Taska', age: 1, size: 'large'}
	]
}

const petReducer = (state = initialState, action) => {
	return state;
}

export default petReducer;