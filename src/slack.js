const config = require('./config');
const { IncomingWebhook } = require('@slack/client');

let webhook;
if (config.webhookUrl) {
  webhook = new IncomingWebhook(config.webhookUrl);
}

async function postWebhookMessage(message) {
  if (!webhook) {
    throw new Error('A webhook URL was not provided when the bot was started.');
  }
  return new Promise((resolve, reject) => {
    webhook.send(message, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = {
  postWebhookMessage
};
