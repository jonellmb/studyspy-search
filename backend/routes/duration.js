const router = require('express').Router();
let Duration = require('../models/duration.model');

//get all duration
router.route('/').get((req, res) => {
    Duration.find()
      .then(duration => res.json(duration))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
//create duration
router.route('/create').post((req, res) => {
    const newDuration = new Duration(req.body);
  
    newDuration.save()
      .then(() => res.json('Duration added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;