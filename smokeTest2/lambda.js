let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);

exports.handler = function (event, context, callback) {

	console.log("S3 as a trigger");

	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/318300609668/smoketestQueue',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}).promise()
		.then(receivedMsgData => {
			if (!!(receivedMsgData) && !!(receivedMsgData.Messages)) {
				let receivedMessages = receivedMsgData.Messages;
				receivedMessages.forEach(message => {
					// your logic to access each message through out the loop. Each message is available under variable message 
					// within this block
				});
			} else {
				// No messages to process
			}
		})
		.catch(err => {
			// error handling goes here
		});


	callback(null, 'Successfully executed');

}