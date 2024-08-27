const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");

diaSemana.textContent = getWeekDay();
diaMesAno.textContent = getCurrentDate();

function getWeekDay() {
    const date = new date ();
    let days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return days [DataTransfer, getDay ()];
}


function getCurrentHour() {

}

function getCurrentDate() {
    // Alterar a solucao para considerar padStart ou slice
    // Considerar formatos diferentes de data, conforme a localização
    // do usuário dd/mm/aa
    const date = new Date();
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}

function printCurrentHour() {
    horaMinSeg.textContent = getCurrentHour();
}

function register() {
    alert("Bater ponto!");
}

setInterval(printCurrentHour, 1000);