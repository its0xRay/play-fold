import React, { useState } from 'react';
import './App.css'; // Add your styles

function App() {
  const [card1, setCard1] = useState('');
  const [card2, setCard2] = useState('');
  const [result, setResult] = useState('');

  const formatCard = (card) => {
    const cardRank = card.slice(0, -1);
    const cardSuit = card.slice(-1);
    const suits = { S: '♠', D: '♦', H: '♥', C: '♣' };
    return cardRank + suits[cardSuit];
  };

  const calculateProbability = () => {
    const premiumCards = ['A', 'K'];
    const highCards = ['Q', 'J', '10'];
    const lowCards = ['2', '3', '4', '5', '6', '7', '8', '9'];

    const card1Rank = card1.substring(0, card1.length - 1);
    const card2Rank = card2.substring(0, card2.length - 1);

    if (
      premiumCards.includes(card1Rank) &&
      premiumCards.includes(card2Rank)
    ) {
      setResult('Probability of winning is very high. May consider playing.');
    } else if (
      (premiumCards.includes(card1Rank) && highCards.includes(card2Rank)) ||
      (highCards.includes(card1Rank) && premiumCards.includes(card2Rank))
    ) {
      setResult('Probability of winning is high. May consider playing.');
    } else if (highCards.includes(card1Rank) && highCards.includes(card2Rank)) {
      setResult('Probability of winning is Okay. May consider playing.');
    } else if (lowCards.includes(card1Rank) && lowCards.includes(card2Rank)) {
      setResult('Probability of winning is low. May consider folding.');
    } else {
      setResult('Mixed hand. Play cautiously');
    }
  };

  return (
    <div className="container">
      <h1>Poker Helper</h1>
      <p>
        Enter the card name/number(Ace: "A", King: "K", Queen: "Q", Jack: "J",
        9, 8, 7, 6, 5, 4, 3, 2, 1)
        <br />
        Followed by the first letter of the suit (Heart: "H", Diamond: "D",
        Club: "C", Spade: "S")
      </p>
      <h3>Starting Hands</h3>
      <label htmlFor="card1">Card 1:</label>
      <input
        type="text"
        id="card1"
        placeholder="AH for Ace of Heart"
        maxLength="2"
        value={card1}
        onChange={(e) => setCard1(e.target.value.toUpperCase().trim())}
      />
      <br />
      <label htmlFor="card2">Card 2:</label>
      <input
        type="text"
        id="card2"
        placeholder="9C for 9 of Club"
        maxLength="2"
        value={card2}
        onChange={(e) => setCard2(e.target.value.toUpperCase().trim())}
      />
      <br />
      <button onClick={calculateProbability}>Calculate</button>
      <div className="container1">
        <h2>Your Hand:</h2>
        <div id="user-card1" className="card">
          {formatCard(card1)}
        </div>
        <div id="user-card2" className="card">
          {formatCard(card2)}
        </div>
      </div>
      <div className="container2">
        <h2 id="result">Play or Fold: {result}</h2>
      </div>
    </div>
  );
}

export default App;
