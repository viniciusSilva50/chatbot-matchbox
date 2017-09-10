var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Matchbox | Consultoria de Recursos Humanos - Matchbox Brasil' });
});


module.exports = router;
