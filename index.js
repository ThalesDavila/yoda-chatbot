const chatloop = require('chatloop');
const loopsRoutes = require('./loops/loopsRoutes');

chatloop.Connect(
    loopsRoutes
);
