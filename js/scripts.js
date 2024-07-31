let pokemonList = [
    {name: "Bulbasaur",height: 7,types: ["grass", "poison"]},
    {name: "Charmander",height: 6,types: ["fire"]},
    {name: "Squirtle",height: 5,types: ["water"]}
];

function myLoopFunction(pokemonList) 
{
    // check if the pokemon is big 
    if (pokemonList.height > 6)  
    {
        console.log(pokemonList.name +" (height: " + pokemonList.height + ") wow, that's big!" ); 
    }
    //otherwise it is normal
    else 
    {
        // print name and height including a new line
        console.log(pokemonList.name +" (height: " + pokemonList.height + ") " );
    }
}

pokemonList.forEach(myLoopFunction);
     
