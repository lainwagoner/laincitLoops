
//apply button and array info
function jumble(shuffleArray = false) {
    let writerstring = "";
    let animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
    let box = document.getElementsByClassName("box")[0];

    if (shuffleArray) shuffle(animals);

    for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "dog") {
   writerstring += "borf borf <br/>";
    } else if (animals[i] === "cat") {
        writerstring += "I am a cat <br/>";
    } else {
       writerstring += "I am an animal <br/>";
        }
    }
    //array shuffling
box.innerHTML = writerstring;
    function shuffle(array) {
        for (let i = array.length - 1; i >0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    }
jumble();




