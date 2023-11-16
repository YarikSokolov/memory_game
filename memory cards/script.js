let game = document.getElementById("game")
let card_images = []
let open = []
let number = 0
let dieds = 0
for (let index = 0; index < 12; index++) {
    card_images.push("card (" + index + ").webp")
    card_images.push("card (" + index + ").webp")
}
for (let index = 23; index > 0; index--) {
    let randomNum = Math.floor(Math.random()*(index + 1))
let mob = card_images[index]
card_images[index] = card_images[randomNum]
card_images[randomNum] = mob
}
for (let index = 0; index < 24; index++) {
    let card = document.createElement("img")
    card.src = "rubashka.jpg"
    game.appendChild(card)
    card.style.height = card.offsetWidth + "px"
    card.onclick = function () {
        card.style.pointerEvents = "none"
        card.src = card_images[index]
        open.push(card)
        if (open.length == 2) {
            if (open[0].src == open[1].src) {
                console.log("GREAT🎉🌹🎉");
               open=[]
               dieds = dieds + 1
               console.log(dieds);
               
            }
            else {
                for (let index = 0; index < 24; index++) {
                    game.children[index].style.pointerEvents="none"
                }
                console.log("YOU DIED😎")
                setTimeout(function(){
                    open[0].src="rubashka.jpg"
                    open[1].src="rubashka.jpg"
                    open=[]
                    for (let index = 0; index < 24; index++) {
                        game.children[index].style.pointerEvents="auto"
                    }
                    console.log(dieds);
                },1000)
                
            }
            number = number + 1
            
            console.log("number " + number);

        }
    }
}
// стили