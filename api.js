// api.js

exports.handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    try {
      // Process the GET request as needed
      const data = require('./db.json');

      const headers = {
        'Access-Control-Allow-Origin': '*', // Replace * with the appropriate domain
        'Access-Control-Allow-Headers': 'Content-Type',
      };
    
      // Return the response with headers
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data),
      };
    } catch (error) {
      // Return an error response if there was an issue processing the request
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to process GET request' }),
      };
    }
  }
};

// api.js

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    try {
      // Parse the incoming JSON payload from the request body
      const requestBody = JSON.parse(event.body);

      // Save the data to a database or perform other necessary operations
      // ...
      const headers = {
        'Access-Control-Allow-Origin': '*', // Replace * with the appropriate domain
        'Access-Control-Allow-Headers': 'Content-Type',
      };
    
      // Return the response with headers
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data),
      };
    
    } catch (error) {
      // Return an error response if there was an issue processing the request
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Failed to process POST request' }),
      };
    }
  }
};
