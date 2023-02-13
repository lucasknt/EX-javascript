const gorjetas = [];

const valoresConta = [
  20,
  50,
  100,
  150,
  500
];

let totalGorjeta = 0;

for(let i = 0; i < valoresConta.length; i++ ){
  calcGorjeta(valoresConta[i])
}
for(let i = 0; i < gorjetas.length; i++ ){
  totalGorjeta += gorjetas[i]
}

document.getElementById("valcont").innerText = valoresConta;
document.getElementById("valgorj").innerText = gorjetas;
document.getElementById("somagorj").innerText = totalGorjeta;


function calcGorjeta(valorConta){
    switch (true) {
      case valorConta < 50 && valorConta > 0:
        gorjetas.push(valorConta*0.2) 
        break;
      case valorConta >= 50 && valorConta <= 200:
        gorjetas.push(valorConta * 0.15) 
        break;
      case valorConta > 200:
        gorjetas.push(valorConta * 0.10)
        break;
    }
}



  