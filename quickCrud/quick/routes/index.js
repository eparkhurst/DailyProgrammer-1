var express = require('express');
var router = express.Router();
var knex = require("knex")({
    client: "pg",
    connection: 'postgres://localhost/quick'
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res) {
  res.send(knex('users'))
  // users().select().then(function(users){
  //   res.render('players', {
  //     title: 'People',
  //     user: req.user
  //   });
  // });
});

module.exports = router;
