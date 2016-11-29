module.exports =
{
  crossoverFunction: function(phenotypeA, phenotypeB)
  {
    var randNumb = Math.floor(Math.random() * (count + 1))

    var A_nmosArray = phenotypeA.nmosTransistors
    var A_pmosArray = phenotypeA.pmosTransistors
    var B_nmosArray = phenotypeB.nmosTransistors
    var B_pmosArray = phenotypeB.pmosTransistors

    phenotypeA.nmosTransistors = []
    phenotypeB.nmosTransistors = []
    phenotypeA.pmosTransistors = []
    phenotypeB.pmosTransistors = []

    if (randNumb < Math.floor(count/2))
    {
      for (var i = 0; i < phenotypeA.nmos; i++)
      {
        if (i < randNumb)
        {
          phenotypeA.nmosTransistors.push(A_nmosArray[i])
          phenotypeB.nmosTransistors.push(B_nmosArray[i])
        }
        else
        {
          phenotypeA.nmosTransistors.push(B_nmosArray[i])
          phenotypeB.nmosTransistors.push(A_nmosArray[i])
        }
      }
    }
    else
    {
      for (var i = 0; i < phenotypeA.pmos; i++)
      {
        if (i < (count-randNumb))
        {
          phenotypeA.pmosTransistors.push(A_pmosArray[i])
          phenotypeB.pmosTransistors.push(B_pmosArray[i])
        }
        else
        {
          phenotypeA.pmosTransistors.push(B_pmosArray[i])
          phenotypeB.pmosTransistors.push(A_pmosArray[i])
        }
      }
    }

    return [ phenotypeA , phenotypeB ]
  }
}
