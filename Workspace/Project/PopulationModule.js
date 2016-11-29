module.exports =
{
  populationFunction: function(data)
  {
    var populationArray = []
    var cloneData = {}

    // 1st population: Source First
    cloneData = data
    for (var i = 0; i < data.nmosTransistors.length; i++)
      cloneData.nmosTransistors[i].srcLeft = true
    for (var i = 0; i < data.pmosTransistors.length; i++)
      cloneData.pmosTransistors[i].srcLeft = true
    populationArray.push(cloneData)

    // 2nd population: One by One Source-Drain First
    cloneData = data
    for (var i = 0; i < data.nmosTransistors.length; i++)
      if (i % 2 == 0)
        cloneData.nmosTransistors[i].srcLeft = true
      else
        cloneData.nmosTransistors[i].srcLeft = false
    for (var i = 0; i < data.pmosTransistors.length; i++)
      if (i % 2 == 0)
        cloneData.pmosTransistors[i].srcLeft = true
      else
        cloneData.pmosTransistors[i].srcLeft = false
    populationArray.push(cloneData)

    // 3rd population: One by One Drain-Source First
    cloneData = data
    for (var i = 0; i < data.nmosTransistors.length; i++)
      if (i % 2 == 0)
        cloneData.nmosTransistors[i].srcLeft = false
      else
        cloneData.nmosTransistors[i].srcLeft = true
    for (var i = 0; i < data.pmosTransistors.length; i++)
      if (i % 2 == 0)
        cloneData.pmosTransistors[i].srcLeft = false
      else
        cloneData.pmosTransistors[i].srcLeft = true
    populationArray.push(cloneData)

    // 4th population: Rnadomized Source-Drain
    cloneData = data
    for (var i = 0; i < data.nmosTransistors.length; i++)
      cloneData.nmosTransistors[i].srcLeft = (Math.random() >= 0.5)
    for (var i = 0; i < data.pmosTransistors.length; i++)
      cloneData.pmosTransistors[i].srcLeft = (Math.random() >= 0.5)
    populationArray.push(cloneData)

    return populationArray
  }
}
