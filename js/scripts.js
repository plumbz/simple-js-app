let pokemonRepository = (function (){

    let pokemonList = [
        {name: "Bulbasaur",height: 7,types: ["grass", "poison"]},
        {name: "Charmander",height: 6,types: ["fire"]},
        {name: "Squirtle",height: 5,types: ["water"]}
    ]
  
    function getAll (){
        return pokemonList;
    }

   function add (pokemon) { 
        pokemonList.push(pokemon);
   }

   return {
        add: add,
        getAll: getAll

   }
        
       
})();

function myLoopFunction(pokemonList) 
{
    // check if the pokemon is big 
    if (pokemonList.height > 6)  
    {
        // print name, height and note "wow, that's big!" including a new line
        document.write(pokemonList.name +" (height: " + pokemonList.height + ") wow, that's big!"+ "<br>");
    }
    //otherwise it is normal
    else 
    {
        // print name and height including a new line
        document.write(pokemonList.name +" (height: " + pokemonList.height + ") " + "<br>" );
    }
}

pokemonRepository.getAll().forEach(myLoopFunction);

     
