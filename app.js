let writerEle = document.body.querySelector(".box");

// The array
let animals = ["dog", "fish", "cat", "shark", "cat", "dog"]

// Code for if/else statements
for(let i = 0; i <animals.length; i++) {
    let ele = document.createElement("div");

    if (animals[i] === "dog") {
        ele.innerHTML = "borf borf";
        writerEle.appendChild(ele);

    } else if (animals[i] === "cat") {
        ele.innerHTML = "I am a cat";
        writerEle.appendChild(ele);

    } else {
        ele.innerHTML = "I am an animal";
        // ele.innerHTML=animals[i];
        writerEle.appendChild(ele);

    }
    writerEle.appendChild(ele);
}

// Code for loop
function jumble() {

    for (let i = animals.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
        let temp = animals[i];
        animals[i] = animals[j];
        animals[j] = temp;
    }
}
jumble(animals);

/*code for button #first way (how do I connect the function to the button???)
let btn = document.createElement("button");
    btn.innerHTML = "Click Me";
    btn.addEventListener("click",function jumble (){ //why wont it run the function?
    });

    document.body.appendChild(btn);*/


// Code for button #second way AGAIN (how do I connect the function to the button???)
let button = document.createElement("button");
button.innerHTML = "Click Me"

let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
    jumble();
});


