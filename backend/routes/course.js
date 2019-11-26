const router = require('express').Router();
let Course = require('../models/course.model');

router.route('/').get((req, res) => {
    //return all courses and including sorting,ordering and limiting
    //by level = /course?sortBy=level&order=desc&limit=4
    let order = req.query.order ? req.query.order : "asc";
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Course.find()
    .select("-photo")
    .populate("provider")
    .sort([[sortBy, order]])
    .limit(limit)   
      .then(course => res.json(course))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/create').post((req, res) => {
    const newCoursename = new Course(req.body);
  
    newCoursename.save()
      .then(() => res.json('Course added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/:id').get((req, res) => {
    Course.findById(req.params.id)
      .then(course => res.json(course))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  
  router.route('/by/search').post((req, res) => {

    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === "d_tuitionfee") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            }
            if (key === "i_tuitionfee") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            }
             else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    Course.find(findArgs)
        .select("-photo")
        .populate("provider")
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: "Course not found"
                });
            }
            res.json({
                size: data.length,
                data
            });
        });
        
  });

module.exports = router;