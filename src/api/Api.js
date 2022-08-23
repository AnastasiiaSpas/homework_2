const Api = async (url, method = 'GET', obj) => {
	try{
		let options = {
			method: method,
			headers: {
				"Content-type" : "application/json; charset=utf-8"
			}
		}

		if(obj) options.body = JSON.stringify(obj)

		let request = await fetch(url,options),
				response = await request.json()

		return response.items
	}
	catch(err){
		console.log(`In catch ${err}`)
	}
}

export default Api