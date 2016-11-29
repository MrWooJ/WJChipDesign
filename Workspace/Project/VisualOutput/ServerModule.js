var express = require('express')

module.exports =
{
  runServer: function(inputData)
  {
    var app = express()

    app.get('/', function (req, res) {
      res.header("Access-Control-Allow-Origin", "*");
    })

    app.get('/result', function(req, res) {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(inputData)
    })

    app.listen(8090, function () {
      console.log('Example app listening on port 3000!')
    })
  }
}
