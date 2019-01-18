
const myApp = {
	data: []
}


// get array of pokemon from the kanto region
// could be modified to be any region but is currently specific in the code
const getRegionData = () => {
	let pokePromise = $.ajax({
		url : `https://pokeapi.co/api/v2/pokedex/kanto/`,
		dataType : 'json',
		method: 'GET'
	}).then(function(data){
		let pokedex = data;
		console.log(pokedex)
		
	})
}

const validate = (guessedName, validName) => {
	if (guessedName == validName) {
		console.log("COMPARISON!")
		// then run addImage here
	}
	// MAYBE ADD SOME ANIMATION ON THE INPUT?
}

getRegionData();


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
		myApp.data.push(pokeData.name);
		addImage(pokeData);
		console.log(pokeData);
		
		
		// if (pokeData.name === regionDex.name) {
		// 	console.log("IT'S A MATCH");			
	});
}




const shouldFetchData = (name) => {




// 	const existingPokemon = myApp.data.find(function(pokemon){
// 		if (name === pokemon.name){
// 			return true
// 		} else
// 		return false
// 	})
// 	if (existingPokemon) {
// 		return false
// 	} else return true
}		

const addImage = (pokeData) => {
	$(".pokemon-gallery").prepend(`
		<div class="pokemon-container">
			<img src="${pokeData.sprites.front_default}">
			<p class="blue">${pokeData.name}!!!</p>
			<p>${pokeData.id}</p>
			<p>${pokeData.types[0].type.name}</p>
		</div>`
	);
}

//NEEDS DOC READY
// on click submits pokemon name for the user
$("#pokeSubmit").submit(function(e){
	e.preventDefault();
	let inputPokemon = $("input[name=userGuess]").val();
	let inputPokemonFormatted = inputPokemon.toLowerCase();
	// if (shouldFetchData(inputPokemonFormatted)){
		if (!myApp.data.includes(inputPokemonFormatted)){
		getData(inputPokemonFormatted);
	}


	//NEEDS AN IF STATEMENT TO RUN ONLY IF THERE ISN'T AN ERROR

})