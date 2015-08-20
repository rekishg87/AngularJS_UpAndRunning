/**
 * Created by Rekish on 8/20/2015.
 */
// server.js (Express 4.0)

var express         = require('express');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var app             = express();

app.use(express.static(__dirname + '/public'));     // Set the static files location /public/img will be /img for users
app.use(morgan('dev'));                             // Log every request to the console
app.use(bodyParser());                              // Pull information from html in POST
app.use(methodOverride());                          // Simulate DELETE and PUT

var router = express.Router();

var notes = [
    {id: 1, label: 'First Note', author: 'Shyam'},
    {id: 2, label: 'Second Note', author: 'Brad'},
    {id: 3, label: 'Middle Note', author: 'Someone'},
    {id: 4, label: 'Last Note', author: 'Shyam'},
    {id: 5, label: 'Really the last Note', author: 'Shyam'}
];
var lastId = 6;

router.get('/note', function(req, res) {
    res.send(notes);
});
router.post('/note', function(req, res) {
    var note = req.body;
    note.id = lastId;
    lastId++;
    notes.push(note);
    res.send(note);
});

