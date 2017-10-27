const send = require('chatloop').Send
const context = require('chatloop').Development.context
const yodaTranslator = require('./helper/yodaTranslator')
const smallTalkNlp = require('./helper/smallTalkNlp')

module.exports = async function(event, user_context) {
    if(user_context.position == 'first_interaction') {
        send.Text(
            event.senderId,
            'Wars not make one great.'
        )
        send.Text(
            event.senderId,
            'To start a conversation with you I accept.'
        )
        context(undefined, 'others_interactions')
    } else {
        console.log('dark side')
        const small_talk_response = await smallTalkNlp(event.text_message);
        
        let yoda_small_talk = await yodaTranslator(
            small_talk_response
        )
        
        send.Text(
            event.senderId,
            yoda_small_talk
        )
    }
}