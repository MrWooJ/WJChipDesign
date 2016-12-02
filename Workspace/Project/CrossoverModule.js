module.exports =
{
  crossoverFunction: function(phenotypeA, phenotypeB)
  {
    var count = Math.floor((phenotypeA.nmos + phenotypeA.pmos)/2)
    var randNumb
    do {
      randNumb = Math.floor(Math.random() * count * 2)
    } while (randNumb == 0 || randNumb == ((count * 2) - 1))

    var A_nmosArray = phenotypeA.nmosTransistors
    var A_pmosArray = phenotypeA.pmosTransistors
    var B_nmosArray = phenotypeB.nmosTransistors
    var B_pmosArray = phenotypeB.pmosTransistors

    phenotypeA.nmosTransistors = []
    phenotypeB.nmosTransistors = []
    phenotypeA.pmosTransistors = []
    phenotypeB.pmosTransistors = []

    if (randNumb < count)
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

      phenotypeA.pmosTransistors = A_pmosArray
      phenotypeB.pmosTransistors = B_pmosArray
    }
    else
    {
      for (var i = 0; i < phenotypeA.pmos; i++)
      {
        if (i < (randNumb - count))
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

      phenotypeA.nmosTransistors = A_nmosArray
      phenotypeB.nmosTransistors = B_nmosArray      
    }

    return [ phenotypeA , phenotypeB ]
  }
}
