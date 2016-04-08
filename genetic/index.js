function Genetic(code){
  this.prepare();
  this.bytes = [];
  for (var i = 0; i < code.length; i+=2){
      var n = code.substr(i,2);
      this.bytes.push( parseInt(n,16) );
  }
}

Genetic.prototype.gen = function(pos){
  var index = pos % this.bytes.length;
  return this.bytes[index]/0xFF;
}

require("../common.js").extend( Genetic );

module.exports = Genetic;
