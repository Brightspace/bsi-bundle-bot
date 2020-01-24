const config = require('./config');
const formatter = require('./formatter');
const slack = require('./slack');

module.exports.run = async () => {
    try {
        // Primary message when new LKG build is ready
        // TODO: get this from the API
        const blocks = formatter.formatLkgBlock(
            "https://github.com/Brightspace/brightspace-integration/commit/0265f7d5d99edcf9ae5de915444206b4dbece1e9",
            "20.20.3-10",
            "https://qa2020320349g.bspc.com/",
            "20.20.3.20349"
        );

        const response = slack.postChannelMessage(
            process.env.SLACK_CHANNEL_ID,
            blocks
        );

        // Follow up messages in thread to indicate previous bundles
        Promise.resolve(response).then(function(value) {
            // TODO: get this from the API, and include all of the recent builds
            const threadText = formatter.formatBundleAndBsiText(
                "https://github.com/Brightspace/brightspace-integration/commit/33077c83cb8c7c14c95beeea89e9b6f418a58ad3",
                "20.20.3-7",
                "https://qa2020320347g.bspc.com/",
                "20.20.3.20347"
            );

            slack.postChannelThreadReply(
                process.env.SLACK_CHANNEL_ID,
                threadText,
                value.ts
            );
        });

        return { statusCode: 200 };
    } catch (err) {
        console.log(err.message);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.message })
        };
    }
};
