let AWS = require('aws-sdk');
const ses = new AWS.SES();
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

	ses.sendEmail({
		Destination: {
			ToAddresses: ['kannangarar1993@gmail.com'],
			CcAddresses: [],
			BccAddresses: []
		},
		Message: {
			Body: {
				Text: {
					Data: ''
				}
			},
			Subject: {
				Data: 'SmokeTest'
			}
		},
		Source: 'andun@adroitlogic.com',
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});


	callback(null, 'Successfully executed');

}