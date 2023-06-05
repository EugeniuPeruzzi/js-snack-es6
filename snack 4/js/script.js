'use strict';
let squadre = [];


let nomiSquadre = ['Milan', 'Juventus', 'Inter', 'Verona' , 'Vicenza' , 'Venezia' , 'Pescara', 'Catanzaro'];

nomiSquadre.forEach((nomeSquadra) => {

  let squadra = {
    nome: nomeSquadra,
    puntiFatti: 0,
    falliSubiti: 0
  };


  squadra.puntiFatti = Math.floor(Math.random() * 100);
  squadra.falliSubiti = Math.floor(Math.random() * 50);

  squadre.push(squadra);
});


let nomiEFalli = squadre.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

console.log(nomiEFalli);
