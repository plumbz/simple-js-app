let pokemonRepository = (function (){

    let repository = [
        {name: "Bulbasaur",height: 7,types: ["grass", "poison"]},
        {name: "Charmander",height: 6,types: ["fire"]},
        {name: "Squirtle",height: 5,types: ["water"]}
    ];

   function add (pokemon){ 
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
      ){
        repository.push(pokemon);
       } else {
        console.log("pokemon is not correct");
    }}
    
   function getAll (){
        return repository;
    }
    function addListItem (pokemon) {
        let pokemonList = document.querySelector(".pokemon-List");
        let listpokemon= document.createElement("Li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild (listpokemon);
        // Add event listener to the button
        button.addEventListener("click", function() {
        showDetails (pokemon);
        });
    }  //add showDetails function
    function showDetails(pokemon) {
        console.log(pokemon);
    }
   return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    }; 
})();

console.log(pokemonRepository.getAll());

pokemonRepository.add ({name: "Pikachu", height: 4, types: ["electric"]});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    
    pokemonRepository.addListItem (pokemon)
});
