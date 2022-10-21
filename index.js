const sobremesas =[
    {nome: "Brigadeiro Tradicional", valor: 3.00, custo: 1.00, categoria: "Tradicional", ingredientePrincipal: "Leite Condensado"},
    {nome: "Bolo no Pote", valor: 12.50, custo: 4.50, categoria: "Tradicional", ingredientePrincipal: "Farinha de Trigo"},
    {nome: "Brownie Vegano", valor: 8.00, custo: 1.80, categoria: "Veganos", ingredientePrincipal: "Açúcar Mascavo"},
    {nome: "Bolo Especial", valor: 60.00, custo: 23.00, categoria: "Zero Lactose", ingredientePrincipal: "Leite Condensado Zero"}
]


for (let i= 0; i< sobremesas.length; i++){
    console.log(sobremesas[i])
}

function relatorioSobremesas(obj) {
    return obj
}
console.log(relatorioSobremesas(sobremesas))


//  const somenteVeganos = (produtoVegano1 && produtoVegano2 && produtoVegano3)
//  const categoriaEmpresa = (categoriaBrigadeiro, categoriaBolo, categoriaBrownie)

// //O que vai aparecer na tela:
// console.log("O valor médio da sobremesa é: ", valorMedioProdutos)
// console.log ("Todas as sobremesas são veganas? ", somenteVeganos)

// console.log("-------------- MENU NA COLHER DOCERIA ------------")

// //PRODUTO 1
// console.log("Nosso primeiro produto é: ", sobremesa1.toUpperCase())
// console.log("Esse produto custa: ","R$" + valorBrigadeiro + ".00")
 //console.log("Esse é um produto vegano? ", sobremesa1.includes("Vegano"))
// console.log("Seu ingrediente principal é: ", ingredientePrincipal1)

// //PRODUTO 2
// console.log("Nosso segundo produto é: ", sobremesa2.toUpperCase())
// console.log("Esse produto custa: ", "R$" + valorBoloNoPote + "0")
// console.log("Esse é um produto vegano? ", sobremesa2.includes("Vegano"))
// console.log("Seu ingrediente principal é: ", ingredientePrincipal2)

// //PRODUTO 3
// console.log("Nosso terceiro produto é: ", sobremesa3.toUpperCase())
// console.log("Esse produto custa: ", "R$" + valorBrownie + ".00")
// console.log("Esse é um produto vegano? ", sobremesa3.includes("Vegano"))
// console.log("Seu ingrediente principal é: ", ingredientePrincipal3)

//  let principaisSobremesas = []
//  if (sobremesa1.produtoVegano === true){
//     principaisSobremesas.push(sobremesa1)
//  } else if (sobremesa2.produtoVegano === true){
//     principaisSobremesas.push(sobremesa2)
//  } else if (sobremesa3.produtoVegano === true){
//             principaisSobremesas.push(sobremesa3)
//  } else {
//     console.log ("Produtos nõ veganos, não adicionados")
//  }
// console.log(principaisSobremesas)

// let sobremesasVeganas = []
// if (sobremesa1.produtoVegano === true){
//     sobremesasVeganas.push(sobremesa1)
//     alert("Sobremesas não veganas não foram adicionadas")
// } else if (sobremesa2.produtoVegano === true){
//     sobremesasVeganas.push(sobremesa2)
//     alert("Sobremesas não veganas não foram adicionadas")
// } else if (sobremesa3.produtoVegano === true){
//     sobremesasVeganas.push(sobremesa3)
//     alert("Sobremesas não veganas não foram adicionadas")
// } else { (sobremesa1 || sobremesa2 || sobremesa3 === false)
//     alert("Sobremesas não veganas não foram adicionada")
// }
// console.log (sobremesasVeganas)