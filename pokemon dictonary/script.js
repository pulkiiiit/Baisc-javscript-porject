// pokemon finder

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Could not Fetch pokemon")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;// This will get the img src for your image element
        const imgElement = document.getElementById("pokemonSprite");// This will get the img element from our HTML document

        imgElement.src = pokemonSprite;// This will create assign a source to our img element 
        imgElement.style.display = "block"// This will set the disply to block cause earlier it was none 
    } catch (error) {
        console.error(error);
    }
}