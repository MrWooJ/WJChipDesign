var prettyjson    = require('prettyjson')
var fileIOModule  = require('./FileIOModule')
var IOFormatter   = require('./IOFormatter')

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

if (!options.input || !options.output || !options.number)
  throw new Error('Usage: node Runnable [--visual | -v] [--debug | -d] [--input | -v input.txt] [--output | -o output.txt] [--number | n #i]')

var prettyjsonOptions = {
  keysColor:    'cyan',
  dashColor:    'yellow',
  stringColor:  'white',
  numberColor:  'white',
  defaultIndentation: 4
}

fileIOModule.readFromFile(options.input, function(input){
  IOFormatter.prepareInput(input, function(data){
    // Pass to Main Engine

    if (options.debug)
      console.log(prettyjson.render(data[options.number], prettyjsonOptions))
  })
})
