/* Mostra horário do sistema */
function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hrr = data.getHours()
    let min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hrr} horas e ${min} minutos`
    if (hrr > 5.30 && hrr < 12) {
        img.src = "leonardoPaisagemManh0.WebP"
        document.body.style.background = '#4fbfde'
    } else if (hrr > 11.59 && hrr < 18.30) {
        img.src = "leonardoPaisagemTarde2.WebP"
        document.body.style.background = '#ffbf6b'
    }  else {
        img.src = "leonardoPaisagemNoite3.WebP"
        document.body.style.background = '#162d55'
    }
}

/* Busca temperatura e velocidade do vento através da API Open-Meteo */
function buscarClima() {
    const lat = -3.3096; // Latitude de Itapecuru Mirim
    const lon = -44.2489; // Longitude de Itapecuru Mirim
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        .then(response => response.json()) // Converte a resposta em JSON
        .then(data => { // Manipula os dados recebidos
            const temperatura = data.current_weather.temperature; 
            const vento = data.current_weather.windspeed;
            const resultadoDiv = document.getElementById('resultado'); 
            resultadoDiv.innerHTML = `<p>Temperatura atual: ${temperatura}°C</p><p>Velocidade do vento: ${vento} km/h</p>`;
        })
        .catch(error => {
            console.error('Erro ao buscar dados do clima:', error);
        });   
}  

