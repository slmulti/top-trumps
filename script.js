let cards = [
    {id: 1, name: "Mohamed Salah", appearences: 35, goals: 23, wins: 25, loses: 2, assists: 13, tackles: 17, fouls: 12, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png'},
    {id: 2, name: "Sadio Mané", appearences: 34, goals: 16, wins: 24, loses: 2, assists: 2, tackles: 33, fouls: 50, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p110979.png'},
    {id: 3, name: "Son Heung-Min", appearences: 35, goals: 23, wins: 21, loses: 9, assists: 7, tackles: 15, fouls: 14, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p85971.png'},
    {id: 4, name: "Harry Kane", appearences: 37, goals: 17, wins: 21, loses: 11, assists: 9, tackles: 15, fouls: 42, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p78830.png'},
    {id: 5, name: "Cristiano Ronaldo", appearences: 30, goals: 18, wins: 14, loses: 9, assists: 3, tackles: 8, fouls: 16, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p14937.png'},
    {id: 6, name: "Bruno Fernandes", appearences: 36, goals: 10, wins: 14, loses: 12, assists: 6, tackles: 54, fouls: 33, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p141746.png'},
    {id: 7, name: "Kevin De Bruyne", appearences: 30, goals: 15, wins: 21, loses: 3, assists: 8, tackles: 32, fouls: 21, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p61366.png'},
    {id: 8, name: "Raheem Sterling", appearences: 30, goals: 13, wins: 23, loses: 3, assists: 5, tackles: 23, fouls: 19, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p103955.png'},
    {id: 9, name: "Bukayo Saka", appearences: 38, goals: 11, wins: 22, loses: 13, assists: 7, tackles: 40, fouls: 39, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p223340.png'},
    {id: 10, name: "Emile Smith Rowe", appearences: 33, goals: 10, wins: 18, loses: 12, assists: 2, tackles: 14, fouls: 5, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p209289.png'},
    {id: 11, name: "Mason Mount", appearences: 32, goals: 11, wins: 18, loses: 5, assists: 10, tackles: 41, fouls: 30, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p184341.png'},
    {id: 12, name: "Kai Havertz", appearences: 29, goals: 8, wins: 17, loses: 5, assists: 3, tackles: 17, fouls: 40, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png'},
    {id: 13, name: "Alisson", appearences: 36, goals: 0, wins: 27, loses: 2, assists: 1, tackles: 0, fouls: 0, saves: 76, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p116535.png'},
    {id: 14, name: "Ederson", appearences: 37, goals: 0, wins: 28, loses: 3, assists: 0, tackles: 0, fouls: 1, saves: 60, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png'},
    {id: 15, name: "Hugo Lloris", appearences: 38, goals: 0, wins: 22, loses: 11, assists: 0, tackles: 0, fouls: 0, saves: 98, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p37915.png'},
    {id: 16, name: "Édouard Mendy", appearences: 34, goals: 0, wins: 19, loses: 5, assists: 0, tackles: 0, fouls: 1, saves: 73, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p228286.png'},
    {id: 17, name: "Aaron Ramsdale", appearences: 34, goals: 0, wins: 21, loses: 10, assists: 0, tackles: 0, fouls: 0, saves: 90, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p225321.png'},
    {id: 18, name: "David de Gea", appearences: 38, goals: 0, wins: 16, loses: 12, assists: 0, tackles: 0, fouls: 0, saves: 128, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p51940.png'},
    {id: 19, name: "Gabriel Magalhães", appearences: 35, goals: 5, wins: 22, loses: 10, assists: 0, tackles: 50, fouls: 8, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p226597.png'},
    {id: 20, name: "Ben White", appearences: 32, goals: 0, wins: 19, loses: 10, assists: 0, tackles: 44, fouls: 19, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p198869.png'},
    {id: 21, name: "César Azpilicueta", appearences: 27, goals: 1, wins: 13, loses: 5, assists: 2, tackles: 51, fouls: 25, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p41328.png'},
    {id: 22, name: "Marcos Alonso", appearences: 28, goals: 4, wins: 12, loses: 6, assists: 4, tackles: 41, fouls: 25, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p82263.png'},
    {id: 23, name: "Joel Matip", appearences: 31, goals: 3, wins: 24, loses: 2, assists: 3, tackles: 47, fouls: 13, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p60914.png'},
    {id: 24, name: "Trent Alexander-Arnold", appearences: 32, goals: 2, wins: 23, loses: 2, assists: 12, tackles: 40, fouls: 12, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p169187.png'},
    {id: 25, name: "João Cancelo", appearences: 36, goals: 1, wins: 27, loses: 3, assists: 7, tackles: 83, fouls: 34, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p121145.png'},
    {id: 26, name: "Aymeric Laporte", appearences: 33, goals: 4, wins: 26, loses: 2, assists: 0, tackles: 33, fouls: 14, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p146941.png'},
    {id: 27, name: "Scott McTominay", appearences: 30, goals: 1, wins: 12, loses: 10, assists: 1, tackles: 65, fouls: 55, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p195851.png'},
    {id: 28, name: "Harry Maguire", appearences: 30, goals: 1, wins: 15, loses: 10, assists: 0, tackles: 34, fouls: 21, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p95658.png'},
    {id: 29, name: "Pierre-Emile Højbjerg", appearences: 36, goals: 2, wins: 22, loses: 10, assists: 2, tackles: 78, fouls: 28, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p132015.png'},
    {id: 30, name: "Davinson Sánchez", appearences: 23, goals: 2, wins: 14, loses: 5, assists: 0, tackles: 41, fouls: 16, saves: 0, img: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p173904.png'}
]

//Players cards, socres and current updated cards
let player1Cards = [];
let player2Cards = [];

let player1Current = []
let player2Current = []

let player1ScoreDisplay = document.getElementById("player1-score")
let player2ScoreDisplay = document.getElementById("player2-score")

let messageDisplay = document.getElementById("message-display")
let comparisonDisplay = document.getElementById("comparison-display")

//=====================================================================================================
//work out how to randomly shuffle the footballer cards
//=====================================================================================================

let player1Hand = [];
let player2Hand = [];

function shuffleCards() { cards.sort(() => Math.random() - 0.5); console.log(cards)/*mixes the 30 card up*/; return cards };

shuffleCards();


//=====================================================================================================
//work out how to divide cards from each players hand
//=====================================================================================================

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
//draw out player1 card and computer card
//=====================================================================================================

function getCard(){
player1Current=player1Hand.shift() //first card from player 1s hand 
console.log(player1Current)
player2Current=player2Hand.shift()
console.log(player2Current)
}


let footballerImg = document.getElementById('footballer')

    function drawPlayer1Card(){
        footballerImg.src = `${player1Current.img}`
        document.getElementById("footballer").src = player1Current.img;
        document.getElementById("name").innerText = player1Current.name;
        document.getElementById("appearences").innerText = player1Current.appearences;
        document.getElementById("goals").innerText = player1Current.goals;
        document.getElementById("wins").innerText = player1Current.wins;
        document.getElementById("loses").innerText = player1Current.loses;
        document.getElementById("assists").innerText = player1Current.assists;
        document.getElementById("tackles").innerText = player1Current.tackles;
        document.getElementById("fouls").innerText = player1Current.fouls;
        document.getElementById("saves").innerText = player1Current.saves;
    }

let player2FootballerImg = document.getElementById('footballer2')

    function drawPlayer2Card(){
        player2FootballerImg.src = `${player2Current.img}`
        document.getElementById("footballer2").src = player2Current.img;
        document.getElementById("name2").innerText = player2Current.name;
        document.getElementById("appearences2").innerText = "???";
        document.getElementById("goals2").innerText = "???";
        document.getElementById("wins2").innerText = "???";
        document.getElementById("loses2").innerText = "???";
        document.getElementById("assists2").innerText = "???";
        document.getElementById("tackles2").innerText = "???";
        document.getElementById("fouls2").innerText = "???";
        document.getElementById("saves2").innerText = "???";
    }


function revealPlayer2Card(){
        player2FootballerImg.src = `${player2Current.img}`
        document.getElementById("footballer2").src = player2Current.img;
        document.getElementById("name2").innerText = player2Current.name;
        document.getElementById("appearences2").innerText = player2Current.appearences;
        document.getElementById("goals2").innerText = player2Current.goals;
        document.getElementById("wins2").innerText = player2Current.wins;
        document.getElementById("loses2").innerText = player2Current.loses;
        document.getElementById("assists2").innerText = player2Current.assists;
        document.getElementById("tackles2").innerText = player2Current.tackles;
        document.getElementById("fouls2").innerText = player2Current.fouls;
        document.getElementById("saves2").innerText = player2Current.saves;
    }

//=====================================================================================================
//call functions to start game and update to next button
//=====================================================================================================


const startBtn = document.getElementById("start")    
startBtn.addEventListener('click', startGame)
    
    function startGame(){
        getCard()
        drawPlayer1Card()
        drawPlayer2Card()
        document.getElementById("start").innerText = "NEXT CARD";
        messageDisplay.textContent = `Select a Stat you think will beat the Opponenents Card`
    }

//=====================================================================================================
//work out how to compare the stats against the computers stats
//=====================================================================================================

const appearencesBtn = document.getElementById("appearences-btn");
const goalsBtn = document.getElementById("goals-btn");
const winsBtn = document.getElementById("wins-btn");
const losesBtn = document.getElementById("loses-btn");
const assistsBtn = document.getElementById("assists-btn");
const tacklesBtn = document.getElementById("tackles-btn");
const foulsBtn = document.getElementById("fouls-btn");
const savesBtn = document.getElementById("saves-btn");

appearencesBtn.addEventListener('click', appearencesStatComp);

console.log(player1Current.appearences)
console.log(player2Current.appearences)

function appearencesStatComp(){
    revealPlayer2Card()
    if(player1Current.appearences > player2Current.appearences){
    comparisonDisplay.textContent = `You Win this round, ${player1Current.name}'s stat of ${player1Current.appearences} is greater than ${player2Current.appearences}` //find better place for this
    console.log(`You Win this round, ${player1Current.name}'s stat of ${player1Current.appearences} is greater than ${player2Current.appearences}`)
    updateResult('player1-win')
    } else if(player1Current.appearences < player2Current.appearences){
    comparisonDisplay.textContent = `You loose this round, ${player2Current.name}'s stat of ${player2Current.appearences} is greater than ${player1Current.appearences}`
    console.log(`You loose this round, ${player2Current.name}'s stat of ${player2Current.appearences} is greater than ${player1Current.appearences}`)
    updateResult('player2-win')
    } else {
    comparisonDisplay.textContent = `It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.loses}`
    console.log(`It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.loses}`)    
    }
}

goalsBtn.addEventListener('click', goalsStatComp);

console.log(player1Current.goals)
console.log(player2Current.goals)

function goalsStatComp(){
    revealPlayer2Card()
    if(player1Current.goals > player2Current.goals){
    comparisonDisplay.textContent = `You Win this round, ${player1Current.name}'s stat of ${player1Current.goals} is greater than ${player2Current.goals}`
    console.log(`You Win this round, ${player1Current.name}'s stat of ${player1Current.goals} is greater than ${player2Current.goals}`)
    updateResult('player1-win')
    } else if(player1Current.goals < player2Current.goals) {
    comparisonDisplay.textContent = `You loose this round, ${player2Current.name}'s stat of ${player2Current.goals} is greater than ${player1Current.goals}`
    console.log(`You loose this round, ${player2Current.name}'s stat of ${player2Current.goals} is greater than ${player1Current.goals}`)
    updateResult('player2-win')
    } else {
    comparisonDisplay.textContent = `It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.loses}`
    console.log(`It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.loses}`)    
    }
}

winsBtn.addEventListener('click', winsStatComp);

console.log(player1Current.wins)
console.log(player2Current.wins)

function winsStatComp(){
    revealPlayer2Card()
    if(player1Current.wins > player2Current.wins){
        comparisonDisplay.textContent = `You Win this round, ${player1Current.name}'s stat of ${player1Current.wins} is greater than ${player2Current.wins}`
        console.log(`You Win this round, ${player1Current.name}'s stat of ${player1Current.wins} is greater than ${player2Current.wins}`)
        updateResult('player1-win')
    } else if(player1Current.wins < player2Current.wins) {
        comparisonDisplay.textContent = `You loose this round, ${player2Current.name}'s stat of ${player2Current.wins} is greater than ${player1Current.wins}`
        console.log(`You loose this round, ${player2Current.name}'s stat of ${player2Current.wins} is greater than ${player1Current.wins}`)
        updateResult('player2-win')
    } else {
        comparisonDisplay.textContent = `It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.loses}`
        console.log(`It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.loses}`)    
    }
}

losesBtn.addEventListener('click', losesStatComp);

console.log(player1Current.loses)
console.log(player2Current.loses)

function losesStatComp(){
    revealPlayer2Card()
    if(player1Current.loses > player2Current.loses){
        comparisonDisplay.textContent = `You Win this round, ${player1Current.name}'s stat of ${player1Current.loses} is greater than ${player2Current.loses}`
        console.log(`You Win this round, ${player1Current.name}'s stat of ${player1Current.loses} is greater than ${player2Current.loses}`)
        updateResult('player1-win')
    } else if (player1Current.loses < player2Current.loses) {
        comparisonDisplay.textContent = `You loose this round, ${player2Current.name}'s stat of ${player2Current.loses} is greater than ${player1Current.loses}`
        console.log(`You loose this round, ${player2Current.name}'s stat of ${player2Current.loses} is greater than ${player1Current.loses}`)
        updateResult('player2-win')
    } else { 
        comparisonDisplay.textContent = `It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.loses}`
        console.log(`It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.loses}`)    
    }
}

assistsBtn.addEventListener('click', assistsStatComp);

console.log(player1Current.assists)
console.log(player2Current.assists)

function assistsStatComp(){
    revealPlayer2Card()
    if(player1Current.assists > player2Current.assists){
        comparisonDisplay.textContent = `You Win this round, ${player1Current.name}'s stat of ${player1Current.assists} is greater than ${player2Current.assists}`
        console.log(`You Win this round, ${player1Current.name}'s stat of ${player1Current.assists} is greater than ${player2Current.assists}`)
        updateResult('player1-win')
    } else if (player1Current.assists < player2Current.assists) {
        comparisonDisplay.textContent = `You loose this round, ${player2Current.name}'s stat of ${player2Current.assists} is greater than ${player1Current.assists}`
        console.log(`You loose this round, ${player2Current.name}'s stat of ${player2Current.assists} is greater than ${player1Current.assists}`)
        updateResult('player2-win')
    } else { 
        comparisonDisplay.textContent = `It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.assists}`
        console.log(`It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.assists}`)    
    }
}

tacklesBtn.addEventListener('click', tacklesStatComp);

console.log(player1Current.tackles)
console.log(player2Current.tackles)

function tacklesStatComp(){
    revealPlayer2Card()
    if(player1Current.tackles > player2Current.tackles){
        comparisonDisplay.textContent = `You Win this round, ${player1Current.name}'s stat of ${player1Current.tackles} is greater than ${player2Current.tackles}`
        console.log(`You Win this round, ${player1Current.name}'s stat of ${player1Current.tackles} is greater than ${player2Current.tackles}`)
        updateResult('player1-win')
    } else if (player1Current.tackles < player2Current.tackles) {
        comparisonDisplay.textContent = `You loose this round, ${player2Current.name}'s stat of ${player2Current.tackles} is greater than ${player1Current.tackles}`
        console.log(`You loose this round, ${player2Current.name}'s stat of ${player2Current.tackles} is greater than ${player1Current.tackles}`)
        updateResult('player2-win')
    } else {
        comparisonDisplay.textContent = `It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.tackles}`  
        console.log(`It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.tackles}`)    
    }
}

foulsBtn.addEventListener('click', foulsStatComp);

console.log(player1Current.fouls)
console.log(player2Current.fouls)

function foulsStatComp(){
    revealPlayer2Card()
    if(player1Current.fouls > player2Current.fouls){
        comparisonDisplay.textContent = `You Win this round, ${player1Current.name}'s stat of ${player1Current.fouls} is greater than ${player2Current.fouls}`
        console.log(`You Win this round, ${player1Current.name}'s stat of ${player1Current.fouls} is greater than ${player2Current.fouls}`)
        updateResult('player1-win')
    } else if (player1Current.fouls < player2Current.fouls) {
        comparisonDisplay.textContent = `You loose this round, ${player2Current.name}'s stat of ${player2Current.fouls} is greater than ${player1Current.fouls}`
        console.log(`You loose this round, ${player2Current.name}'s stat of ${player2Current.fouls} is greater than ${player1Current.fouls}`)
        updateResult('player2-win')
    } else {
        comparisonDisplay.textContent = `It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.fouls}`
        console.log(`It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.fouls}`)    
    }
}

savesBtn.addEventListener('click', savesStatComp);

console.log(player1Current.saves)
console.log(player2Current.saves)

function savesStatComp(){
    revealPlayer2Card() 
    if(player1Current.saves > player2Current.saves){
        comparisonDisplay.textContent = `You Win this round, ${player1Current.name}'s stat of ${player1Current.saves} is greater than ${player2Current.saves}`    
        console.log(`You Win this round, ${player1Current.name}'s stat of ${player1Current.saves} is greater than ${player2Current.saves}`)
        updateResult('player1-win')
    } else if (player1Current.saves < player2Current.saves) {
        comparisonDisplay.textContent = `You loose this round, ${player2Current.name}'s stat of ${player2Current.saves} is greater than ${player1Current.saves}`
        console.log(`You loose this round, ${player2Current.name}'s stat of ${player2Current.saves} is greater than ${player1Current.saves}`)
        updateResult('player2-win')
    } else {
        comparisonDisplay.textContent = `It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.saves}`
        console.log(`It's a Tie! Both ${player1Current.name} and ${player2Current.name} share the same stat of ${player1Current.saves}`)    
    }
}

//=====================================================================================================
//work out where and how to display message depending on who won and then update score and move on to next round
//=====================================================================================================

function updateResult(result){
    if(result=="player1-win"){
        player1Hand.push(player1Current)
        player1Hand.push(player2Current)
        console.log(player1Current)
        player1ScoreDisplay.textContent = `You have ${player1Hand.length} Cards`;
        player2ScoreDisplay.textContent = `The Computer has ${player2Hand.length} Cards`;
        messageDisplay.textContent = `Player 1 wins the round!`;
        playGame();
    }else if(result=="player2-win"){
        player2Hand.push(player1Current)
        player2Hand.push(player2Current)  
        player2ScoreDisplay.textContent = `The Computer has ${player2Hand.length} Cards`;
        player1ScoreDisplay.textContent = `The Computer has ${player1Hand.length} Cards`;
        messageDisplay.textContent = `The Computer wins the round!`;
        playGame();  
    }else{
        messageDisplay.textContent = `Draw!`;
        playGame();
    }
}

//=====================================================================================================
//determin if the game has ended or if it continues
//=====================================================================================================

const start = document.getElementById('start');


function playGame() {
    if (player2Hand.length == 30 || player1Hand.length == 0){
        messageDisplay.textContent = "You Suck, you were beaten by a computer!!!"
        start.style.visibility = 'hidden';//hides the next button to stop play
    } else if (player1Hand.length == 30 || player2Hand.length == 0){
        //win message
        messageDisplay.textContent = "The game has finished! Player 1 is the Victor!!!"
        start.style.visibility = 'hidden';//hides the next button to stop play
        
    }
}