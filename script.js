
// the array that holds all the value input by the user
const pokedex = {
	data: []
}

// the function that gets data for each input from the API
const getData = (inputPokemonFormatted) => {
	let pokePromise = $.ajax({
		url : `https://pokeapi.co/api/v2/pokemon/${inputPokemonFormatted}/`,
		dataType : 'json',
		method: 'GET'
	}).then(function(data){
		// console.log(data.id);
		// console.log(data.name);
		// console.log(data.types[0].type.name);
		// console.log(data.weight);
		let pokeData = data;
		pokedex.data.push(pokeData.name);
		addImage(pokeData);
		console.log(pokeData);			
	});
}

// let lettersOnly = () => {

// }



let counter = 0;


const addImage = (pokeData) => {
	$(".pokemon-gallery").prepend(`
		<div class="pokemon-container">
			<img class="pokeImage" src="${pokeData.sprites.front_default}">
			<div class="pokeTextContainer">
				<p class="pokeNumber">${pokeData.id}</p>
				<p class="pokeName">${pokeData.name}</p>
			</div>
		</div>`
	);
}

//NEEDS DOC READY
// on click submits pokemon name for the user
$("#pokeSubmit").submit(function(e){
	e.preventDefault();
	let inputPokemon = $("input[name=userGuess]").val();
	let inputPokemonFormatted = inputPokemon.toLowerCase();

	let myRegEx = /[0-9]/
	let stringTest = myRegEx.test(inputPokemonFormatted);
	console.log(inputPokemon);
	if (inputPokemon == "") {
	} else if (!pokedex.data.includes(inputPokemonFormatted) && !stringTest){
		getData(inputPokemonFormatted);
		counter = counter + 1;
		$("span.totalGuessed").replaceWith(`<span class="totalGuessed">${counter}</span>`)
	}
		
})


	//NEEDS AN IF STATEMENT TO RUN ONLY IF THERE ISN'T AN ERROR

