const express = require('express');

const router = express.Router();

// Services

// all transport listing TODO:: paginate
// search also eg /:capacity/:cost/:ratings/:jobs_done etc
router.get('/', (req, res) => {

  res.json('HELLO PRODUCT LISTING PAGE')
});

router.get('/:id', (req, res) => {
  const { id } = req.params

  res.json('HELLO PRODUCT LISTING PAGE')
});

// post rq create a transport item
router.post('/', (req, res) => {
  const { body: item } = req;

  res.json(item);
});

module.exports = router;
