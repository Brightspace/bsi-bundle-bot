const config = require('./config');
const { WebClient, IncomingWebhook } = require('@slack/client');

let webhook;
if (config.webhookUrl) {
  webhook = new IncomingWebhook(config.webhookUrl);
}
let web;
if (config.accessToken) {
  web = new WebClient(config.accessToken);
}

async function postChannelMessage(channel, blocks) {
  if (!web) {
    throw new Error('A Slack access token was not provided when the bot was started.');
  }
  const text = 'fallback';

  const promise = web.chat.postMessage({
    channel,
    text,
    blocks
  });

  return promise;
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
  postChannelMessage,
  postWebhookMessage
};
