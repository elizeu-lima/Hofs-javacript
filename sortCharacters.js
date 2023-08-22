const data = require('./database');

// 4 - Ordenar os personagens através de um parâmetro

const ordered = data.characters.sort((a, b) => a.name.localeCompare(b.name));


console.log(ordered);