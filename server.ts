declare const require;

var express = require('express');
var bodyparser = require('body-parser');
var _ = require('lodash');
import { lessonsData } from './src/app/shared';

var app = express();
app.use(express.static('.'));
app.use(bodyparser.text());

const lessons = lessonsData;

app.route('/lessons')
  .get((req, res) => {
    // var filtered = lessons;
    // if (req.query.search) {
    //   console.log(req.query.search);
    //   filtered = filtered.filter(lesson => lesson.description.indexOf(req.query.search) !== -1);
    // }
    // res.status(200).json(filtered);
    res.status(200).json(lessons);
  })
  .post((req, res) => {
    lessons.push(req.body);
    res.status(200).send();
  });
app.route('/lessons/:lessonID')
  .get((req, res) => {
    const lessonId = req.params.lessonID;
    var filtered = lessons;
    filtered = _.filter(lessons, lesson => lesson.id === lessonId);
    res.status(200).json(filtered);
  })
  .delete((req, res) => {
    const lessonId = req.params.lessonID;
    console.log('deleteing lesson', lessonId);
    const index = _.find(lessons, lesson => lesson.id === lessonId);
    lessons.splice(index, 1);
    res.status(200).send();
  });
var server = app.listen(8080, () => {
  console.log('server running at http://localhost:' + server.address().port);
})
