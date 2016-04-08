function Reporter(){
  this._err = [];
  this._warn = [];
}
Reporter.prototype.warn = function(n){
  this._warn.push(n);
}
Reporter.prototype.error = function(err){
  this._err.push(err);
}
Reporter.prototype.callback = function(f){
  const r = this;
  return function(err,data){
    if ( err ){
      r.error(err);
      f(null);
    }else{
      f(data);
    }
  }
}
Reporter.prototype.stats = function(){
  return { errors:this._err.length , warnings:this._warn.length };
}
Reporter.prototype.toString = function(){
  var s = "";
  if ( this._err.length == 0 ){
    s += "No errors";
  }else{
    s += this._warn.length+" errors\n";
    s+= this._err.map(function(err){
      return err.toString();
    }).join("\n");
  }
  s+="\n\n";
  if ( this._warn.length == 0 ){
    s += "No warnigns";
  }else{
    s += this._warn.length+" warnings\n";
    s+= this._warn.map(function(w){
      return w.toString();
    }).join("\n");
  }
  s+="\n\n";
  return s;
}
Reporter.prototype.ok = function(){
  return (this._err.length == 0 )&&(this._warn.length == 0);
}

Reporter.console = new Reporter();
Reporter.console.warn = function(n){
  console.log(n);
  this._warn.push(n);
}

Reporter.console.error = function(n){
  console.error(n);
  this._err.push(n);
}

module.exports = Reporter;
