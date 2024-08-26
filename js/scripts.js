let pokemonRepository = (function (){

  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";
  //let modalContainer = document.querySelector('#modal-container');
  // let modalContainer = document.getElementById('exampleModal')

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
      let pokemonList = document.getElementById('pokemon-List');
      let listPokemon= document.createElement("li");
      let button = document.createElement("button");
      listPokemon.classList.add('list-group-item');
      button.innerText = pokemon.name;
      button.classList.add('btn', 'btn-primary', 'btn-lg', 'button-class');
      button.setAttribute('data-toggle', 'modal'); // For data attributes, use camelCase
      button.setAttribute('data-target', '#modal-container');  // Use camelCase for data attributes
      listPokemon.appendChild(button);
      pokemonList.appendChild (listPokemon);
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
        console.log(pokemon.name);
        showModal(pokemon);
      });
  }

  function showModal(pokemon) {
    let modalTitle = $('.modal-title');
    let modalBody = $('.modal-body');

    modalTitle.empty();
    modalBody.empty();

    // creating element for name in modal content
    let nameElement =$("<h1>" + pokemon.name + "</h1>");
     //creating img in modal content
    let imageElementFront = $('<img class="modal-img" style=width:50%">');
    imageElementFront.attr("src", pokemon.imageUrl);
    let heightElement = $("<p>" + "height : " + pokemon.height + "</p>")

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(heightElement);
 
   
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  }; 
})();


//console.log(pokemonRepository.getAll());
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem (pokemon);
    });
});
