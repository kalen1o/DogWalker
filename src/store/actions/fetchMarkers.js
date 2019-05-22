const FetchMarkers = (data) => dispatch => {
	let markers = []
	data.forEach(async item => {
		let place = item.address.length ? `${item.city} ${item.address}` : `${item.city}`;
		
		let result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=AIzaSyDhLPAAJXpqa3kBViOO3jZ7_O94EoyR8lU`)
		result = await result.json();
		result = result.results[0].geometry.location
		markers.push(result)
		console.log(markers, 'here')
		// dispatch({
		// 	type: "SET_MARKERS",
		// 	payload: { markers }
		// })
	})
	console.log(markers, 'here2')
}

export default FetchMarkers;