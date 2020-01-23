const slack = require('./slack');

module.exports.run = async () => {
    try {
        await slack.postChannelMessage(
            process.env.CHANNEL_ID,
            'BSI bot test'
        );

      return { statusCode: 200 };
    } catch (err) {
      console.log(err.message);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: err.message })
      };
    }
  };