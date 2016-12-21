var utility = require('./utility')

module.exports =
{
  mutationFunction: function(phenotype)
  {
    // make a random change to phenotype
    var pheno = JSON.parse(JSON.stringify(phenotype))
    var choose = Math.floor((Math.random() * 10) + 1)
    var randNumber1n = Math.floor((Math.random() * (pheno.nmos)))
    var randNumber1p = Math.floor((Math.random() * (pheno.pmos)))

    if (randNumber1n == randNumber1p)
    {
      if (choose <= 5)
        pheno.nmosTransistors[randNumber1n].srcLeft = pheno.nmosTransistors[randNumber1n].srcLeft ? false : true
      else
        pheno.pmosTransistors[randNumber1p].srcLeft = pheno.pmosTransistors[randNumber1p].srcLeft ? false : true
    }
    else
    {
      if (choose <= 5)
      {
        var element = pheno.nmosTransistors[randNumber1n]
        pheno.nmosTransistors.push(element)
        pheno.nmosTransistors.splice(randNumber1n, 1)
      }
      else
      {
        var element = pheno.pmosTransistors[randNumber1p]
        pheno.pmosTransistors.push(element)
        pheno.pmosTransistors.splice(randNumber1p, 1)
      }
    }

    return pheno
  }
}
