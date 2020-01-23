
function formatMessage(
    bsiVersionUrl,
    bsiVersionNumber,
    quadSiteUrl,
    bundleNumber
) {
    const sectionText = 
        `BSI was updated to version: <${bsiVersionUrl}|${bsiVersionNumber}>\nQuad site: <${quadSiteUrl}|${bundleNumber}>`;

    let previousBundles = {
        1 : {
            number: "20.20.3.20329",
            url: "https://qa2020320329g.bspc.com/"
        },
        2 : {
            number: "20.20.3.20328",
            url: "https://qa2020320328g.bspc.com/"
        }
    };

    let message = {
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": sectionText
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Previous bundles"
                },
                "accessory": {
                    "type": "overflow",
                    "options": [
                        {
                            "text": {
                                "type": "plain_text",
                                "text": previousBundles[1].number
                            },
                            "value": previousBundles[1].number,
                            "url": previousBundles[1].url
                        }
                    ]
                }
            }
        ]
    };

    return message;
}

module.exports = {
    formatMessage
};
