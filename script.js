let cards = [
    {id: 1, name: "Mohamed Salah", appearences: 35, goals: 23, wins: 25, loses: 2, assists: 13, tackles: 17, fouls: 12, saves: 0, img: 'Mohamed Salah.png'},
    {id: 2, name: "Sadio Mané", appearences: 34, goals: 16, wins: 24, loses: 2, assists: 2, tackles: 33, fouls: 50, saves: 0, img: 'Sadio Mané.png'},
    {id: 3, name: "Son Heung-Min", appearences: 35, goals: 23, wins: 21, loses: 9, assists: 7, tackles: 15, fouls: 14, saves: 0, img: 'Son Heung-Min.png'},
    {id: 4, name: "Harry Kane", appearences: 37, goals: 4.1, wins: 21, loses: 11, assists: 9, tackles: 15, fouls: 42, saves: 0, img: 'Harry Kane.png'},
    {id: 5, name: "Cristiano Ronaldo", appearences: 30, goals: 18, wins: 14, loses: 9, assists: 3, tackles: 8, fouls: 16, saves: 0, img: 'Cristiano Ronaldo.png'},
    {id: 6, name: "Bruno Fernandes", appearences: 36, goals: 10, wins: 14, loses: 12, assists: 6, tackles: 54, fouls: 33, saves: 0, img: 'Bruno Fernandes.png'},
    {id: 7, name: "Kevin De Bruyne", appearences: 30, goals: 15, wins: 21, loses: 3, assists: 8, tackles: 32, fouls: 21, saves: 0, img: 'Kevin De Bruyne.png'},
    {id: 8, name: "Raheem Sterling", appearences: 30, goals: 13, wins: 23, loses: 3, assists: 5, tackles: 23, fouls: 19, saves: 0, img: 'Raheem Sterling.png'},
    {id: 9, name: "Bukayo Saka", appearences: 38, goals: 11, wins: 22, loses: 13, assists: 7, tackles: 40, fouls: 39, saves: 0, img: 'Bukayo Saka.png'},
    {id: 10, name: "Emile Smith Rowe", appearences: 33, goals: 10, wins: 18, loses: 12, assists: 2, tackles: 14, fouls: 5, saves: 0, img: 'Emile Smith Rowe.png'},
    {id: 11, name: "Mason Mount", appearences: 32, goals: 11, wins: 18, loses: 5, assists: 10, tackles: 41, fouls: 30, saves: 0, img: 'Mason Mount.png'},
    {id: 12, name: "Kai Havertz", appearences: 29, goals: 8, wins: 17, loses: 5, assists: 3, tackles: 17, fouls: 40, saves: 0, img: 'Kai Havertz.png'},
    {id: 13, name: "Alisson", appearences: 36, goals: 0, wins: 27, loses: 2, assists: 1, tackles: 0, fouls: 0, saves: 76, img: 'Alisson.png'},
    {id: 14, name: "Ederson", appearences: 37, goals: 0, wins: 28, loses: 3, assists: 0, tackles: 0, fouls: 1, saves: 60, img: 'Ederson.png'},
    {id: 15, name: "Hugo Lloris", appearences: 38, goals: 0, wins: 22, loses: 11, assists: 0, tackles: 0, fouls: 0, saves: 98, img: 'Hugo Lloris.png'},
    {id: 16, name: "Édouard Mendy", appearences: 34, goals: 0, wins: 19, loses: 5, assists: 0, tackles: 0, fouls: 1, saves: 73, img: 'Édouard Mendy.png'},
    {id: 17, name: "Aaron Ramsdale", appearences: 34, goals: 0, wins: 21, loses: 10, assists: 0, tackles: 0, fouls: 0, saves: 90, img: 'Aaron Ramsdale.png'},
    {id: 18, name: "David de Gea", appearences: 38, goals: 0, wins: 16, loses: 12, assists: 0, tackles: 0, fouls: 23, saves: 0, img: 'Gabriel Magalhães.png'},
    {id: 19, name: "Gabriel Magalhães", appearences: 35, goals: 5, wins: 22, loses: 10, assists: 0, tackles: 50, fouls: 8, saves: 189, img: 'F80M3.jpg'},
    {id: 20, name: "Ben White", appearences: 32, goals: 0, wins: 19, loses: 10, assists: 0, tackles: 44, fouls: 19, saves: 0, img: 'Ben White.png'},
    {id: 21, name: "César Azpilicueta", appearences: 35, goals: 4.1, wins: 59860, loses: 8, assists: 189, tackles: 0, fouls: 8, saves: 189, img: 'César Azpilicueta.png'},
    {id: 22, name: "Marcos Alonso", appearences: 28, goals: 4, wins: 12, loses: 6, assists: 4, tackles: 41, fouls: 25, saves: 0, img: 'Marcos Alonso.png'},
    {id: 23, name: "Joel Matip", appearences: 31, goals: 3, wins: 24, loses: 2, assists: 3, tackles: 47, fouls: 13, saves: 0, img: 'Joel Matip.png'},
    {id: 24, name: "Trent Alexander-Arnold", appearences: 32, goals: 2, wins: 23, loses: 2, assists: 12, tackles: 40, fouls: 12, saves: 0, img: 'Trent Alexander-Arnold.png'},
    {id: 25, name: "João Cancelo", appearences: 36, goals: 1, wins: 27, loses: 3, assists: 7, tackles: 83, fouls: 34, saves: 0, img: 'João Cancelo.png'},
    {id: 26, name: "Aymeric Laporte", appearences: 33, goals: 4, wins: 26, loses: 2, assists: 0, tackles: 33, fouls: 14, saves: 0, img: 'Aymeric Laporte.png'},
    {id: 27, name: "Scott McTominay", appearences: 30, goals: 1, wins: 12, loses: 10, assists: 1, tackles: 65, fouls: 55, saves: 0, img: 'Scott McTominay.png'},
    {id: 28, name: "Harry Maguire", appearences: 30, goals: 1, wins: 15, loses: 10, assists: 0, tackles: 34, fouls: 21, saves: 0, img: 'Harry Maguire.png'},
    {id: 29, name: "Pierre-Emile Højbjerg", appearences: 36, goals: 2, wins: 22, loses: 10, assists: 2, tackles: 78, fouls: 28, saves: 0, img: 'Pierre-Emile Højbjerg.png'},
    {id: 30, name: "Davinson Sánchez", appearences: 23, goals: 2, wins: 14, loses: 5, assists: 0, tackles: 41, fouls: 16, saves: 0, img: 'Davinson Sánchez.png'}
]

