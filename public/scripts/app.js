/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */
$(document).ready(function() {
  console.log('app.js loaded!');

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    dataType: 'json',
    success: onSuccess
  });

  function onSuccess(albums) {
    var records = albums.albums;
    records.forEach(function(album) {
      renderAlbum(album);
    });
  }
});

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  var albumHtml   = $("#album-template").html();
  var templateFunction = Handlebars.compile(albumHtml);
  var html = templateFunction(album);
  $("#albums").prepend(html);
}
