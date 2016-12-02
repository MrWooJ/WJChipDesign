module.exports =
{
  mutationFunction: function(phenotype)
  {
    // make a random change to phenotype
    var count = Math.floor((phenotype.nmos + phenotype.pmos)/2)
    var randNumb = Math.floor(Math.random() * count * 2)

    if (randNumb < count)
      phenotype.nmosTransistors[randNumb].srcLeft = !phenotype.nmosTransistors[randNumb].srcLeft
    else
      phenotype.pmosTransistors[randNumb-count].srcLeft = !phenotype.pmosTransistors[randNumb-count].srcLeft

    return phenotype
  }
}
