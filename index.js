const sobremesa1 = {
    nome1 : "brigadeiro",
    valorBrigadeiro : 3.00,
    valorCustoBrigadeiro : 1.00,
    categoriaBrigadeiro : "Sobremesas",
    produtoVegano : false,
    ingredientePrincipal1 : "Leite Condensado"
}
const sobremesa2 = {
    nome2 : "Bolo no Pote",
    valorBoloNoPote : 12.50,
    valorCustoBolo : 4.50,
    categoriaBolo : "Sobremesas",
    produtoVegano : false,
    ingredientePrincipal2 : ["Farinha de Trigo"]
}
const sobremesa3 = {
    nome3: "Brownie Vegano",
    valorBrownie : 8.00,
    valorCustoBrownie : 1.80,
    categoriaBrownie : "Sobremesas",
    produtoVegano : true,
    ingredientePrincipal3 : "Açúcar Mascavo"
}

 //const valorMedioProdutos = ((valorBrigadeiro) + (valorBoloNoPote) + (valorBrownie)/3)
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

let sobremesasVeganas = []
if (sobremesa1.produtoVegano === true){
    sobremesasVeganas.push(sobremesa1)
    alert("Sobremesas não veganas não foram adicionadas")
} else if (sobremesa2.produtoVegano === true){
    sobremesasVeganas.push(sobremesa2)
    alert("Sobremesas não veganas não foram adicionadas")
} else if (sobremesa3.produtoVegano === true){
    sobremesasVeganas.push(sobremesa3)
    alert("Sobremesas não veganas não foram adicionadas")
} else { (sobremesa1 || sobremesa2 || sobremesa3 === false)
    alert("Sobremesas não veganas não foram adicionada")
}
console.log (sobremesasVeganas)