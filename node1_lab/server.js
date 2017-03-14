var http = require('http');

var urlParser = require('url'); // Adds urlParser

var server = http.createServer().listen(3001);

console.log('I\'m listening on port: 3001');

server.on('request', function(request, response) {
  console.log(request.url);

var urlObj  = urlParser.parse( request.url ); //
var pathname = urlObj.pathname; // parsing our the important info in the url


console.log("requested: " + pathname);

  response.writeHead(200, {'Content-Type': 'text/html'});

if (pathname === "/fun-times") {
	response.write('<html><h1>Fun Times</h1>')
	response.write('<ul><li>Rock Hounding</li><li>Video Games</li><li>Board Games</li><li>Painting</li><li>Costuming</li></ul></html>');
} else if (pathname === "/movies") {
	response.write('<html><h1>Favorite Movies</h1>')
	response.write('<ul><li>The Adventures of Baron Muchausen</li><li>The Brdcage</li><li>Guardians of the Galaxy</li><li>Death to Smoochy</li><li>Pacific Rim</li></ul></html>');
} else if (pathname === "/portfolio") {
	response.write('<html><h1>Coming Soon</h1></html>')
} else {
  response.write('<html>Good story, my friend.');
  response.write('<script>console.log(\'Sooooooo\');</script>');
  response.write('</html>');
};

  response.end();

});