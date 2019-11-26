const formidable = require ('formidable')
const _ = require("lodash");
const fs = require("fs");
const router = require('express').Router();
let Provider = require('../models/provider.model');

router.route('/').get((req, res) => {
  Provider.find()
    .then(provider => res.json(provider))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
    //photo validation
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        let provider = new Provider(fields);

        if (files.photo) {
            provider.photo.data = fs.readFileSync(files.photo.path);
            provider.photo.contentType = files.photo.type;
        }
        //provider save
        provider.save()
        .then(() => res.json('Provider added!'))
        .catch(err => res.status(400).json('Error: ' + err));
      });

    });   



router.route('/:id').get((req, res) => {
  Provider.findById(req.params.id)
    .then(provider => res.json(provider))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;