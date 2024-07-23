let pokemonList = [
    {name: "Bulbasaur",height: 7,types: ["grass", "poison"]},
    {name: "Charmander",height: 6,types: ["fire"]},
    {name: "Squirtle",height: 5,types: ["water"]}
];
     
for (let i = 0; i < pokemonList.length; i++)
{
    // check if the pokemon is big 
    if (pokemonList[i].height > 6)  
    {
        // print name, height and note "wow, that's big!" including a new line
        document.write(pokemonList[i].name +" (height: " + pokemonList[i].height + ") wow, that's big!" + "<br>"); 
    }
    // check if the pokemon is small
    else if (pokemonList[i].height < 6)
    {
        document.write(pokemonList[i].name +" (height: " + pokemonList[i].height +")" + "<br>" );
    }
    //otherwise it is normal
    else 
    {
        // print name and height including a new line
        document.write(pokemonList[i].name +" (height: " + pokemonList[i].height + ") " + "<br>" );
    }
}
