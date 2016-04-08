var random = require('random-seed');

function Seeded(seed){
  this.prepare();
  this.random = random.create(seed).random;
}

Seeded.prototype.gen = function(){
  return this.random();
}

require("../common.js").extend( Seeded );

module.exports = Seeded;
