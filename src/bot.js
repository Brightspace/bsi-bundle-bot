const formatter = require('./formatter');
const slack = require('./slack');

module.exports.run = async () => {
    try {
        const message = formatter.formatMessage(
            "https://github.com/Brightspace/brightspace-integration/commit/33077c83cb8c7c14c95beeea89e9b6f418a58ad3",
            "20.20.3-7",
            "https://qa2020320331g.bspc.com/",
            "20.20.3.20331"
        );
        await slack.postWebhookMessage(message);

        return { statusCode: 200 };
    } catch (err) {
        console.log(err.message);
        return {
        statusCode: 500,
        body: JSON.stringify({ message: err.message })
        };
    }
};