//Players cards, socres and current updated cards
let player1Cards = [];
let player2Cards = [];

let player1Current = []
let player2Current = []

// let player1ImageDisplay = document.getElementById(player1Image) // not put tag in html, currently using default pic
// let player2ImageDisplay = document.getElementById(player2Image) // not put tag in html, currently using default pic

let player1Score = 0;
let player2Score = 0;

let player1ScoreDisplay = document.getElementById("player1-score")
let player2ScoreDisplay = document.getElementById("player2-score")

let messageDisplay = document.getElementById("message-display")

//=====================================================================================================
//work out how to randomly shuffle the footballer cards
//=====================================================================================================

// function shuffleCards(){
//     let hand = cards.length;
//     let player1Hand = 0;
//     let player2Hand = 0;

//     while(--hand > 0) {
//         let cardIndex = Math.floor(Math.random() * (hand + 1)); //important to add 1 to make sure all the 30 cards are used
//         let randomCards = cards.splice(cardIndex, 1);

//         console.log(cardIndex)
//         // console.log(randomCards)
//         // let shuffeledcards=[]
//         // shuffeledcards.push(randomCards)
//         // console.log(shuffeledcards)
        


//         if(player1Hand>=player2Hand){
//             player2Cards.push(randomCards[0]);
//             player2Hand +=1;
//         } else if(player1Hand <= player2Hand){
//             player1Cards.push(randomCards[0]);
//             player1Hand +=1;
//         }
//     }
//     console.log(player1Hand)
//     console.log(player2Hand)
//     console.log(player1Cards)
//     console.log(player2Cards)
// }
//
// cant get it to split evenly

