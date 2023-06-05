'use strict';

let bicycle = [
  {
    name: 'Canyon Ultimate CF Slx',
    weight: '6.78 Kg'
  },

  {
    name: 'Rose X-Lite Six Disc',
    weight: '6.95 Kg'
  },

  {
    name: 'Sarto asola',
    weight: '5.74 Kg'
  },

  {
    name: 'Bianchi Specialissima',
    weight: '6.85 kg'
  },

  {
    name: 'Canyon Ultimate CF Slx',
    weight: '6.73 Kg'
  },

  {
    name: 'AX Lightness VIAL Evo Ultra',
    weight: '4.42 Kg'
  },
];

let lightweight = bicycle[0]; // Assume inizialmente che la prima bicicletta sia la più leggera

for (let i = 1; i < bicycle.length; i++) {
  let { name, weight } = bicycle[i];
  let numeredWeight = parseFloat(weight);

  if (numeredWeight < parseFloat(lightweight.weight)) {
    lightweight = bicycle[i];
  }
}

console.log(`La bici più leggera è: ${lightweight.name}, ${lightweight.weight}`);
