var utility = require('./utility')

module.exports =
{
  mutationFunction: function(phenotype)
  {
    // make a random change to phenotype
    var clonePheno = JSON.parse(JSON.stringify(phenotype))
    var choose = Math.floor((Math.random() * 10) + 1)
    var randNumber1 = Math.floor((Math.random() * (phenotype.nmos)))
    var randNumber2 = Math.floor((Math.random() * (phenotype.nmos)))

    if (randNumber1 == randNumber2)
    {
      if (choose <= 5)
        clonePheno.nmosTransistors[randNumber1].srcLeft = clonePheno.nmosTransistors[randNumber1].srcLeft ? false : true
      else
        clonePheno.pmosTransistors[randNumber1].srcLeft = phenotype.pmosTransistors[randNumber1].srcLeft ? false : true
    }
    else
    {
      if (choose <= 5)
        utility.move(clonePheno.nmosTransistors, randNumber1, randNumber2)
    }

    return clonePheno
  }
}
