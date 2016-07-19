/************
 * DATABASE *
 ************/
 var mongoose = require('mongoose');
 mongoose.createConnection("mongodb://localhost/tunely");

 var db = require('../models');

// GET /api/albums
function index(req, res) {
  // find all todos in db
  db.Album.find(function handleDBAlbumsListed(err, allAlbums) {
      res.json({ albums: allAlbums });
  });
}

function create(req, res) {
  // FILL ME IN !
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
