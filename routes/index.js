import {some} from 'ts-option';

const express = require('express');
const router = express.Router({});
const langManager = require('@raul782/lang-manager');

/* GET home page. */
router.get('/', function(req, res, next) {

  const languages = langManager.getLanguages(some("de"));

  if (languages.length > 0) {
    res.render('index', { title: 'Languages' });
  } else {
    res.render('index', { title: 'Express' });
  }
});

module.exports = router;
