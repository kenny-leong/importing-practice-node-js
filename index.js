
// Your code here
const sayHelloTo = require('./send-messages/say-hello-to')
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato')
const classes = require('./messages/index')

const msg1 = classes.message1;
const msg2 = classes.message2;
const msg3 = classes.message3;




/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
