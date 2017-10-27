const send = require('chatloop').Send
const context = require('chatloop').Development.context
const contextDelete = require('chatloop').Development.contextDelete
const yodaTranslator = require('./helper/yodaTranslator')
const smallTalkNlp = require('./helper/smallTalkNlp')

module.exports = async function(event, status) {
    const usrdata = await send.GetProfileData(event.senderId);
    console.log(usrdata)
    const small_talk_response = await smallTalkNlp(event.text_message);
    
    let yoda_small_talk = await yodaTranslator(
        small_talk_response
    )
    console.log(yoda_small_talk)

    console.log(
        small_talk_response
    )
    send.Text(
        event.senderId,
        'small_talk_response'
    )
    //context('getstartedLoop')
}
