var axios = require('axios');
var data = `{
	"scene_id": "2f7c2ca9-f5f2-4af1-9cf4-34b846580806af"
}`;

var config = {
	method: 'post',
	url: 'http://localhost:8080/api/render',
	headers: {
		'Content-Type': 'application/json'
	},
	data: data
};

axios(config)
	.then(function (response) {
		console.log(JSON.stringify(response.data));
	})
	.catch(function (error) {
		console.log(error.response.data);
	});