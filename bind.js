
var module = {
    x: 1,
    getX: function() {
        return this.x
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX());

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());

