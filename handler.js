'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Oh hi there. How are you?',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.goodbye = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      messages: "I sorry to hear this",
      input: context,
    })
  };

  callback(null, response);
};