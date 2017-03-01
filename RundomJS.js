var cardSet = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
function randCard(cards) {
	var val=Math.random()*cards.length;
	return cards[Math.floor(val)];
}

function getNcards(n, cards){
	var ret = [];
	for (var i=0; i < n; i++)
		ret.push(randCard(cards));
	return ret;
}

function showResultsFlop(){
	document.getElementById('flop').innerHTML = getNcards(3, cardSet);
}
function showResultsMyHand(){
	document.getElementById('pocket').innerHTML = getNcards(2, cardSet);
}
function showResultsTurn(){
	document.getElementById('turn').innerHTML = randCard(cardSet);
}
function showResultsRiver(){
	document.getElementById('river').innerHTML = randCard(cardSet);
}
