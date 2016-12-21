module.exports = {
  move: function(arr, old_index, new_index)
  {
    while (old_index < 0)
    old_index += arr.length;
    while (new_index < 0)
    new_index += arr.length
    if (new_index >= arr.length)
    {
      var k = new_index - arr.length
      while ((k--) + 1)
      arr.push(undefined)
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
    return arr
  },

  objectCompare: function (obj1, obj2) {
    //Loop through properties in object 1
    for (var p in obj1) {
      //Check property exists on both objects
      if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

      switch (typeof (obj1[p])) {
        //Deep compare objects
        case 'object':
        if (!this.objectCompare(obj1[p], obj2[p])) return false;
        break;
        //Compare function code
        case 'function':
        if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
        break;
        //Compare values
        default:
        if (obj1[p] != obj2[p]) return false;
      }
    }

    //Check object 2 for any extra properties
    for (var p in obj2) {
      if (typeof (obj1[p]) == 'undefined') return false;
    }
    return true;
  }

}
