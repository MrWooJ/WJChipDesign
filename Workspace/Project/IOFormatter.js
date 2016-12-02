var fileIO  = require('./FileIOModule')
var path    = require('path')

module.exports =
{
  prepareInput: function(input, callback)
  {
    var dataArray = []
    var inputArray = input.split('\n')
    for (var i = 0; i < inputArray.length - 1;)
    {
      var model = {}
      model.maximum = parseInt(inputArray[i], 10)
      var cmosArray = inputArray[i+1].split(' ')
      model.pmos = parseInt(cmosArray[0], 10)
      model.nmos = parseInt(cmosArray[1], 10)

      model.nmosTransistors = []
      model.pmosTransistors = []
      for (var n = 0; n < model.nmos + model.pmos; n++)
      {
        var j = n + i + 2
        var transistorArray = inputArray[j].split(' ')
        var trans = {}
        trans.id = n

        trans.source = {}
        trans.source.id = parseInt(transistorArray[0], 10)
        trans.source.ofSrc = true
        if (transistorArray[1] === '1')
          trans.source.ofSrc = false

        trans.drain = {}
        trans.drain.id = parseInt(transistorArray[2], 10)
        trans.drain.ofSrc = true
        if (transistorArray[3] === '1')
          trans.drain.ofSrc = false

        if (n < model.nmos)
          model.nmosTransistors.push(trans)
        else
          model.pmosTransistors.push(trans)
      }

      dataArray.push(model)
      i += model.pmos + model.nmos + 2
    }
    callback(dataArray)
  },

  prepareOutputText: function(result, callback)
  {
    var outputString = ''
    var firstSign = `${result.generationNumber}\n${result.intersectionCount}\n`
    var nmosTrans = ''
    var pmosTrans = ''
    for (var i = 0; i < result.nmos; i++)
    {
      var direction = parseInt(result.nmosTransistors[i].ofSrc, 10)
      nmosTrans += `${result.nmosTransistors[i].id} ${direction}`
    }
    nmosTrans += '\n'

    for (var i = 0; i < result.pmos; i++)
    {
      var direction = parseInt(result.pmosTransistors[i].ofSrc, 10)
      pmosTrans += `${result.pmosTransistors[i].id} ${direction}`
    }
    pmosTrans += '\n'

    outputString = firstSign + nmosTrans + pmosTrans
    callback(outputString)
  },

  prepareOutputCyto: function(result, callback)
  {
    callback(result)
  }
}
