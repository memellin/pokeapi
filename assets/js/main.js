

function convertPokemonsTypesToLi(types) {
    return types.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`).join('');

}


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${convertPokemonsTypesToLi(pokemon.types)}
                </ol>

                <img src="${pokemon.sprites.other.dream_world.front_default}" 
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons) => {
    // mapeia o objeto e o transforma em um item de lista html
        const newHtml = pokemons.map(convertPokemonToLi).join('');
        pokemonList.innerHTML = newHtml;
    });