var geneticAlgorithmConstructor = require('geneticalgorithm')
var competitionModule = require('./CompetitionBModule')
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
  crossoverFunction:  crossoverModule.crossoverFunction,
  doesABeatBFunction: competitionModule.competitionFunction,
  fitnessFunction:    fitnessModule.fitnessFunction,
  population: [ firstPhenotype ],
  populationSize:     200
});

geneticAlgorithm.evolve()
var best = geneticAlgorithm.best()
