document.addEventListener('DOMContentLoaded', function() {
    const gameContainer = document.getElementById('game-container');
    const startGameButton = document.getElementById('start-game');
    const restartGameButton = document.getElementById('restart-game');
    const message = document.getElementById("message");
    let counter = 1;
    var shuffdOrder = [1,2,3,4,5,6];

    gameStart(shuffdOrder)
    
    function gameStart(){
        gameContainer.innerHTML = "";
        cardCreator(shuffdOrder,6);
    }
    function cardCreator(order, cardNumber){
        for (let i = 0; i < cardNumber; i++) {
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.style.backgroundImage = `url('${order[i]}.svg')`; 
            cardDiv.alt = `Card ${i}`;
            cardDiv.setAttribute("index",i);
            gameContainer.appendChild(cardDiv);
        }
    }
    function orangeCardCreator(cardNumber){
        for (let i = 0; i < cardNumber; i++) {
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card");
            cardDiv.style.backgroundColor = "orange";
            cardDiv.alt = `Card ${i}`;
            cardDiv.addEventListener('click', controller);
            cardDiv.setAttribute("index", i);
            gameContainer.appendChild(cardDiv);
        }
    }
    function starter(){
        counter = 1;
        score.innerHTML = 0;
        message.innerHTML = "Let's Play"

        shuffdOrder = shuffle();

        console.log(shuffdOrder);
        display(shuffdOrder);
    }
    function shuffle(){
        let card_order = [1, 2, 3, 4, 5, 6];
        for (let i = card_order.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [card_order[i], card_order[j]] = [card_order[j], card_order[i]];
        }
        return card_order; 
    }
    function display(order) {
        gameContainer.innerHTML = "";

        
        cardCreator(order,6);
        setTimeout(() => {
            gameContainer.innerHTML = "";

             orangeCardCreator(6);   
        }, 2000);

    }

    function controller(event) {
        const eventTarget = event.target
        const clickedCard = Number(eventTarget.getAttribute("index"));

        if (counter == shuffdOrder[clickedCard]){
            console.log("counter" + counter)
            console.log("tıklanan kart" + shuffdOrder[clickedCard])
            console.log("doğru")
            eventTarget.style.backgroundImage = `url('${shuffdOrder[clickedCard]}.svg')`; 
            score.innerHTML = (counter)*20
            if(counter == 6){
                gameContainer.innerHTML = "";

                message.innerHTML = "You Won"
                cardCreator(shuffdOrder,6);
                
            }
            counter++;
            

        }
        else{
            console.log("counter" + counter)
            console.log("tıklanan kart" + shuffdOrder[clickedCard])
            message.innerHTML = "You Lost"
            gameContainer.innerHTML = "";

                cardCreator(shuffdOrder,6);
        
            }
    }
    startGameButton.addEventListener('click', () => {
        starter()
    });
    restartGameButton.addEventListener('click', () => {
        starter()
    });
});   