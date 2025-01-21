function outerfunction(outervariable){
return function innerFunction(innervariable){
console.log("outer variable;"+outervariable);
console.log("inner variable;"+innervariable);

};
}
 const closure=outerfunction("outervalue");
 closure("innervalue");
