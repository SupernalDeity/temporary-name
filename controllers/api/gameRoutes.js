const router = require('express').Router();
const { User, Score, Planets } = require('../../models');

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;