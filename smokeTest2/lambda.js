let AWS = require('aws-sdk');
exports.handler = function (event, context, callback) {

	console.log("S3 as a trigger");

	callback(null, 'Successfully executed');

}