const { WebClient, IncomingWebhook } = require('@slack/client');

const WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const ACCESS_TOKEN = process.env.SLACK_OAUTH_ACCESS_TOKEN;

const AUTHORIZATION_HEADER = {
  Authorization: `Bearer ${ACCESS_TOKEN}`
};

let webhook;
if (WEBHOOK_URL) {
  webhook = new IncomingWebhook(WEBHOOK_URL);
}
let web;
if (ACCESS_TOKEN) {
  web = new WebClient(ACCESS_TOKEN);
}

async function postChannelMessage(channel, text, attachments) {
  if (!web) {
    throw new Error('A Slack access token was not provided when the bot was started.');
  }
  return web.chat.postMessage({
    channel,
    text,
    attachments
  });
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
