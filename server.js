require('dotenv').config();

const express = require('express');
const app = express();


app.get('/calcquery/:numOne/:numTwo', (request, response) => {
    const num1 = parseInt(request.params.numOne);
    const num2 = parseInt(request.params.numTwo);
    const operation = request.query.operation;

    if(operation === 'add'){
        response.send(`the sum is ${num1 + num2}`)
    }else if(operation === 'subtract'){
        response.send(`the value is ${num1 - num2}`)
    }else if(operation === 'multiply'){
        response.send(`the value is ${num1 * num2}`)
    }else if(operation === 'divide'){
        response.send(`the value is ${num1 / num2}`)
    }else if (operation === "exponent") {
        response.send(`the exponent value is ${num1 ** num2}`);
    } else {
        response.send(`no operation`);
    }
})

app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`)
})