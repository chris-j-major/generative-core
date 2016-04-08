function extend(Clz){
  Clz.prototype.prepare = prepare;
  Clz.prototype.next = next;
  Clz.prototype.skip = skip;
  Clz.prototype.seek = seek;
  Clz.prototype.noMemoGen = Clz.prototype.gen;
  Clz.prototype.gen = gen;
  Clz.prototype.range = range;
  Clz.prototype.random = random;
  Clz.prototype.choose = choose;
}
function prepare(){
  this._pos = 0;
  this._mem = {};
}
function gen(pos){
  if ( !this._mem[pos] ){
    this._mem[pos] = this.noMemoGen( pos );
  }
  return this._mem[pos];
}
function next(){
  this._pos ++;
  return this.gen( this._pos );
}
function skip( n ){
  this._pos += n;
  return this;
}
function seek(n){
  this._pos = n;
  return this;
}
function range(min,max,pos){
  var n = this.random(pos);
  return min + ( n * (max-min));
}
function random(optPos){
  if ( typeof optPos != 'number' ){
    return this.next();
  }else{
    return this.gen( optPos );
  }
}
function choose(options,pos){
  var n = Math.floor(this.range(0,options.length,pos));
  return options[n];
}

module.exports = {
  extend:extend
};
