function fun1(){

}

console.log(fun1())

//armazernar em uma variavel
const fn2 = function(){
}

//armazernar em um array
const array = [function(a, b) {return a + b}, fun1(), fn2()]

console.log(array[0] (2,3))

//armazenar em um atributo de objeto
const obj = {}

obj.falar = function(a, b) {return a * b}

console.log(obj.falar(3,2));

//passar function como param

function run(func)  {
    func()
}

run(function () {
    console.log('testando...')
})

//Uma function pode retornar/conter uma function

 function soma(a,b) {
     return function (c) {
         console.log(a + b + c);    
     }
     
 }
console.log('testando function dentro de outra')

 soma(3,4)(2)
 console.log('2 - testando function dentro de outra')

 console.log('testando com const');
 
 const cincoMais = soma(2,3)

 cincoMais(4)
