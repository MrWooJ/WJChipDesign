$(function(){ // on dom ready

  $.ajax({
    url: 'http://localhost:8090/result', //the URL to your node.js server that has data
    dataType: 'text',
    cache: false
  }).done(function(data){
    var obj = JSON.parse(data)
    var cy = cytoscape({
      container: document.getElementById('cy'),
      boxSelectionEnabled: obj.boxSelectionEnabled,
      autounselectify: obj.autounselectify,
      zoomingEnabled: obj.zoomingEnabled,
      userZoomingEnabled: obj.userZoomingEnabled,
      panningEnabled: obj.panningEnabled,
      userPanningEnabled: obj.userPanningEnabled,

      style: obj.style,
      elements: obj.elements,
      layout: obj.layout
    })})
  }
)
