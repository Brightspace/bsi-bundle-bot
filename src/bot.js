const config = require('./config');
const slack = require('./slack');

module.exports.run = async () => {
    try {
        await slack.postChannelMessage(
            config.channelId,
            'BSI bot test 2'
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
