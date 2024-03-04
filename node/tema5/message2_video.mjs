import clc from 'cli-color'

function outputMessage(message){
    console.log(clc.yellow(`The message is : ${message}`))
}

outputMessage("Hello!");

//este documento es un default js module
