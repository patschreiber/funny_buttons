(function() { "use strict";
  function Building() {
    this.width  = 100
    this.height = 100
    this.lighting = ""
  }

  function WarRoom() {
    this.name = "War Room"
  }

  WarRoom.prototype = new Building()

  function Study() {
    this.name = "Study"
  }

  Study.prototype = new Building()

  function Factory() {
    this.name = "Factory"
  }

  Factory.prototype = new Building()

})();