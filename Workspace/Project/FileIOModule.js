var fileIO  = require('rw')
var path    = require('path')

module.exports =
{
  readFromFile: function(filename, callback)
  {
    fileIO.readFile(path.resolve(__dirname, filename), 'utf8', function(error, data) {
      if (error)
        throw error
      callback(data)
    })
  },
  writeInFile: function(filename, data, callback)
  {
    fileIO.readFile(path.resolve(__dirname, filename), data, 'utf8', function(error) {
      if (error)
        throw error
      callback(data)
    })
  }
}
