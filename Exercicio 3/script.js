/*EXERCÍCIO 3
=========================
Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. 
Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
EXEMPLO:
Preço: R$60,00
À vista: R$54,00
Ou 3x de: R$20,00
=========================
*/


 let preço = 60
 let aVista = 10 // por cento//
 let totalAvista = 0

 totalAvista = (preço - (aVista / 100) * preço)

 console.log(`Preço: ${preço},00`);
 console.log(`Preço com desconto: R$ ${totalAvista}`);
 console.log(`Ou 3x de: R$: ${preço / 3},00`);
 
 

 
 