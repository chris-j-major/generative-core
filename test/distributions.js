const assert = require('assert');
const core = require("../index.js");

const instances = {
  seeded:new core.Seeded(576),
  genetic:new core.Genetic("a9e8ac0663dd57ffa59e2b61d150cd121d3369b3214cee4a0f7"+
    "dd6cd6d7aaa62a50d3517d49b1a3069972097b7682d8f7ae909cdae0d2a95e3aa40f434bcd"+
    "01bb814b18e5c0b108323a5a5e3427d6c17feca8a3aab4e0131edb1352a2d746add622a28d"+
    "ae3f8bb1d666dd5916b471045bb1e6f13ca44307ef4f138f854e2ddea67a2e99bc0e9edb1e"+
    "299e4bee67ed4a012a1") /* enough to check the distributions */
};

for ( var key in instances ){
  describe(key, function() {
    var instance = instances[key];

    it('is evenly distributed',function(done){
      var buckets = [0,0,0,0,0,0,0,0,0,0];
      for ( var i=0;i<1000;i++){
        var n = Math.floor(instance.range(0,buckets.length));
        buckets[n]++;
      }

      var max = 0;
      var min = 1000;
      for ( var index in buckets ){
        var total = buckets[index];
        if ( max < total ) max=total;
        if ( min > total ) min=total;
      }
      assert.ok( min > (0.6*max) ,"range "+max+" "+min+"  ["+buckets.join(",")+"]"); /* beleivable */

      done();
    });

  });
};
