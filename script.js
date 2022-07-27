const cards = [
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

const goals = document.getElementById("goals");

console.log(goals)

//Players cards, socres and current updated cards
let player1Cards = [];
let player2Cards = [];

let player1Current = []
let player2Current = []

let player1Score = [];
let player2Score = [];


//work out how to randomly shuffle the footballer cards


//work out how to compare the stats against the computers stats


//work out where and how to display message depending on who won and then update score and move on to next round


//determin if the game has ended or if it continues

// function playGame() {
//     if player1Cards.length < 30 && player2Cards.length < 30){
//         //play game
//     } else if (player1Cards == 30){
//         //win message
//     } else if (player2Cards == 30){
//         //lose message
//     }
// }

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





