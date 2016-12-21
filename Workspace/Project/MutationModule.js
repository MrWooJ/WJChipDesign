var utility = require('./utility')

module.exports =
{
  mutationFunction: function(phenotype)
  {
    // make a random change to phenotype
    var choose = Math.floor((Math.random() * 10) + 1)
    var randNumber1n = Math.floor((Math.random() * (phenotype.nmos)))
    var randNumber1p = Math.floor((Math.random() * (phenotype.pmos)))

    if (randNumber1n == randNumber1p)
    {
      if (choose <= 5)
        phenotype.nmosTransistors[randNumber1n].srcLeft = phenotype.nmosTransistors[randNumber1n].srcLeft ? false : true
      else
        phenotype.pmosTransistors[randNumber1p].srcLeft = phenotype.pmosTransistors[randNumber1p].srcLeft ? false : true
    }
    else
    {
      if (choose <= 5)
      {
        var element = phenotype.nmosTransistors[randNumber1n]
        phenotype.nmosTransistors.push(element)
        phenotype.nmosTransistors.splice(randNumber1n, 1)
      }
      else
      {
        var element = phenotype.pmosTransistors[randNumber1p]
        phenotype.pmosTransistors.push(element)
        phenotype.pmosTransistors.splice(randNumber1p, 1)
      }
    }

    return phenotype
  }
}
