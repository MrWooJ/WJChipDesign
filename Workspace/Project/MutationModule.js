module.exports =
{
  mutationFunction: function(phenotype)
  {
    // make a random change to phenotype
    var count = phenotype.nmos + phenotype.pmos
    var randNumb = Math.floor(Math.random() * (count + 1))

    if (randNumb < Math.floor(count/2))
      phenotype.nmosTransistors[randNumb].srcLeft = !phenotype.nmosTransistors[randNumb].srcLeft
    else
      phenotype.pmosTransistors[count-randNumb].srcLeft = !phenotype.pmosTransistors[count-randNumb].srcLeft

    return phenotype
  }
}
