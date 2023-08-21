const data = require('./database');

// 2 - Contar a quantidadede personagens através do sexo

function coutGender9(gender){
    if(gender === 'M' || gender === 'F') {
        return data.characters.filter((character) => character.gender === gender)
    } else {
        return 'Valor inválido';
    }
}

console.log(coutGender9('M'));