let player1Hand = [];
let player2Hand = [];

function shuffleCards() { cards.sort(() => Math.random() - 0.5); console.log(cards)/*mixes the 30 card up*/; return cards };

shuffleCards();


//=====================================================================================================
//work out how to randomly select a card from each players hand
//=====================================================================================================

// function drawnCard(){
//     let player1 = Math.floor((Math.random()*player1Cards.length));
//     let player2 = Math.floor((Math.random()*player2Cards.length));

//     player1Current.push(player1Cards.splice(player1, 1)[0]); //Takes ONE card from the hand just created
//     player2Current.push(player2Cards.splice(player2, 1)[0]);

    //if have time pull the image for each footballer

    // console.log(player1)
    // console.log(player1[0]) // why undefined
    // console.log(player2)

// }

for (i=0;i<30;i++){
    if ([i] % 2 != 0){
        player1Hand.push(cards[i])
    } else if ([i] % 2 == 0){
        player2Hand.push(cards[i])
    }
}

console.log(player1Hand) //15 card in player1s hand
console.log(player2Hand) //15 card in player2s hand

//=====================================================================================================
//draw out player1 card - this bit was a test, shoulnt need
//=====================================================================================================

// function drawPlayer1Card(){
//     document.getElementById("name") = player1Card.name;
//     document.getElementById("appearences") = player1Card.appearences;
//     document.getElementById("goals") = player1Card.goals;
//     document.getElementById("wins") = player1Card.wins;
//     document.getElementById("loses") = player1Card.loses;
//     document.getElementById("assists") = player1Card.assists;
//     document.getElementById("tackles") = player1Card.tackles;
//     document.getElementById("fouls") = player1Card.fouls;
//     document.getElementById("saves") = player1Card.saves;
// }

// drawPlayer1Card()

// console.log(drawPlayer1Card)

//=====================================================================================================
//work out how to compare the stats against the computers stats
//=====================================================================================================

function compare(stat){

console.log(`the player 1 ${stat} is: ${player1Current[0][stat]}`)
console.log(`the player 2 ${stat} is: ${player1Current[0][stat]}`)

    let player1Stat = player1Current[0][stat];
    let player2Stat = player2Current[0][stat];

    if( stat=="appearences" || stat=="goals" || stat=="wins" || stat=="loses" || stat=="assists" || stat=="tackles" || stat=="fouls" || stat=="saves"){
        if(player1Stat>player2Stat){
            updateResult("player1-win");
        }else if(player2Stat>player1Stat){
            updateResult("player2-win");
        } else{
            updateResult("draw")
        } 
    }
}

//=====================================================================================================
//work out where and how to display message depending on who won and then update score and move on to next round
//=====================================================================================================

function updateResult(result){
    if(result=="player1-win"){
        player1Score +=1
        player1ScoreDisplay.textContent = `Your score: ${player1Score}`;
        player1Cards.push(player2Current.splice(0,1)[0]); //take player2 card and put it to the back of deck, do the same with player1 winning card
        player1Cards.push(player1Current.splice(0,1)[0]);
        messageDisplay.textContent = `Player 1 wins the round!`;
        setTimeout( () => {messageDisplay.style.display = "none"}, 5000) //message from above goes after 5 seconds
        playGame();
    }else if(result=="player2-win"){
        player2Score +=1
        player2ScoreDisplay.textContent = `Computer score: ${player2Score}`;
        player2Cards.push(player1Current.splice(0,1)[0]);  
        player2Cards.push(player2Current.splice(0,1)[0]);
        messageDisplay.textContent = `The Computer wins the round!`;
        setTimeout( () => {messageDisplay.style.display = "none"}, 5000) //message from above goes after 5 seconds
        playGame();  
    }else{
        messageDisplay.textContent = `Draw!`;
        player1Cards.push(player1Current.splice(0,1)[0]); //card to the back of own deck
        player2Cards.push(player2Current.splice(0,1)[0]);
        playGame();
    }
}

//=====================================================================================================
//determin if the game has ended or if it continues
//=====================================================================================================

