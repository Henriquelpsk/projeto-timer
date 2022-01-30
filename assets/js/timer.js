let minutos = 0;
let segundos = 0;
let milesimos = 0;
let intervalo;

const botaoIniciar = document.querySelector('.botaoIniciar');
const botaoPausar = document.querySelector('.botaoPausar');
const botaoZerar = document.querySelector('.botaoZerar');
const textoTela = document.querySelector('.textoForm');
const milesimosTela = document.querySelector('.milesimos');
const segundosTela = document.querySelector('.segundos');
const minutosTela = document.querySelector('.minutos');

botaoIniciar.addEventListener('click', function () {
  clearInterval(intervalo);
  intervalo = setInterval(contador, 10);
  textoTela.classList.remove('vermelho');
})

botaoPausar.addEventListener('click', function () {
  clearInterval(intervalo);
  textoTela.classList.add('vermelho');
})

botaoZerar.addEventListener('click', function () {
  clearInterval(intervalo);
  milesimos = 0;
  segundos = 0;
  minutos = 0;
  milesimosTela.innerHTML = '00';
  segundosTela.innerHTML = '00';
  minutosTela.innerHTML = '00';
  textoTela.classList.remove('vermelho');
})
function contador() {
  milesimos++;
  if (milesimos < 9) {
    milesimosTela.innerHTML = `0${milesimos}`;
  }

  if (milesimos > 9) {
    milesimosTela.innerHTML = milesimos;
  }

  if (milesimos > 99) {
    milesimos = 0;
    segundos++;
    milesimosTela.innerHTML = '00';
    if (segundos <= 9) {
      segundosTela.innerHTML = `0${segundos}`;
    } else {
      segundosTela.innerHTML = segundos;
    }
  }

  if (segundos > 59) {
    segundos = 0;
    minutos++;
    segundosTela.innerHTML = '00';
    if (minutos <= 9) {
      minutosTela.innerHTML = `0${minutos}`;
    } else {
      minutosTela.innerHTML = minutos;
    }
  }
}