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
      fitnessFunction:    fitnessModule.fitnessFunction,
      population:         inputPopulation,
      populationSize:     50
    })

    for (var i = 0; i < inputPopulation.maximum; i++)
      geneticAlgorithm.evolve()

    var bestpheno = geneticAlgorithm.best()
    var bestScore = geneticalgorithm.bestScore()
    var scoredPopulation = geneticalgorithm.scoredPopulation()

    var resGeneration = 0
    for (var i = 0; i < scoredPopulation.length; i++)
      if (scoredPopulation[i].score == bestScore && scoredPopulation[i].phenotype == bestpheno)
      {
        resGeneration = i
        break
      }

    var result = {}
    result.phenotype  = bestpheno
    result.score      = bestScore
    result.resGeneration  = resGeneration

    callback(result)
  }
}
