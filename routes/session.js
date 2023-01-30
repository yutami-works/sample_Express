const express = require('express');
const router = express.Router();

/* GET session listing. */
router.get('/', (req, res, next) => {
  var msg = '※何か書いて送信してください。';
  // セッションにmessageが保管されている場合はそれを表示
  if (req.session.message != undefined) {
    msg = `Last Message: ${req.session.message}`;
  }
  var data = {
    title: 'Hello!',
    content: msg
  };
  res.render('session', data);
});

/* POST session/post listing. */
router.post('/post', (req, res, next) => {
  var msg = req.body['message'];
  // 受け取ったmessageをセッションに保管
  req.session.message = msg;
  var data = {
    title: 'Hello',
    content: `Last Message: ${req.session.message}`
  };
  res.render('session', data);
});

module.exports = router;
