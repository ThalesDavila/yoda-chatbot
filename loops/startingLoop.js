const send = require('chatloop').Send;
const context = require('chatloop').Development.context

module.exports = async function(event, status) {
    if(event.payload == 'DARK_SIDE_PAYLOAD') {
        send.Text(
            event.senderId,
            "What you want, hmm?  Yes, hmmm."
        )
        context('darkSideLoop', 'first_interaction')
    } else if(event.payload == 'LIGHT_SIDE_PAYLOAD') {
        send.Text(
            event.senderId,
            'So, start a conversation, we can.'
        )
        context('lightSideLoop')
    } else {
        send.Text(
            event.senderId,
            'Hello! I do, what can, hmm?'
        )
        send.Text(
            event.senderId,
            'Small talk. Yeesssssss.'
        )
        let whitch_side_buttons = [
            {
                type:"postback",
                title:"Dark Side",
                payload:"DARK_SIDE_PAYLOAD"
            },
            {
                type:"postback",
                title:"Light Side",
                payload:"LIGHT_SIDE_PAYLOAD"
            }
        ];
        send.Button(
            event.senderId,
            'Which side of the force belong in do you?',
            whitch_side_buttons
        )
        send.Image(
            event.senderId,
            'https://media.giphy.com/media/3o84smdb7Kh9rc1vyM/giphy.gif'
        )
    }
}
