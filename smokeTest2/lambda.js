let AWS = require('aws-sdk');
const sns = new AWS.SNS();
const ses = new AWS.SES();
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {

	console.log("S3 as a trigger");

	sns.publish({
		Message: 'Smoke test fr Sigma',
		Subject: 'Smoke Test',
		MessageAttributes: {},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:318300609668:smokeTest'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});


	callback(null, 'Successfully executed');

}