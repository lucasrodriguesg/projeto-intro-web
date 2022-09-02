const sobremesa1 = ("brigadeiro")
let valorBrigadeiro = (3.00)
let valorCustoBrigadeiro = (1.00)
const categoriaBrigadeiro = ("Sobremesas")
const produtoVegano1 = (sobremesa1.includes("vegano"))
let ingredientePrincipal1 = ["Leite Condensado"]

const sobremesa2 = ("Bolo no Pote")
let valorBoloNoPote = (12.50)
let valorCustoBolo = (4.50)
const categoriaBolo = ("Sobremesas")
const produtoVegano2 = (sobremesa2.includes("vegano"))
let ingredientePrincipal2 = ["Farinha de Trigo"]

const sobremesa3 = ("Brownie Vegano")
let valorBrownie = (8.00)
let valorCustoBrownie = (1.80)
const categoriaBrownie = ("Sobremesas")
const produtoVegano3 = (sobremesa3.includes("Vegano"))
let ingredientePrincipal3 = ["Açúcar Mascavo"]

const valorMedioProdutos = ((valorBrigadeiro + valorBoloNoPote + valorBrownie)/3)
const somenteVeganos = (produtoVegano1 && produtoVegano2 && produtoVegano3)
const categoriaEmpresa = (categoriaBrigadeiro, categoriaBolo, categoriaBrownie)

//O que vai aparecer na tela:
console.log("O valor médio da sobremesa é: ", valorMedioProdutos)
console.log ("Todas as sobremesas são veganas? ", somenteVeganos)

console.log("-------------- MENU NA COLHER DOCERIA ------------")

//PRODUTO 1
console.log("Nosso primeiro produto é: ", sobremesa1.toUpperCase())
console.log("Esse produto custa: ","R$" + valorBrigadeiro + ".00")
console.log("Esse é um produto vegano? ", sobremesa1.includes("Vegano"))
console.log("Seu ingrediente principal é: ", ingredientePrincipal1)

//PRODUTO 2
console.log("Nosso segundo produto é: ", sobremesa2.toUpperCase())
console.log("Esse produto custa: ", "R$" + valorBoloNoPote + "0")
console.log("Esse é um produto vegano? ", sobremesa2.includes("Vegano"))
console.log("Seu ingrediente principal é: ", ingredientePrincipal2)

//PRODUTO 3
console.log("Nosso terceiro produto é: ", sobremesa3.toUpperCase())
console.log("Esse produto custa: ", "R$" + valorBrownie + ".00")
console.log("Esse é um produto vegano? ", sobremesa3.includes("Vegano"))
console.log("Seu ingrediente principal é: ", ingredientePrincipal3)