var geneticAlgorithmConstructor = require('geneticalgorithm')
var mutationModule  = require('./MutationModule')
var crossoverModule = require('./CrossoverModule')
var fitnessModule   = require('./FitnessModule')
var utility = require('./utility')

module.exports =
{
  startEngine: function(inputPopulation, callback)
  {
    var geneticAlgorithm = geneticAlgorithmConstructor({
      mutationFunction:   mutationModule.mutationFunction,
      crossoverFunction:  crossoverModule.crossoverFunction,
      fitnessFunction:    fitnessModule.fitnessFunction,
      population:         inputPopulation,
      populationSize:     100
    })

    for (var i = 0; i < inputPopulation[0].maximum; i++)
      geneticAlgorithm.evolve()

    var bestpheno = geneticAlgorithm.best()
    var bestScore = geneticAlgorithm.bestScore()
    var scoredPopulation = geneticAlgorithm.scoredPopulation()

    var resGeneration
    for (var i = 0; i < scoredPopulation.length; i++)
    {
      if (scoredPopulation[i].score == bestScore)
      {
        resGeneration = i
        break
      }
    }

    var result = {}
    result.phenotype  = bestpheno
    result.score      = bestScore
    result.resGeneration  = resGeneration

    callback(result)
  }
}
