let pokemonRepository = (function (){

    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";

   function add (pokemon){ 
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "detailsUrl" in pokemon
      ){
       pokemonList.push(pokemon);
       } else {
        console.log("pokemon is not correct");
    }}
    
   function getAll (){
        return pokemonList;
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
    }  
    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
        });
        }).catch(function (e) {
          console.error(e);
        })
    }
    function loadDetails(pokemon) {
        let url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          pokemon.imageUrl = details.sprites.front_default;
          pokemon.height = details.height;
          pokemon.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            console.log(pokemon);
        });
    }
     
   return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    }; 
})();

// console.log(pokemonRepository.getAll());

pokemonRepository.add ({name: "Pikachu", height: 4, types: ["electric"]});

//console.log(pokemonRepository.getAll());
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem (pokemon);
    });
});