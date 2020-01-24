
function formatMessage(
    bsiVersionUrl,
    bsiVersionNumber,
    quadSiteUrl,
    bundleNumber
) {
    const sectionText = 
        `BSI was updated to version: <${bsiVersionUrl}|${bsiVersionNumber}>\n` +
        `Quad site: <${quadSiteUrl}|${bundleNumber}>\n\n`
        `Previous bundles in thread.`;

    let blocks = [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": sectionText
            }
        }
    ];

    return blocks;
}

function getBundleAndBsiText()

module.exports = {
    formatMessage
};
