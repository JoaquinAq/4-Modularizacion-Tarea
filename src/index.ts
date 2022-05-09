import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Clase Lun 02/05 (Tarea)</h1>
<div>
 Ejercicios propuestos
 <br> A - Cálculo de potencia
 <br> B - Cantidad de divisores
 <br>
 <br> Adiccional: función esMultiplo (True/False)
</div>`;
console.clear();

function calcPot(base: number, exponent: number): void {
  let result: number = 1;

  if (exponent === 0) {
    result = 1;
  } else {
    let i: number;
    for (i = 1; i <= exponent; i++) {
      result = result * base;
    }
  }
  let msj: string = `${base} ^ ${exponent} = ${result}`;
  console.log(msj);
}

function esMultiplo(num1: number, num2: number): boolean {
  if (num2 % num1 === 0) {
    return true;
  } else {
    return false;
  }
}

function cantidadDeDivisores(num1: number) {
  let result: number = 0;

  for (let i = 1; i <= num1; i++) {
    if (esMultiplo(i, num1) === true) {
      result++;
    }
  }

  let msj: string = `El número ${num1} tiene ${result} divisores`;
  console.log(msj);
}

//---> Ejecución <---

let MSJ: string = `Elija opción \n A-Cálculo de potencia \n B-Cantidad de divisores`;
let option: string | null = String(prompt(MSJ));

switch (option.toUpperCase()) {
  case `A`:
    {
      let base: number | null = Number(prompt(`Ingrese base`));
      let exponent: number = Number(prompt(`Ingrese exponente`));
      calcPot(base, exponent);
    }
    break;
  case `B`: {
    let num1: number | null = Number(
      prompt(`Ingrese número para saber cantidad de divisores`)
    );
    cantidadDeDivisores(num1);
    break;
  }
}
