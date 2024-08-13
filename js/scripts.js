let pokemonRepository = (function (){

    let pokemonList = [];
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=3";
    let modalContainer = document.querySelector('#modal-container');

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

      function showModal(title, text) {
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
          modal.classList.add('modal');
      
          let closeButtonElement = document.createElement('button');
          closeButtonElement.classList.add('modal-close');
          closeButtonElement.innerText = 'Close';
          closeButtonElement.addEventListener('click', hideModal);
      
          let titleElement = document.createElement('h1');
          titleElement.innerText = title;
      
          let contentElement = document.createElement('p');
          contentElement.innerText = text;
      
          modal.appendChild(closeButtonElement);
          modal.appendChild(titleElement);
          modal.appendChild(contentElement);
          modalContainer.appendChild(modal);
      
          modalContainer.classList.add('is-visible');
        }
        function hideModal() {
          modalContainer.classList.remove('is-visible');
          } 
          window.addEventListener('keydown', (e) => {
          let modalContainer = document.querySelector('#modal-container');
          if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();  
          }
          });
          modalContainer.addEventListener('click', (e) => {
          // Since this is also triggered when clicking INSIDE the modal
          // We only want to close if the user clicks directly on the overlay
          let target = e.target;
          if (target === modalContainer) {
            hideModal();
            
          }});
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            console.log(pokemon);
        });
        // console.log(pokemonRepository.getAll());
document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('Bulbasaurs', 'Inser image here!');
  });
pokemonRepository.add ({name: "Pikachu", height: 4, types: ["electric"]});

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


//console.log(pokemonRepository.getAll());
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem (pokemon);
    });
});
