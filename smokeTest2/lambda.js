let AWS = require('aws-sdk');
exports.handler = function (event, context, callback) {

	console.log("Schedule rule");

	callback(null, 'Successfully executed');
}