
$(function(){ //doc ready

	// the array that holds all the value input by the user
	const pokedex = {
		data: []
	}
	let counter = 0; //counts successful inputs

	const $inputReset = () => {
		$("#userGuess").val("");
	}

	//changes overlay colour based on hover
	$("li.bulbasaur").hover(function() {
		$(".overlay-top").css("background-color", "#73ac31")
	})

	$("li.charmander").hover(function() {
		$(".overlay-top").css("background-color", "#ff9441")
	})

	$("li.pikachu").hover(function() {
		$(".overlay-top").css("background-color", "#f6e652") 
	})

	$("li.squirtle").hover(function() {
		$(".overlay-top").css("background-color", "#5a9ca4")
	})

	//fades out overlays on click
	$(".choose li").click(function(){
		$(".pokeball-centre").delay(1000).fadeOut(2000, function(){
		})
		$(".overlay-top").fadeOut(2000, function(){
		})
		$(".overlay-bottom").fadeOut(2000, function(){
		})
	})

	//sets colour scheme
	$("li.bulbasaur").click(function(){
		$("body").addClass("bulbasaur-1")
		$("header").addClass("bulbasaur-2")
		$("footer").addClass("bulbasaur-2")
		$("header h1").addClass("bulbasaur-3")
		$("footer p").addClass("bulbasaur-3")
		$("form").addClass("bulbasaur-4")
		getData("bulbasaur");
	})

	//sets colour scheme
	$("li.squirtle").click(function(){
		$("body").addClass("squirtle-1")
		$("header").addClass("squirtle-2")
		$("footer").addClass("squirtle-2")
		$("header h1").addClass("squirtle-3")
		$("footer p").addClass("squirtle-3")
		$("form").addClass("squirtle-4")
		getData("squirtle");
	})

	//sets colour scheme
	$("li.pikachu").click(function(){
		$("body").addClass("pikachu-1")
		$("header").addClass("pikachu-2")
		$("footer").addClass("pikachu-2")
		$("header h1").addClass("pikachu-3")
		$("footer p").addClass("pikachu-3")
		$("form").addClass("pikachu-4")
		getData("pikachu");
	})

	//sets colour scheme
	$("li.charmander").click(function(){
		$("body").addClass("charmander-1")
		$("header").addClass("charmander-2")
		$("footer").addClass("charmander-2")
		$("header h1").addClass("charmander-3")
		$("footer p").addClass("charmander-3")
		$("form").addClass("charmander-4")
		getData("charmander");
	})

	//gets data from API
	const getData = (inputPokemonFormatted) => {
		let pokePromise = $.ajax({
			url : `https://pokeapi.co/api/v2/pokemon/${inputPokemonFormatted}/`,
			dataType : 'json',
			method: 'GET'
		}).then(function(data){
			let pokeData = data;
			pokedex.data.push(pokeData.name);
			if (pokeData.id <= 151) {
			$addImage(pokeData);
			$inputReset();
			}		
		});
	}

	// counts valid entries
	const counterUp = (increase) => {
		counter = counter + increase;
	}

	// adds image block into grid
	const $addImage = (pokeData) => {
		$(".pokemon-gallery").prepend(`
			<div class="pokemon-container">
				<img class="pokeImage" src="${pokeData.sprites.front_default}">
				<div class="pokeTextContainer">
					<p class="pokeNumber">${pokeData.id}</p>
					<p class="pokeName">${pokeData.name}</p>
				</div>
			</div>`
		);
		counterUp(1);
		$("span.totalGuessed").replaceWith(`<span class="totalGuessed">${counter}</span>`)
	}


	// on click submits pokemon name for the user
	$("#pokeSubmit").submit(function(e){
		e.preventDefault();
		let inputPokemon = $("input[name=userGuess]").val();
		let inputPokemonFormatted = inputPokemon.toLowerCase();
		let myRegEx = /[0-9]/
		let stringTest = myRegEx.test(inputPokemonFormatted);
		if (!pokedex.data.includes(inputPokemonFormatted) && !stringTest){
			getData(inputPokemonFormatted);
		}
	})

}) // ends doc ready

