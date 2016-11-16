var geneticAlgorithmConstructor = require('geneticalgorithm')
var competitionModule = require('./CompetitionBModule')
var mutationModule  = require('./MutationModule')
var crossoverModule = require('./CrossoverModule')
var fitnessModule   = require('./FitnessModule')

module.exports =
{
  startEngine: function(inputPopulation, callback)
  {
    var geneticAlgorithm = geneticAlgorithmConstructor({
      mutationFunction:   mutationModule.mutationFunction,
      crossoverFunction:  crossoverModule.crossoverFunction,
      doesABeatBFunction: competitionModule.competitionFunction,
      fitnessFunction:    fitnessModule.fitnessFunction,
      population:         [ inputPopulation ],
      populationSize:     inputPopulation.maximum
    });

    geneticAlgorithm.evolve()
    var best = geneticAlgorithm.best()

  }
}
