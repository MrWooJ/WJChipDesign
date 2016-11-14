var geneticAlgorithmConstructor = require('geneticalgorithm')
var mutationModule  = require('./MutationModule')
var crossoverModule = require('./CrossoverModule')
var fitnessModule   = require('./FitnessModule')
var fileIOModule    = require('./FileIOModule')

var firstPhenotype =
{
  dummyKey : "dummyValue"
  // enter phenotype data here
}

var geneticAlgorithm = geneticAlgorithmConstructor({
  mutationFunction:   mutationModule.mutationFunction,
  crossoverFunction: crossoverModule.crossoverFunction,
  fitnessFunction: fitnessModule.fitnessFunction,
  population: [ firstPhenotype ]
});

geneticAlgorithm.evolve()
var best = geneticAlgorithm.best()
