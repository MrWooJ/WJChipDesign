module.exports =
{
  crossoverFunction: function(phenotypeA, phenotypeB)
  {
    var cloneA = JSON.parse(JSON.stringify(phenotypeA))
    var cloneB = JSON.parse(JSON.stringify(phenotypeB))

    var choose = Math.floor((Math.random() * 10) + 1)
    var randNumb
    do {
      randNumb = Math.floor((Math.random() * (phenotypeA.nmos)))
    } while (randNumb == (phenotypeA.nmos - 1))

    var A_nmosArray = JSON.parse(JSON.stringify(phenotypeA.nmosTransistors))
    var A_pmosArray = JSON.parse(JSON.stringify(phenotypeA.pmosTransistors))
    var B_nmosArray = JSON.parse(JSON.stringify(phenotypeB.nmosTransistors))
    var B_pmosArray = JSON.parse(JSON.stringify(phenotypeB.pmosTransistors))

    cloneA.nmosTransistors = []
    cloneB.nmosTransistors = []
    cloneA.pmosTransistors = []
    cloneB.pmosTransistors = []

    if (choose <= 5)
    {
      for (var i = 0; i < phenotypeA.nmos; i++)
      {
        if (i <= randNumb)
        {
          cloneA.nmosTransistors.push(A_nmosArray[i])
          cloneB.nmosTransistors.push(B_nmosArray[i])
        }
        else
        {
          cloneA.nmosTransistors.push(B_nmosArray[i])
          cloneB.nmosTransistors.push(A_nmosArray[i])
        }
      }

      cloneA.pmosTransistors = A_pmosArray
      cloneB.pmosTransistors = B_pmosArray
    }
    else
    {
      for (var i = 0; i < phenotypeA.pmos; i++)
      {
        if (i <= randNumb)
        {
          cloneA.pmosTransistors.push(A_pmosArray[i])
          cloneB.pmosTransistors.push(B_pmosArray[i])
        }
        else
        {
          cloneA.pmosTransistors.push(B_pmosArray[i])
          cloneB.pmosTransistors.push(A_pmosArray[i])
        }
      }

      cloneA.nmosTransistors = A_nmosArray
      cloneB.nmosTransistors = B_nmosArray
    }

    return [ cloneA , cloneB ]
  }
}
