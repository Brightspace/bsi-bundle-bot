const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  accessToken: process.env.SLACK_ACCESS_TOKEN,
  channelId: process.env.SLACK_CHANNEL_ID,
  webhookUrl: process.env.SLACK_WEBHOOK_URL
};