function playGame() {
    if (player1Cards.length < 30 && player2Cards.length < 30){
        //play game
        drawnCard()
    } else if (player1Cards.length == 30){
        //loose message
        messageDisplay.textContent = "You Suck, you were beaten by a computer!!!"
    } else if (player2Cards.length == 30){
        //win message
        messageDisplay.textContent = "The game has finished! Player 1 is the Victor!!!"
    }
}


//=====================================================================================================
//add event listeners on click for each button to intiate compare stats
//=====================================================================================================

//do i need a rest button or just refresh page?

const appearencesBtn = document.getElementById("appearences");
const goalsBtn = document.getElementById("goals");
const winsBtn = document.getElementById("wins");
const losesBtn = document.getElementById("loses");
const assistsBtn = document.getElementById("assists");
const tacklesBtn = document.getElementById("tackles");
const foulsBtn = document.getElementById("fouls");
const savesBtn = document.getElementById("saves");


appearencesBtn.addEventListener("click", () => {
    compare("appearences");
})

goalsBtn.addEventListener("click", () => {
    compare("goals");
})

winsBtn.addEventListener("click", () => {
    compare("wins");
})

losesBtn.addEventListener("click", () => {
    compare("loses");
})

assistsBtn.addEventListener("click", () => {
    compare("assists");
})

tacklesBtn.addEventListener("click", () => {
    compare("tackles");
})

foulsBtn.addEventListener("click", () => {
    compare("fouls");
})

savesBtn.addEventListener("click", () => {
    compare("saves");
})

//=====================================================================================================
//call fucntions to start game
//=====================================================================================================

// shuffleCards();
// drawnCard();


//=====================================================================================================
//getting the stats to display on page

// function getStats(cards){

//     function getName(cards){
//         let nameElement = document.getElementById("name")

//         let name = cards[0].name

//         nameElement.innerText = name    // nameElement.innerText = `Name: + ${name}`
        
//     }
//     getName(cards)

//         function getAppearences(cards){
//             let appearencesElement = document.getElementById("appearences")

//             let appearences = cards[0].appearences

//             appearencesElement.innerText = appearences    // nameElement.innerText = `Name: + ${name}`
            
//         }
//         getAppearences(cards)   

//             function getGoals(cards){
//                 let goalsElement = document.getElementById("goals")

//                 let goals = cards[0].goals

//                 goalsElement.innerText = goals    // nameElement.innerText = `Name: + ${name}`
                
//             }
//             getGoals(cards)   

//                 function getWins(cards){
//                     let winsElement = document.getElementById("wins")

//                     let wins = cards[0].wins

//                     winsElement.innerText = wins    // nameElement.innerText = `Name: + ${name}`
                    
//                 }
//                 getWins(cards) 

//                     function getLoses(cards){
//                         let losesElement = document.getElementById("loses")

//                         let loses = cards[0].loses

//                         losesElement.innerText = loses    // nameElement.innerText = `Name: + ${name}`
                        
//                     }
//                     getLoses(cards) 

//                         function getAssists(cards){
//                             let assistsElement = document.getElementById("assists")

//                             let assists = cards[0].assists

//                             assistsElement.innerText = assists    // nameElement.innerText = `Name: + ${name}`
                            
//                         }
//                         getAssists(cards)

//                             function getTackles(cards){
//                                 let tacklesElement = document.getElementById("tackles")

//                                 let tackles = cards[0].tackles

//                                 tacklesElement.innerText = tackles    // nameElement.innerText = `Name: + ${name}`
                                
//                             }
//                             getTackles(cards)

//                                 function getFouls(cards){
//                                     let foulsElement = document.getElementById("fouls")

//                                     let fouls = cards[0].fouls

//                                     foulsElement.innerText = fouls    // nameElement.innerText = `Name: + ${name}`
                                    
//                                 }
//                                 getFouls(cards)

//                                     function getSaves(cards){
//                                         let savesElement = document.getElementById("saves")

//                                         let saves = cards[0].saves

//                                         savesElement.innerText = saves    // nameElement.innerText = `Name: + ${name}`
                                        
//                                     }
//                                     getSaves(cards)
// }
// getStats(cards)





