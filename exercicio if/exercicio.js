//ex-1
let nota1 = (7);
let nota2 = (5);
let nota3 = (9);
let total = (nota1+nota2+nota3);
if (total >= 7){
    console.log('aluno foi aprovado')
}else if(total<7){
    console.log("aluno foi reprovado")
}

//ex-2

let idadeSenai = (18)
if(idadeSenai <= 16){
    console.log(`vc pode se inscrever`)
}

 else {
    console.log(`vc não pode se inscrever`)
}

//ex-3
let valorLivro = (70);
if((valorLivro>50)*0.9){
console.log("vc ganhou desconto")
}else{
    console.log("vc não ganhou desconto")
}

//ex-4
let frequencia = (70);
if(frequencia>=70){
console.log("aluno aprovado")
}else{
    console.log("aluno reprovado")
}

//ex-5

let usuario = {nome:"daniel", Idade:29, turno: "tarde"}
let mensagem = 'bem vindo, ao turno da manha';
let mensagemBoa = 'bem vindo ao turno da tarde';
let mensagem5 = 'bem vindo ao turno da noite';



if(usuario.turno === 'manha'){
    console.log(mensagem);
}

else if(usuario.turno === 'tarde'){
    console.log(mensagemBoa);
}

else {
    console.log(mensagem5);
}


//ex-6

let n1 = 3
let n2 = 3
let n3 = 2
let totalnotas = ((n1+n2+n3)/3)

console.log(totalnotas)

if(totalnotas > 6){
    console.log("aprovado")
}

else if(totalnotas  < 6 & totalnotas == 4 ){
console.log("recuperação")
}
else if(totalnotas < 4){
    console.log("reprovado")
}

//ex-7

let produtos = 5
if(produtos<10){
    console.log(`Temos apenas ${produtos} produtos em estoque, é necessario uma reposição`)
}
else{
    console.log(`não precisa repor o estoque temos ${produtos}produtos ainda`)
}


//ex-8

let not1 = 7
let not2 = 7
let not3 = 7
let totalnootas = ((not1+not2+not3)/3)

console.log(totalnootas)
 
if(totalnootas >=8) {
    console.log("excelente")
}

else if(totalnootas < 7.9 && totalnootas >= 6 ){
console.log("bom")
}
else if(totalnootas < 5.9){
    console.log("melhorar")
}

//ex-9
let matriculadoYesOrNo = "Sim"
let matricula = 400
let resultado = matricula * 0.20
let pobre = matricula - resultado 

if (matriculadoYesOrNo === "Sim" ) {
    console.log(`O valor do curso para quem tem matrícula é de: R$ ${pobre}`);
} else {
    (console.log(`O valor do curso para quem não tem a matrícula é de R$${matricula}.`));

}


//ex-10

function avaliarProjeto(funcionalidade, design, documentacao) {
 
    let media = (funcionalidade + design + documentacao) / 3;
    console.log("nota de:" + media)
  
    if (media >= 8) {
        console.log("Excelente");
    } else if (media >= 6) {
        console.log("Bom");
    } else {
        console.log("Precisa Melhorar");
    }
}


avaliarProjeto(5, 7, 10); 

 //ex-11

 let mo = (9);
 let freque = (75);
 
 if (mo >= 6 && freque >= 75) {
     console.log("Aluno aprovado!");
 } else if (mo >= 4 && mo < 6 && freque >= 75) {
     console.log("Aluno de recuperação!");
 } else {
     console.log("Aluno reprovado!");
 }
 

//ex-12

let temCartao = "sim";

if (temCartao === "sim") {
    let cartaoAtivo ="sim";
    if (cartaoAtivo === "sim") {
        console.log("Acesso permitido.");
    } else {
        console.log("Acesso negado. Cartão inativo.");
    }
} else {
    console.log("Acesso negado. Cartão não encontrado.");
}

//ex-13

let notebooksDisponiveis = 10;
let projetoresDisponiveis = 5;

let notebooksSolicitados = (8);
let projetoresSolicitados = (3);

if (notebooksSolicitados <= notebooksDisponiveis && projetoresSolicitados <= projetoresDisponiveis) {
    console.log("Pedido atendido.");
} else {
    console.log("Necessário fazer reserva para data futura.");
}

//14-ex

let tipoDisciplina = ("obrigatória");

if (tipoDisciplina === "obrigatória") {
    console.log("Matricula confirmada na disciplina obrigatória.");
} else if (tipoDisciplina === "eletiva") {
    let vagasDisponiveis = (2);
    if (vagasDisponiveis > 0) {
        console.log("Matricula confirmada na disciplina eletiva.");
    } else {
        console.log("Não há vagas disponíveis. Coloque seu nome na lista de espera.");
    }
} else {
    console.log("Opção inválida.");
}

//ex-15
let pa1 = (7);
let pa2 = (10);
let pa3 = (6);
let med = (pa1 + pa2 + pa3) / 3;

if (med > 8) {
    console.log("Aluno destacado! Média: " + med);
} else if (med >= 6) {
    console.log("Aluno aprovado! Média: " + med);
} else if (med >= 4) {
    console.log("Aluno de recuperação. Média: " + med);
} else {
    console.log("Aluno reprovado. Média: " + med);
}
 //ex-16

//ex-17

let valorEmprestimo = (3000);
let numeroParcelas = (3);
let taxaJuros = 0.05; 

let valorFinal = valorEmprestimo * Math.pow(1 + taxaJuros, numeroParcelas);
console.log("Valor total a ser pago no final do empréstimo: R$ " + valorFinal.toFixed(2));


//ex-19

let qualidade = ("alta");
let preco = (110);

if (qualidade === "alta" && preco <= 100) {
    console.log("Produto: Ótimo Custo-Benefício");
} else if (qualidade === "alta" && preco > 100) {
    console.log("Produto: Bom");
} else if (qualidade === "media" && preco <= 100) {
    console.log("Produto: Bom");
} else if (qualidade === "media" && preco > 100) {
    console.log("Produto: Regular");
} else if (qualidade === "baixa" && preco <= 100) {
    console.log("Produto: Regular");
} else {
    console.log("Produto: Ruim");
}

//ex-20

let consumo = (55);
let valor;

if (consumo <= 50) {
    valor = consumo * 0.50;
    console.log("Valor da conta: R$ " + valor.toFixed(2));
} else if (consumo <= 150) {
    valor = consumo * 0.75;
    console.log("Valor da conta: R$ " + valor.toFixed(2));
} else if (consumo <= 300) {
    valor = consumo * 1.00;
    console.log("Valor da conta: R$ " + valor.toFixed(2));
} else {
    valor = consumo * 1.20;
    console.log("Valor da conta: R$ " + valor.toFixed(2));
}
