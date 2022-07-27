class Deck {
    constructor(cards){
        this.cards = cards
    }
}

function TopTrumpCard(name, appearences, goals, wins, loses, assists, tackles, fouls, saves, img) {
	this.name = name;
	this.appearences = appearences;
	this.goals = goals;
	this.wins = wins;
	this.loses = loses;
	this.assists = assists;
	this.tackles = tackles;
	this.fouls = fouls;
	this.saves = saves;
	this.img = img;
}