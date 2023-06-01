'use strict';

let student = [
    
    {
      id: 213,
      name: "Marco della Rovere",
      grades: 78
    },
    {
      id: 110,
      name: "Paola Cortellessa",
      grades: 96
    },
    {
      id: 250,
      name: "Andrea Mantegna",
      grades: 48
    },
    {
      id: 145,
      name: "Gaia Borromini",
      grades: 74
    },
    {
      id: 196,
      name: "Luigi Grimaldello",
      grades: 68
    },
    {
      id: 102,
      name: "Piero della Francesca",
      grades: 50
    },
    {
      id: 120,
      name: "Francesca da Polenta",
      grades: 84
    }

];

let listaNomiMaiuscolo = student.map(student => student.name.toLocaleUpperCase());
console.log(listaNomiMaiuscolo);

//estrae il singolo array
let gradesOverSeventy = student.filter(student => student.grades > 70);
console.log(gradesOverSeventy);
//cicla singolo ogetto dell'array 
for (let i=0; i<gradesOverSeventy.length; i++){
  console.log(gradesOverSeventy[i]);
};

// estra un singolo array con i 2 oggetti corrispondenti
let gradesAndId = student.filter(student => student.grades > 70 && student.id > 120);
console.log(gradesAndId);
// mi estrapola i 2 oggetti fuori dall'array
for (let j=0 ; j<gradesAndId.length; j++){
  console.log(gradesAndId[j]);
};

// ho provato a fare diversi console.log per vedere come si comporta in diverse parti.