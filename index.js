const express = require('express');

const app = express();
 /* const porta = process.env.PORT || 3333*/

 const porta = 3333;

 /* define a porta que  - ver porta que está disponível no servidor*/
 app. listen(porta, () =>{
    //console.log('env: ' + process.env.PORT);
    console.log('Serivdor iniciado na porta ' + porta);    
 });

 app.get('/',  (request, response) => {
    response.send('Hello world')
 } )