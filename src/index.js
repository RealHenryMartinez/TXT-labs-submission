
// list of pokemon
const pokemon = [
  {
    id: 1,
    name: "Bulbasaur",
    img:
      "https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/250px-0001Bulbasaur.png",
    description: `Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.
    It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.`
  },
  {
    id: 2,
    name: "Diglett",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
    description: `It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.`
  },
  {
    id: 3,
    name: "Oddish",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
    description: `If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.`
  },
  {
    id: 4,
    name: "Bellsprout",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png",
    description: `Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.`
  },
  {
    id: 5,
    name: "Poliwag",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png",
    description: `For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon’s innards showing through the skin.`
  },
  {
    id: 6,
    name: "Weedle",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    description: `Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.`
  },
  {
    id: 7,
    name: "Metapod",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    description: `It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.`
  },
  {
    id: 8,
    name: "Charizard",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    description: `It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.`
  },
  {
    id: 9,
    name: "Abra",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
    description: `This Pokémon uses its psychic powers while it sleeps. The contents of Abra’s dreams affect the powers that the Pokémon wields.`
  },
  {
    id: 10,
    name: "Gyarados",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    description: `Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.`
  }
];

// counter
let counter = 0; // start with initial pokemon starting at index 0

// Get dropdown elem
var dropdownElem = document.getElementById("dropdown");
// get HTML pokemon elements
let pokeName = document.getElementById("name");
let pokeImage = document.getElementById("image");
let pokeDesc = document.getElementById("desc");

// get button element initialization
let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");

/**
 * Loop through pokemon list and render dropdown items
 */
for (let i = 0; i < pokemon.length; i++) {
  var option = document.createElement("option");
  option.text = pokemon[i].name;
  option.value = pokemon[i].id;
  dropdownElem.add(option);
}

// adding event handlers
dropdownElem.onchange = onDropdownSelect;
nextButton.onclick = () => nextCard();
previousButton.onclick = () => previousCard();

/**
 * Write function that listens for changes in dropdown select
 *
 * When user selects a new pokemon, update the pokemon card details (name, image, desc)
 * to reflect the new seletion
 */
function onDropdownSelect(e) {
  // if we want to make our list more manageable, we could use its id property
  const pokeId = pokemon.filter((poke) => poke.id === +e.target.value); // target is a string, so we convert to int to match id number
  // id is one more value than its index
  counter = pokeId[0].id - 1; // give our index a value
  cardSelection(counter); // change HTML elements
}

/**
 * Write function that sets the previous pokemon as
 * the active pokemon
 */
function previousCard() {
  // checking if we go below the first element, and if we do, go to last pokemon
  // else, continue to decrease our current index on counter
  if (counter === 0) {
    // index at 0 counts, so we need to only account for negative numbers
    counter = pokemon.length - 1; // go to the last element
    cardSelection(counter);
  } else {
    counter--;
    cardSelection(counter);
  }
}
/**
 * Write function that sets the next pokemon as
 * the active pokemon
 */
function nextCard() {
  // checking if we go over the last element, and if we do, go to first pokemon
  // else, go continue
  if (counter >= pokemon.length - 1) {
    counter = 0; // go back to first element of the pokemon list
    cardSelection(counter); // change the HTML elements
  } else {
    counter++;
    cardSelection(counter);
  }
}

function cardSelection(index) {
  pokeName.innerHTML = '#' + pokemon[index].id + ' ' + pokemon[index].name;
  pokeImage.src = pokemon[index].img;
  pokeDesc.innerHTML = pokemon[index].description;
}
