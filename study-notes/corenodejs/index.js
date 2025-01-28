#!/usr/bin/env node
console.log(process.argv)
const printFileMoves = async (pokeename)=>{
    const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokeename}`
    )
    const pokemon = await response.json()
    const moves = pokemon.moves.map(({move})=> move.name)

    console.log(moves.slice(0,5));
    
};

printFileMoves("pikachu");