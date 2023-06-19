// Projeto Salário / Infração

// import entradaDados from 'readline-sync';
const entradaDadosDados = require('readline-sync');

console.log("----- Salário / Infração ------\n");
console.log("Escolha uma das opções:");

console.log(" 1 - Listar os salários minimos de 2010  à 2023.");
console.log(" 2 - Listar os índices de IPCA de 2010  à 2023.");
console.log(" 3 - Comparação entre o percentual de aumento salarial e o IPCA.\n");

// Criando entradas

let salario_inflacao = [
    {ano: 2010, ipca: 5.91, salario: 510.00},
    {ano: 2011, ipca: 6.50, salario: 545.00},
    {ano: 2012, ipca: 5.84, salario: 622.00},
    {ano: 2013, ipca: 5.91, salario: 678.00},
    {ano: 2014, ipca: 6.41, salario: 724.00},
    {ano: 2015, ipca: 10.67, salario: 788.00},
    {ano: 2016, ipca: 6.29, salario: 880.00},
    {ano: 2017, ipca: 2.95, salario: 937.00},
    {ano: 2018, ipca: 3.75, salario: 954.00},
    {ano: 2019, ipca: 4.31, salario: 998.00},
    {ano: 2020, ipca: 4.52, salario: 1045.00},
    {ano: 2021, ipca: 5.13, salario: 1100.00},
    {ano: 2022, ipca: 5.79, salario: 1212.00},
    {ano: 2023, ipca: 3.94, salario: 1320.00}
];

let valor = entradaDadosDados.question("Digite o numero a sua escolha:");
let valor1 = Number(valor);

switch (valor1) {
    case 1:
        console.log("----- opcao 1 - Histórico de Salário Mínino-----\n");  // tirar
        console.log("Ano ---- Salário");
        for (let i of salario_inflacao){
            let anoSalario = i.ano;
            let valorsalario = i.salario;
            
            console.log(anoSalario + " --> " + valorsalario.toFixed(2).replace(".",","));
            i++
        }
        break   
    case 2:
        console.log("----- opcao 2  -----\n");
        console.log("Ano ---- IPCA");
        for (let i of salario_inflacao){
            let anoIpca = i.ano;
            let valorIpca = i.ipca;
            
            console.log(anoIpca + " --> " + valorIpca.toFixed(2).replace(".",",")+ "%");
            i++
        }
        break
    case 3:
        for(let i = 0; i <= salario_inflacao.length-1; i++){
            let ano = salario_inflacao[i].ano;
            let salario = salario_inflacao[i].salario;
            let percentualCrescimento;
            let crescimentoFormatado;

            if(i > 0){
                let salarioAnterior = salario_inflacao[i-1].salario;
                let diferenca = salario - salarioAnterior;

                percentualCrescimento = (diferenca / salarioAnterior) * 100;

                crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".",",")+"%";
            }
            else {
                crescimentoFormatado = "-";
            }

            let ipca = salario_inflacao[i].ipca;

            let salarioFormatado = salario.toFixed(2).replace(".",",");
            let ipcaFormatado = ipca.toFixed(2).replace(".",",");

            console.log("\n");
            console.log("Ano: "+ano);
            console.log("Salário: "+"R$ "+salarioFormatado);
            console.log("Crescimento Salarial: "+crescimentoFormatado);
            console.log("IPCA: "+ipcaFormatado+"%");
        }
        break;
    default:
        console.log("Opção inválida!");
}

 