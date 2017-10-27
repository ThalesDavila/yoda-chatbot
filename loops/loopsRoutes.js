const Loop = require('chatloop').Loop
const context = require('chatloop').Development.context

const startingLoop = require('./startingLoop')
const darkSideLoop = require('./darkSideLoop')
const lightSideLoop = require('./lightSideLoop')

module.exports = async function(event) {
  console.log(event)
  const read_context = await context()
  if(read_context && read_context.loopToBeCalled) {
    loopToBeCalled = read_context.loopToBeCalled
    console.log(loopToBeCalled)
  } else {
    console.log('else')
    await context('startingLoop');
    loopToBeCalled = 'startingLoop'
  }
  
  let ArrayOfLoops = [];
  ArrayOfLoops.push(new Loop(
    'startingLoop',
    function() {
        startingLoop(event)
    }
  ));
  ArrayOfLoops.push(new Loop(
    'darkSideLoop',
    function() {
      darkSideLoop(event, read_context)
    }
  ));
  ArrayOfLoops.push(new Loop(
    'lightSideLoop',
    function() {
      lightSideLoop(event, read_context)
    }
  ));

  Loop.findCurrentLoop(loopToBeCalled, ArrayOfLoops)
}