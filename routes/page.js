const express = require('express');
const router = express.Router();

// ここには相対的なルーティングを書く（下は/page/にアクセスした時の処理）
/* GET page listing. */
router.get('/', (req, res, next) => {
  var data = {
    title:'Hello!',
    content:'これは、サンプルのコンテンツです。<br>this is sample content.'
  };
  res.render('page', data);
});

module.exports = router;