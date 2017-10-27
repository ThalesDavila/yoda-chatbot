const rp = require('request-promise');

module.exports = async function yodaTranslator(text) {
    let translated_text_small_talk_response = await rp.post('http://api.funtranslations.com/translate/yoda.json', {
        form: {text: text}
    })
    translated_text_small_talk_response = JSON.parse(
        translated_text_small_talk_response
    )
    translated_text_small_talk_response = translated_text_small_talk_response
    .contents
    .translated;
    return translated_text_small_talk_response
}