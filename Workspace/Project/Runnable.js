var prettyjson    = require('prettyjson')
var serverModule  = require('./VisualOutput/ServerModule')
var fileIOModule  = require('./FileIOModule')
var IOFormatter   = require('./IOFormatter')
var population    = require('./populationModule')
var mainEngine    = require('./MainEngine')

const commandLineArgs = require('command-line-args')

const optionDefinitions =
[
  { name: 'visual', alias: 'v', type: Boolean, defaultValue: false},
  { name: 'debug',  alias: 'd', type: Boolean, defaultValue: false},
  { name: 'input',  alias: 'i', type: String, multiple: false},
  { name: 'output', alias: 'o', type: String, multiple: false},
  { name: 'number', alias: 'n', type: Number, multiple: false}
]

const options = commandLineArgs(optionDefinitions)

if (!options.input || !options.output)
  throw new Error('Usage: node Runnable [--visual | -v] [--debug | -d] [--input | -i input.txt] [--output | -o output.txt] [--number | -n #i]')

var prettyjsonOptions = {
  keysColor:    'cyan',
  dashColor:    'yellow',
  stringColor:  'white',
  numberColor:  'white',
  defaultIndentation: 4
}

fileIOModule.readFromFile(options.input, function(input){
  IOFormatter.prepareInput(input, function(data){

    if (options.number)
    {
      var pop = population.populationFunction(data[options.number - 1])
      mainEngine.startEngine(pop, function(result){

        IOFormatter.prepareOutputText(result, function(result){
          fileIOModule.writeInFile(options.output, result, function(error){})
        })

        if (options.debug)
          console.log(prettyjson.render(result, prettyjsonOptions))
      })
    }
  })
})
