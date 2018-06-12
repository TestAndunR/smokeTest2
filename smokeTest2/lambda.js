let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

	console.log("S3 as a trigger");
	s3.listObjects({
		'Bucket': 'sigma.smoketest',
		'MaxKeys': 10,
		'Prefix': ''
	}).promise()
		.then(data => {
			console.log(data);           // successful response
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});

	callback(null, 'Successfully executed');

}