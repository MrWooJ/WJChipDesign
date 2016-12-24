module.exports =
{
  fitnessFunction: function(phenotype)
  {
    var tempPheno = JSON.parse(JSON.stringify(phenotype))
    var score = 100000
    var crossCounter = 0
    var transistors = []

    for (var i = 0; i < tempPheno.nmos; i++)
    {
      if (tempPheno.nmosTransistors[i].srcLeft)
      {
        tempPheno.nmosTransistors[i].source.x = i + 1.0
        tempPheno.nmosTransistors[i].source.y = 3.0
        tempPheno.nmosTransistors[i].drain.x = (i + 1) + 0.5
        tempPheno.nmosTransistors[i].drain.y = 3.0
      }
      else
      {
        tempPheno.nmosTransistors[i].drain.x = i + 1.0
        tempPheno.nmosTransistors[i].drain.y = 3.0
        tempPheno.nmosTransistors[i].source.x = (i + 1) + 0.5
        tempPheno.nmosTransistors[i].source.y = 3.0
      }
    }

    for (var i = 0; i < tempPheno.pmos; i++)
    {
      if (tempPheno.pmosTransistors[i].srcLeft)
      {
        tempPheno.pmosTransistors[i].source.x = i + 1.0
        tempPheno.pmosTransistors[i].source.y = 1.0
        tempPheno.pmosTransistors[i].drain.x = (i + 1) + 0.5
        tempPheno.pmosTransistors[i].drain.y = 1.0
      }
      else
      {
        tempPheno.pmosTransistors[i].drain.x = i + 1.0
        tempPheno.pmosTransistors[i].drain.y = 1.0
        tempPheno.pmosTransistors[i].source.x = (i + 1) + 0.5
        tempPheno.pmosTransistors[i].source.y = 1.0
      }
    }

    for (var i = 0; i < tempPheno.nmos; i++)
      transistors.push(JSON.parse(JSON.stringify(tempPheno.nmosTransistors[i])))
    for (var i = 0; i < tempPheno.pmos; i++)
      transistors.push(JSON.parse(JSON.stringify(tempPheno.pmosTransistors[i])))

    var lines = []

    for (var i = 0; i < transistors.length; i++)
    {
      var desId

      for (var j = 0; j < transistors.length; j++)
        if (transistors[i].source.id == transistors[j].id) { desId = j; break; }

      if (desId == undefined)
        return 0

      if (transistors[i].source.ofSrc && !transistors[i].source.ck)
      {
        transistors[i].source.A = transistors[i].source.y - transistors[desId].source.y
        transistors[i].source.B = transistors[i].source.x - transistors[desId].source.x
        transistors[i].source.ck = true
        transistors[desId].source.ck = true
        var model = {}
        model.A = transistors[i].source.A
        model.B = transistors[i].source.B
        lines.push(model)
      }
      else if (!transistors[i].source.ofSrc && !transistors[i].source.ck)
      {
        transistors[i].source.A = transistors[i].source.y - transistors[desId].drain.y
        transistors[i].source.B = transistors[i].source.x - transistors[desId].drain.x
        transistors[i].source.ck = true
        transistors[desId].drain.ck = true
        var model = {}
        model.A = transistors[i].source.A
        model.B = transistors[i].source.B
        lines.push(model)
      }

      for (var j = 0; j < transistors.length; j++)
        if (transistors[i].drain.id == transistors[j].id) { desId = j; break; }

      if (desId == undefined)
        return 0

      if (transistors[i].drain.ofSrc && !transistors[i].drain.ck)
      {
        transistors[i].drain.A = transistors[i].drain.y - transistors[desId].source.y
        transistors[i].drain.B = transistors[i].drain.x - transistors[desId].source.x
        transistors[i].drain.ck = true
        transistors[desId].source.ck = true
        var model = {}
        model.A = transistors[i].drain.A
        model.B = transistors[i].drain.B
        lines.push(model)
      }
      else if (!transistors[i].drain.ofSrc && !transistors[i].drain.ck)
      {
        transistors[i].drain.A = transistors[i].drain.y - transistors[desId].drain.y
        transistors[i].drain.B = transistors[i].drain.x - transistors[desId].drain.x
        transistors[i].drain.ck = true
        transistors[desId].drain.ck = true
        var model = {}
        model.A = transistors[i].drain.A
        model.B = transistors[i].drain.B
        lines.push(model)
      }
    }

    var crossCounter = 0
    for (var i = 0; i < lines.length; i++)
      for (var j = i + 1; j < lines.length; j++)
        if (((lines[i].A * lines[j].B) - (lines[i].B * lines[j].A)) != 0)
          crossCounter++

    return (score - crossCounter)
  },

  diversityFunction: function(phenoTypeA, phenoTypeB)
  {
    // diversity check
  }
}
