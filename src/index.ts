
function greet(value : string) : string {
    return `Hello ${value} Welcome`
}

const value : string = "TypeScript"
console.log(greet(value))

type valueType = string | number
let value1 : valueType = "today it will learn it typeScript"

const Hello = (value : valueType): valueType => {
  return `Hello ${value} Welcome`
}

console.log(Hello(value1))