


function soma (a , b){
    return a + b

}

function verifica(r){
    if(r %2 == 0){
        console.log("numero par")
    }else{
        console.log("numero impar")
    }
}
function multiplica(a,b){
    return a * b
}

let res = soma(1, 4)
verifica(res)
let res2 = multiplica(3, 4)
verifica(res2)
console.log(res, res2)


