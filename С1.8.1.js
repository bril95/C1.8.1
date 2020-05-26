jQuery.prototype.html = function(){
    this.each(element => element.innerHTML())
  return this;
}