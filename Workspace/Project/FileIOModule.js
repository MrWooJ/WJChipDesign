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
    this.readFromFile(path.resolve(__dirname, filename), function(result) {
      result += data
      fileIO.writeFile(path.resolve(__dirname, filename), result, function(error) {
        if (error)
          throw error
      })
    })
  }
}
