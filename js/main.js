//ejercicio 1

const saludo = function(name, lastname, age){
    let person = `Hola mi nombre es ${name} ${lastname} y mi edad es ${age}.`
    return console.log(person)
}

saludo('Pamela', 'Salas' , '35')
//ejercicio 2
const sumaCubos =function(num1, num2, num3){
    let suma = Math.pow(num1,3) + Math.pow(num2,3) + Math.pow(num3,3)
    return console.log(`La suma de los cubos de ${num1}, ${num2} y ${num3} es igual a ${suma} `)
}

sumaCubos(5, 4 , 2)

//ejercicio 3
 const tipoValor = function(valor){
     tipo = typeof(valor)
     return console.log ( `El valor "${valor}" es del tipo  "${tipo}".`)
 }
 tipoValor( 'rica')

 //ejercicio 4
 const sumat = function(...numb){
     return numb.reduce( (prev, current) =>{
         return prev + current
     })
 }
 console.log(sumat(1,5,8)) 

  //ejercicio 5
  const noString = function( ...valores){
      valores.forEach(valor =>{
          let tipoValu = typeof(valor)
          if( tipoValu !== 'string'){
            return console.log(valor)
          }
      })
      }
  noString( 1 ,'pa',5, 'sueter',8)

  //ejercicio 6
  const numers =[1, 8, 5, 4, 25]

  const  maxMin =function(...mumers){
      let max =Math.max(...numers),
        min = Math.min(...numers)
    return console.log(`El mayor numero es ${max} y el menor es ${min}`)
  }
  maxMin()

//ejercicio 7
 const numFone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const fone = function(){
    numberNew = numFone.slice(0,3).join('')
    numberTwo = numFone.slice(4,10).join('')
    return console.log(`Es (${numberNew}) ${numberTwo} `)
}
fone()

//ejercicio 8

const findNums = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]
findNums.forEach( valor =>{
    valorM = Math.max(...valor)
    return console.log(valorM )
})
//ejercicio 9

const palabra =function(nota1){
    pIndex = nota1.length-1
    pLetra = nota1[nota1.length-1]
    return console.log(`En esta palabra la letra "${pLetra}" tiene el indice "${pIndex}"`)
}
palabra('mar')

//ejercicio 10
const obj = { a: 1, b: 2 }
const sumValues = obj => Object.values(obj)
 console.log(sumValues(obj))
 
//ejercicio 11
const data =[
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]

  const sumaBud =function(){
      let suma =0
      data.forEach(user =>{
          suma+= user.budget
      })
      return console.log(`La suma total es de ${suma}`)
  }
  sumaBud()

  //ejercicio 12
  const students =[
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ]
  const nameStudents = function(){
    let names =[]
    students.forEach(student =>{
        names+= student.name
    })
    return console.log(Array.from(names))
  }
  nameStudents()

  //ejercicio 13
  const datosN = {
    likes: 2,
    dislikes: 3,
    followers: 10
  }
  
  //ejercicio 14
