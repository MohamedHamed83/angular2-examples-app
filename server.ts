declare const require;


var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
import { lessonsData } from './src/app/shared';


var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());


const lessons = lessonsData;


app.route('/api/lessons')
  .get((req, res) => {

    let filtered = lessons;

    if (req.query.search) {
      console.log(req.query.search);
      filtered = filtered.filter(
        lesson => lesson.description.indexOf(req.query.search) !== - 1);
    }

    res.status(200).json(filtered);
  })
  .post((req, res) => {
    lessons.push(req.body);
    res.status(200).send();
  });

app.route('/api/lessons/:lessonId')
  .delete((req, res) => {
    const lessonId = req.params.lessonId;
    console.log('deleting lesson ', lessonId);
    const index = _.find(lessons,
      lesson => lesson.id === lessonId
    );
    lessons.splice(index, 1);
    res.status(200).send();
  });


app.route('/api/flakylessons')
  .get((req, res) => {

    const num = Math.round(Math.random() * 10);

    if (num % 2 === 0) {
      res.status(200).json(lessons);
    }
    else {
      res.status(500).send();
    }

  });




app.route('/api/delayedlessons')
  .get((req, res) => {

    setTimeout(() => {

      let filtered = lessons;

      if (req.query.search) {
        console.log(req.query.search);
        filtered = filtered.filter(
          lesson => lesson.description.indexOf(req.query.search) !== - 1);
      }

      res.status(200).json(filtered);

    }, 1000);

  });


var server = app.listen(8080, function () {
  console.log('Server running at http://localhost:' + server.address().port);
});
