module.exports =
{
  crossoverFunction: function(phenotypeA, phenotypeB)
  {
    var cloneA = JSON.parse(JSON.stringify(phenotypeA))
    var cloneB = JSON.parse(JSON.stringify(phenotypeB))

    var choose = Math.floor((Math.random() * 10) + 1)
    var randNumb1, randNumb2
    do {
      randNumb1 = Math.floor((Math.random() * (phenotypeA.nmos)))
    } while (randNumb1 == (phenotypeA.nmos - 1))
    do {
      randNumb2 = Math.floor((Math.random() * (phenotypeA.pmos)))
    } while (randNumb2 == (phenotypeA.pmos - 1))

    var A_nmosArray = JSON.parse(JSON.stringify(phenotypeA.nmosTransistors))
    var A_pmosArray = JSON.parse(JSON.stringify(phenotypeA.pmosTransistors))
    var B_nmosArray = JSON.parse(JSON.stringify(phenotypeB.nmosTransistors))
    var B_pmosArray = JSON.parse(JSON.stringify(phenotypeB.pmosTransistors))

    cloneA.nmosTransistors = []
    cloneA.nmosTransistors.length = 0
    cloneB.nmosTransistors = []
    cloneB.nmosTransistors.length = 0
    cloneA.pmosTransistors = []
    cloneA.pmosTransistors.length = 0
    cloneB.pmosTransistors = []
    cloneB.pmosTransistors.length = 0

    if (choose <= 5)
    {
      for (var i = 0; i < phenotypeA.nmos; i++)
      {
        if (i <= randNumb1)
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
        if (i <= randNumb2)
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
