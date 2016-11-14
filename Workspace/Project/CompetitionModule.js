var fitnessModule = require('./FitnessModule')
var configuration = require('./Configuration.json')

module.exports =
{
  competitionFunction: function(phenoTypeA, phenoTypeB)
  {
    // if too genetically similar to consider
    if ( fitnessModule.diversityFunction(phenoTypeA, phenoTypeB) > configuration.MINIMUM_SIMILARITY ) {
      return false;
    }

    // if phenoTypeA isn't better than phenoTypeB
    if ( fitnessModule.fitnessFunction(phenoTypeA) < fitnessModule.fitnessFunction(phenoTypeB) ) {
      return false;
    }

    // else phenoTypeA beats phenoTypeB
    return true;
  }
};
