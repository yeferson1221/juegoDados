import { ServicePlayer } from './services/services.js';


const servicePlayer = new ServicePlayer();

const formPlayer = document.querySelector('#form-player')

var listPlayer = [];

const getPlayers = async () => {

    listPlayer = await servicePlayer.getPlayers();
    const playersContainer = document.querySelector('#players-container')
    for (let i in listPlayer) {
        const div = document.createElement("div");
        div.setAttribute("class", "players");
        const playerTemplate = `
        
            <h2 id="player-name${parseInt(i) + 1}">${listPlayer[i].name}</h2>
            <img src="images/dice6.png" id="img${parseInt(i) + 1}" data-id="${listPlayer[i]._id}" />
       
        `
        div.innerHTML = playerTemplate;
        playersContainer.append(div);
    }


}
await getPlayers();

var listWinnerPlayer = [];
const getWinnerPlayers = async () => {
    console.log(listWinnerPlayer)
    listWinnerPlayer = await servicePlayer.getWinnerPlayers();
    const winnerPlayersContainer = document.querySelector('#winner-players-container')

    //cada que se ejecuta esta funcion mira si hay elementos hijos y los borra
    //para no duplicar la informacion 
    while (winnerPlayersContainer.firstChild) {
        winnerPlayersContainer.removeChild(winnerPlayersContainer.firstChild);
    }

    for (let i in listWinnerPlayer) {
        const div = document.createElement("div");
        div.setAttribute("class", "winner");
        const winnerPlayerTemplate = `
        
            <h2 id="winner-player-name">Ganador  tiro [${parseInt(i) + 1}]: -- ${listWinnerPlayer[i].name}</h2>
        `
        div.innerHTML = winnerPlayerTemplate;
        console.log("haisjdoie")
        winnerPlayersContainer.append(div);
    }

}


console.log(getWinnerPlayers())

console.log(document.getElementById('img1'));
const deletePlayer = (id) => {
    servicePlayer.deletePlayer(id);
    // this._playerService.eliminarPlayer(id).subscribe(data => {
    //     this.toastr.error('El producto fue eliminado con exito', 'Producto Eliminado');
    //     this.obtenerPlayer();
    // }, error => {
    //     console.log(error);
    // })
}

const tirar = document.querySelector("#tirar");
tirar.addEventListener("click", () => {
    let ran1 = Math.floor((Math.random() * 6) + 1)
    let ranImg1 = "images/dice" + ran1 + ".png";
    document.getElementById('img1').setAttribute('src', ranImg1);

    let ran2 = Math.floor((Math.random() * 6) + 1);
    let ranImg2 = "images/dice" + ran2 + ".png";
    document.getElementById("img2").setAttribute("src", ranImg2);

    const winner = {
        id: '',
        name: '',
        tiro: ''
    }
    if (ran1 > ran2) {
        document.querySelector('h3').innerHTML = `El jugador ${document.getElementById('player-name1').innerHTML} ganó`;
        winner.id = document.getElementById('img1').getAttribute('data-id');
        winner.name = document.getElementById('player-name1').innerHTML;
        winner.tiro = ran1;

    }
    else if (ran1 < ran2) {
        document.querySelector('h3').innerHTML = `El jugador ${document.getElementById('player-name2').innerHTML} ganó`
        winner.id = document.getElementById('img2').getAttribute('data-id');
        winner.name = document.getElementById('player-name2').innerHTML;
        console.log(document.getElementById('player-name2').innerHTML)
        winner.tiro = ran2;
    }

    else if (ran1 == ran2) {
        document.querySelector('h3').innerHTML = "Empate!";
    }
    console.log(winner);
    servicePlayer.saveWinnerPlayer(winner);
    getWinnerPlayers()

})