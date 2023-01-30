const express = require('express');
const router = express.Router();

/* GET query listing. */
router.get('/', (req, res, next) => {
  // /query?name=John&mail=john@smith.com
  var name = req.query.name;
  var mail = req.query.mail;
  var data = {
    title:'Hello!',
    content:`あなたの名前は${name}。<br>メールアドレスは、${mail}です。`

  };
  res.render('query', data);
});

module.exports = router;