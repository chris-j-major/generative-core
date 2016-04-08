const assert = require('assert');
const core = require("../index.js");

describe("Reporter", function() {

  describe('ok()', function() {
    it('returns true with no errors or warnings',function(done){
      var r = new core.Reporter();
      assert.ok( r.ok() );
      done();
    });
    it('returns false with errors',function(done){
      var r = new core.Reporter();
      r.error("Dummy");
      assert.ok( !r.ok() );
      done();
    });
    it('returns false with warnings',function(done){
      var r = new core.Reporter();
      r.warn("Dummy");
      assert.ok( !r.ok() );
      done();
    });
  });
  
});
