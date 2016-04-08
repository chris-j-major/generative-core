const assert = require('assert');
const core = require("../index.js");

const instances = {
  seeded:new core.Seeded(576),
  genetic:new core.Genetic("f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f83fb948f400f")
};

const choices = "0123456789abcdef".split("");

for ( var key in instances ){
  describe(key, function() {
    var instance = instances[key];

    describe('next()', function() {
      it('generate 1000 floats',function(done){
        for ( var i=0;i<1000;i++){
          var n = instance.next();
          assert.ok(n >= 0.0, "n>=0.0");
          assert.ok(n <= 1.0, "n<=1.0");
        }
        done();
      });
    });

    describe('gen()', function() {
      it('generate 1000 floats repetably',function(done){
        var store = [];
        for ( var i=0;i<1000;i++){
          var n = instance.gen(i);
          store.push(n);
        }
        for ( var i=0;i<1000;i++){
          assert.equal( instance.gen(i) , store[i] );
        }
        done();
      });
    });

    describe('choose()', function() {
      it('generate 1000 choices',function(done){
        for ( var i=0;i<1000;i++){
          var n = instance.choose(choices);
          assert.ok( choices.indexOf(n) != -1)
        }
        done();
      });
    });

    describe('range()', function() {
      it('generate 1000 ranged Ints',function(done){
        for ( var i=0;i<1000;i++){
          var n = instance.range(1,6);
          assert.ok(n >= 1, "n>=1");
          assert.ok(n <= 6, "n<=6");
        }
        done();
      });
    });

  });
};
