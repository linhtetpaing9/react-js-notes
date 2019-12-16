var a1 = [ 1, 2, 3, 4 ];

var a2 = [ ...a1, 5, 6 ];

console.log(a1, a2);


var props = {
    active: true,
    height: 200
}
console.log({...props});


function myFunc(...[x, y, z]){
    return x * y * z;
}

function myFuncVal(x, y, z){
    return x * y * z;
}

console.log(myFunc(1, 2, 3));
console.log(myFunc(1, 2, 3, 5));
console.log(myFuncVal(1, 2, 3, 5));


var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
console.log(clonedObj);
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
// Object { foo: "baz", x: 42, y: 13 }