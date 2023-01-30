const express = require('express');
const router = express.Router();

/* GET form listing. */
router.get('/', (req, res, next) => {
  var data = {
    title: 'Hello!',
    content: '※何か書いて送信してください。'
  };
  res.render('form', data);
});

/* POST form/post listing. */
router.post('/post', (req, res, next) => {
  var msg = req.body['message'];
  var data = {
    title: 'Hello',
    content: `あなたは「${msg}」と送信しました。`
  };
  res.render('form', data);
});

module.exports = router;