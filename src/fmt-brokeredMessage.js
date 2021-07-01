

module.exports = async function (context) {
    const enableFormat = context.request.getHeader('Brokered-Message');
    if (enableFormat) {
        console.log('brokeredMessage plugin executing ...');
        const body = context.request.getBody(); // fyi body = {mimeType: string, text: string}
        if (body && body.text){
        const brokerMessage = {"input": body.text}; // wrap the message as a brokeredMessage payload
        body.text = JSON.stringify(brokerMessage)   // update the request body with the fmt
        context.request.setBody(body);
        }
    }
};

