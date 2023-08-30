const http = require('http')
const httpServer = http.createServer();
const port = 8081;

httpServer.listen(port, () => {
    console.log(`server  started port ${port}`);
})

httpServer.on('request', (request, response) => {
    let url = request.url;
    let aftersplit = url.split("/");
    let method = aftersplit[1];
    let firstNum = parseInt(aftersplit[2]);
    let secondNum = parseInt(aftersplit[3]);

    if (method === "add") {
        let result = firstNum + secondNum;
        response.write(`Add Calculation ${firstNum} + ${secondNum} = ${result}`)
    } else if (method === "div") {
        let result = firstNum / secondNum;
        response.write(`Division  Calculation ${firstNum} / ${secondNum} = ${result}`)

    } else if (method === "sub") {
        let result = firstNum - secondNum;
        response.write(`Subtraction Calculation ${firstNum} - ${secondNum} = ${result}`)

    } else if (method === "mul") {
        let result = firstNum * secondNum;
        response.write(`Multiply Calculation ${firstNum} x ${secondNum} = ${result}`)

    } else {
        response.write(`Please Enter The Method Then Enter The Numbers Ex: /add or div or sub or mul/7/8 `)
    }

    response.end()
})