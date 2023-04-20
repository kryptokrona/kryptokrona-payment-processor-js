function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Converts hex value to string.
 *
 * @param {String} hex - Hex value.
 * @param {String} str - String value.
 * @returns {String} Returns .
 */
function fromHex(hex, str) {
    try {
        str = decodeURIComponent(hex.replace(/(..)/g, '%$1'))
    } catch (e) {
        str = hex
        log.error(getTimestamp() + ' ERROR: Invalid hex input. ' + err)
    }
    return str
}
module.exports = {sleep, fromHex}