const GetUid = (data) => {
	let uid = data.map(item => item.uid)
	return ({
		type: "GET_UID",
		payload: { uid }
	})
}

export default GetUid;