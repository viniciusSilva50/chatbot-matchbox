let watson = require('watson-developer-cloud');
let express = require('express');
let app = express();

app.post('/send-message', function (req, res) {
    let message = req.body.message;

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
                res.json({text: 'ERRO'});
            } else {
                console.log(response);
                res.json({text: 'OK'});
                // console.log(JSON.stringify(response, null, 2));
            }
        });
    } catch (e) {
        console.log(e);
        res.json({text: 'ERRO'});
    }


});


module.exports = app;