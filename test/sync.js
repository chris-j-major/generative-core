const assert = require('assert');
const core = require("../index.js");

const instances = {
  seeded:[
    new core.Seeded(576),
    new core.Seeded(576)],
  genetic:[
    new core.Genetic("f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f"),
    new core.Genetic("f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f")]
};

for ( var key in instances ){
  describe(key, function() {
    var instance = instances[key];

    describe('next()', function() {
      it('test 1000 ints',function(done){
        for ( var i=0;i<1000;i++){
          var a = instance[0].range(0,100,i);
          var b = instance[1].range(0,100,i);
          assert.equal(a,b);
        }
        done();
      });
    });

  });
};
