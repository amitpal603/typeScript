const value : string | number = "Amit Pal"

let apiRequest : "Pending" | "Success" | "Error" = "Pending"

apiRequest = "Success"
console.log(apiRequest)
let airPlaSite : "ali" | "Window" | "Middle" = "Middle"

const orders = ["20" , '34' , "90" , "44"]

let currentId : string | undefined;

for (const order of orders) {
    if(order === "34"){
        currentId = order
        break
    }
}

console.log(currentId)