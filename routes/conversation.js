let watson = require('watson-developer-cloud');
let express = require('express');
let app = express();

app.post('/send-message', function (req, res) {
    let message = req.body.message;
    console.log(message);

    try {
        let conversation = watson.conversation({
            username: process.env.CONVERSATION_USERNAME,
            password: process.env.CONVERSATION_PASSWORD,
            version: process.env.CONVERSATION_VERSION,
            version_date: process.env.CONVERSATION_DATE
        });

        conversation.message({
            workspace_id: process.env.WORKSPACE_ID,
            input: {'text': message},
            context: {}
        }, function (err, response) {
            if (err) {
                console.log(err);
                res.json({text: ['Ops, aconteceu um erro, tente novamente!']});
            } else {
                console.log(response.output.text);
                res.json({text: response.output.text});
            }
        });
    } catch (e) {
        console.log(e);
        res.json({text: ['Ops, aconteceu um erro, tente novamente!']});
    }


});


module.exports = app;