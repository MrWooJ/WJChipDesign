module.exports =
{
  populationFunction: function(data)
  {
    var populationArray = []

    // 1st population: Source First
    var cloneData1 = {}
    cloneData1 = data
    for (var i = 0; i < data.nmosTransistors.length; i++)
      cloneData1.nmosTransistors[i].srcLeft = true
    for (var i = 0; i < data.pmosTransistors.length; i++)
      cloneData1.pmosTransistors[i].srcLeft = true
    populationArray.push(cloneData1)

    // 2nd population: One by One Source-Drain First
    var cloneData2 = {}
    cloneData2 = data
    for (var i = 0; i < data.nmosTransistors.length; i++)
      if (i % 2 == 0)
        cloneData2.nmosTransistors[i].srcLeft = true
      else
        cloneData2.nmosTransistors[i].srcLeft = false
    for (var i = 0; i < data.pmosTransistors.length; i++)
      if (i % 2 == 0)
        cloneData2.pmosTransistors[i].srcLeft = true
      else
        cloneData2.pmosTransistors[i].srcLeft = false
    populationArray.push(cloneData2)

    // 3rd population: One by One Drain-Source First
    var cloneData3 = {}
    cloneData3 = data
    for (var i = 0; i < data.nmosTransistors.length; i++)
      if (i % 2 == 0)
        cloneData3.nmosTransistors[i].srcLeft = false
      else
        cloneData3.nmosTransistors[i].srcLeft = true
    for (var i = 0; i < data.pmosTransistors.length; i++)
      if (i % 2 == 0)
        cloneData3.pmosTransistors[i].srcLeft = false
      else
        cloneData3.pmosTransistors[i].srcLeft = true
    populationArray.push(cloneData3)

    // 4th population: Rnadomized Source-Drain
    var cloneData4 = {}
    cloneData4 = data
    for (var i = 0; i < data.nmosTransistors.length; i++)
      cloneData4.nmosTransistors[i].srcLeft = (Math.random() >= 0.5)
    for (var i = 0; i < data.pmosTransistors.length; i++)
      cloneData4.pmosTransistors[i].srcLeft = (Math.random() >= 0.5)
    populationArray.push(cloneData4)

    return populationArray
  }
}
