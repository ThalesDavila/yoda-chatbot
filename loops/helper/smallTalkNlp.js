const apiai = require('apiai-promise');
const apiaiClient = apiai(process.env.SMALL_TALK_APIAI_KEY);

module.exports = async function smallTalkApiai(text_message) {
    const response = await apiaiClient.textRequest(text_message, {
        sessionId: 'botcube_co'
       })
    return(response
        .result
        .fulfillment
        .speech
    )
}