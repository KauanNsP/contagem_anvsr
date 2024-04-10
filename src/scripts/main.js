AOS.init();

const dataDoEvento = new Date("Apr 3, 2025 13:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minEmMs);
    const segAteOEvento = Math.floor((distanciaAteOEvento % minEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minAteOEvento}m ${segAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'O aniversário já passou :(';
    }
}, 1000);