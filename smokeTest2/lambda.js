let AWS = require('aws-sdk');
const ses = new AWS.SES();
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

	console.log("S3 as a trigger");



	callback(null, 'Successfully executed');

}