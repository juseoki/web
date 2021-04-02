var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.send({greeting:'Hello Test'});
});

module.exports = router;