function formatLkgBlock(
    bsiVersionUrl,
    bsiVersionNumber,
    quadSiteUrl,
    bundleNumber
) {
    const sectionText =
        `A new LKG site was deployed:\n` +
        `${formatBundleAndBsiText(bsiVersionUrl, bsiVersionNumber, quadSiteUrl, bundleNumber)}\n\n` +
        `Previous bundles in thread:`;

    const block = [
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": sectionText
            }
        }
    ];

    return block;
}

function formatBundleAndBsiText(
    bsiVersionUrl,
    bsiVersionNumber,
    quadSiteUrl,
    bundleNumber
) {
    const text =
        `BSI version: <${bsiVersionUrl}|${bsiVersionNumber}>\n` +
        `Quad site: <${quadSiteUrl}|${bundleNumber}>`;

    return text;
}

module.exports = {
    formatLkgBlock,
    formatBundleAndBsiText
};
