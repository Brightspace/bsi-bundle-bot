const config = require('./config');
const { WebClient } = require('@slack/client');

let web;
if (config.accessToken) {
  web = new WebClient(config.accessToken);
}

async function postChannelMessage(channel, blocks) {
  checkWebClient();

  const text = 'fallback';

  const promise = web.chat.postMessage({
    channel,
    text,
    blocks
  });

  return promise;
}

async function postChannelThreadReply(channel, text, thread_ts) {
  checkWebClient();

  const promise = web.chat.postMessage({
    channel,
    text,
    thread_ts
  });

  return promise;
}

function checkWebClient() {
  if (!web) {
    throw new Error('A Slack access token was not provided when the bot was started.');
  }
}

module.exports = {
  postChannelMessage,
  postChannelThreadReply
};
