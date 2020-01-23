const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  webhookUrl: process.env.SLACK_WEBHOOK_URL
};
