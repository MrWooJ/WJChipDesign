module.exports =
{
  fitnessFunction: function(phenotype)
  {
    var score = 100
    var tempPheno = phenotype

    for (var i = 0; i < tempPheno.nmos; i++)
    {
      if (tempPheno.nmosTransistors[i].srcLeft)
      {
        tempPheno.nmosTransistors[i].source.x = i + 1
        tempPheno.nmosTransistors[i].source.y = 3
        tempPheno.nmosTransistors[i].drain.x = (i + 1) + ((i + 1) / 2)
        tempPheno.nmosTransistors[i].drain.y = 3
      }
      else
      {
        tempPheno.nmosTransistors[i].drain.x = i + 1
        tempPheno.nmosTransistors[i].drain.y = 3
        tempPheno.nmosTransistors[i].source.x = (i + 1) + ((i + 1) / 2)
        tempPheno.nmosTransistors[i].source.y = 3
      }

      if (tempPheno.pmosTransistors[i].srcLeft)
      {
        tempPheno.pmosTransistors[i].source.x = i + 1
        tempPheno.pmosTransistors[i].source.y = 6
        tempPheno.pmosTransistors[i].drain.x = (i + 1) + ((i + 1) / 2)
        tempPheno.pmosTransistors[i].drain.y = 6
      }
      else
      {
        tempPheno.pmosTransistors[i].drain.x = i + 1
        tempPheno.pmosTransistors[i].drain.y = 6
        tempPheno.pmosTransistors[i].source.x = (i + 1) + ((i + 1) / 2)
        tempPheno.pmosTransistors[i].source.y = 6
      }
    }

    var transistors = []
    for (var i = 0; i < tempPheno.nmos; i++)
      transistors.push(tempPheno.nmosTransistors[i])
    for (var i = 0; i < tempPheno.pmos; i++)
      transistors.push(tempPheno.pmosTransistors[i])

    for (var i = 0; i < transistors.length; i++)
    {
      var desId

      for (var j = 0; j < transistors.length; j++)
        if (transistors[i].source.id == transistors[j].id) { desId = j; break; }

      if (transistors[i].source.ofSrc)
      {
        transistors[i].source.A = transistors[i].source.y - transistors[desId].source.y
        transistors[i].source.B = transistors[i].source.x - transistors[desId].source.x
      }
      else
      {
        transistors[i].source.A = transistors[i].source.y - transistors[desId].drain.y
        transistors[i].source.B = transistors[i].source.x - transistors[desId].drain.x
      }

      for (var j = 0; j < transistors.length; j++)
        if (transistors[i].drain.id == transistors[j].id) { desId = j; break; }

      if (transistors[i].drain.ofSrc)
      {
        transistors[i].drain.A = transistors[i].drain.y - transistors[desId].source.y
        transistors[i].drain.B = transistors[i].drain.x - transistors[desId].source.x
      }
      else
      {
        transistors[i].drain.A = transistors[i].drain.y - transistors[desId].drain.y
        transistors[i].drain.B = transistors[i].drain.x - transistors[desId].drain.x
      }
    }

    var crossCounter = 0
    for (var i = 0; i < transistors.length; i++)
    {
      var desSourceId, desDrainId

      for (var j = 0; j < transistors.length; j++)
        if (transistors[i].source.id == transistors[j].id) { desSourceId = j; break; }

      for (var j = 0; j < transistors.length; j++)
        if (transistors[i].drain.id == transistors[j].id) { desDrainId = j; break; }


      for (var k = 0; k < transistors.length; k++)
      {
        if (k == desDrainId || k == desSourceId || k == i)
          continue

        if (transistors[i].source.ofSrc && (!transistors[i].source.checked && !transistors[desSourceId].source.checked) && (((transistors[i].source.A * transistors[k].source.B) - (transistors[i].source.B * transistors[k].source.A)) != 0))
          crossCounter++
        else if (!transistors[i].source.ofSrc && (!transistors[i].source.checked && !transistors[desSourceId].drain.checked) && (((transistors[i].source.A * transistors[k].drain.B) - (transistors[i].source.B * transistors[k].drain.A)) != 0))
          crossCounter++

        if (transistors[i].drain.ofSrc && (!transistors[i].drain.checked && !transistors[desDrainId].source.checked) && (((transistors[i].drain.A * transistors[k].source.B) - (transistors[i].drain.B * transistors[k].source.A)) != 0))
          crossCounter++
        else if (!transistors[i].drain.ofSrc && (!transistors[i].drain.checked && !transistors[desDrainId].drain.checked) && (((transistors[i].drain.A * transistors[k].drain.B) - (transistors[i].drain.B * transistors[k].drain.A)) != 0))
          crossCounter++
      }

      if (transistors[i].source.ofSrc) {
        transistors[i].source.checked = true
        transistors[desSourceId].source.checked = true
      }
      else {
        transistors[i].source.checked = true
        transistors[desSourceId].drain.checked = true
      }

      if (transistors[i].drain.ofSrc) {
        transistors[i].drain.checked = true
        transistors[desDrainId].source.checked = true
      }
      else {
        transistors[i].drain.checked = true
        transistors[desDrainId].drain.checked = true
      }

    }

    transistors = null
    tempPheno = null

    return score - crossCounter
  },

  diversityFunction: function(phenoTypeA, phenoTypeB)
  {
    // diversity check
  }
}
