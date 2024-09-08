/*
scope ---
scope is current context of excution in which values and expression are visible
 Basicalyy  scope are three type -
 1. Global scope - 
 2.lexical scope
 3.Block scope variable
 4.


 var is not have any block scope and can be re-declaration it only had function scope 
 var are hoisted so they can be used before the declaration .

----------------------------------------------------------

 let create a block scope and re-declaration are not allow or re-assignment is allowed.

 Temproral dead zone  the area in which a variable is not accessiable because it depend on time of execution not position .

 ----------------------------------------------------



*/

//

let a = 100;
let b = 0;
console.log(a,b)


{
    let a = 12;
    let b = 14;
    console.log(a,b)
}
console.log(a,b)
{
    let a = 34;
    let b = 33;
    console.log(a,b)
}

function say (){
    let c = "hello i am rojers"
    console.log(c);
}

say();

for (let i=0;i<5;i++){
    setTimeout(
        () => console.log(i),1000
        )
}

for( var i=0;i<5;i++){
    setTimeout(
    () => console.log(i),1000
    )
}