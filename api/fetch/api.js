const request = require("request");

// request
const fullRequest = (options) => {
  return new Promise((resolve) => {
    request(options, (error, response, body) => {
      if (error) {
        resolve({
          error: error,
          response: response,
          body: body,
        });
      }
      resolve({
        error: error,
        response: response,
        body: body,
      });
    });
  });
};

module.exports = {
  fetchRequest: fullRequest,
};
