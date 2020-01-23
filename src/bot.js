const slack = require('./slack');

module.exports.run = async () => {
    try {

      return { statusCode: 200 };
    } catch (err) {
      console.log(err.message);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: err.message })
      };
    }
  };